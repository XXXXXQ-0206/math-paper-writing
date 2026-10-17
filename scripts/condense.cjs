#!/usr/bin/env node
/**
 * condense.cjs -- mechanical first pass over a shard.
 *
 * What it does (all deterministic, no judgement):
 *   1. drops boilerplate fragments that repeat across many manuscripts
 *      (acknowledgement-free statement openers, "The proof is complete",
 *      pure cross-reference paragraphs, ...)
 *   2. drops exact-duplicate fragments (same body from a different paper)
 *   3. drops near-duplicate fragments within the shard (shingle overlap)
 *   4. drops fragments with too little prose to be a style model
 *   5. merges consecutive fragments from the same paper+section
 *
 * What it does NOT do: decide whether a fragment is mathematically
 * interesting. That is the curator's job.
 *
 * Usage: node tools/condense.cjs <shard-dir> <out-dir> [--report]
 */
const fs = require('fs'), path = require('path');

const MODULES = ['01-abstract.md','02-introduction.md','03-preliminaries.md',
                 '04-statements.md','05-proof.md','06-conclusion.md'];

// ---- fragment parsing -------------------------------------------------
function parse(text) {
  return text.split(/(?=^@src )/m).slice(1).map(raw => {
    const body = raw.replace(/^@src [^\n]*\n@title [^\n]*\n@section [^\n]*\n+/, '').trim();
    return {
      raw: raw.trim(),
      src: (raw.match(/^@src (.*)$/m) || [])[1] || '',
      title: (raw.match(/^@title (.*)$/m) || [])[1] || '',
      section: (raw.match(/^@section (.*)$/m) || [])[1] || '',
      body,
    };
  });
}

// ---- boilerplate ------------------------------------------------------
// Whole-fragment patterns that carry no style signal.
const BOILERPLATE = [
  /^(the )?proof (of [^.]{0,40} )?is (now )?complete\.?$/i,
  /^this (concludes|completes) the proof\.?$/i,
  /^(see|cf\.?)\s+(section|chapter|the appendix)\b[^.]*\.?$/i,
  /^(the )?remaining (claims|assertions|statements) follow (similarly|by the same argument)\.?$/i,
  /^(this|it) (proves|establishes) the (claim|lemma|proposition|theorem)\.?$/i,
  /^acknowledge?ments?\b/i,
];

function isBoilerplate(body) {
  const t = body.trim();
  if (t.length < 60) return true;
  return BOILERPLATE.some(re => re.test(t));
}

// ---- shingles for near-duplicate detection ----------------------------
function shingles(s, k = 8) {
  const w = s.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i + k <= w.length; i++) set.add(w.slice(i, i + k).join(' '));
  return set;
}
function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  const [small, big] = a.size < b.size ? [a, b] : [b, a];
  for (const x of small) if (big.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}

// ---- main -------------------------------------------------------------
const shardDir = process.argv[2];
const outDir = process.argv[3];
if (!shardDir || !outDir) {
  console.error('usage: node tools/condense.cjs <shard-dir> <out-dir>');
  process.exit(2);
}
fs.mkdirSync(outDir, { recursive: true });

const stats = {};
for (const m of MODULES) {
  const src = path.join(shardDir, m);
  if (!fs.existsSync(src)) continue;
  const frags = parse(fs.readFileSync(src, 'utf8'));

  const kept = [];
  const seenExact = new Set();
  const sigs = [];
  let dropBoiler = 0, dropExact = 0, dropNear = 0, merged = 0;

  for (const f of frags) {
    if (isBoilerplate(f.body)) { dropBoiler++; continue; }
    const key = f.body.slice(0, 400);
    if (seenExact.has(key)) { dropExact++; continue; }
    seenExact.add(key);

    const sig = shingles(f.body);
    let dup = false;
    for (const s of sigs) {
      if (jaccard(sig, s) > 0.82) { dup = true; break; }
    }
    if (dup) { dropNear++; continue; }
    sigs.push(sig);

    // merge with the previous fragment when it is the same paper+section
    const prev = kept[kept.length - 1];
    if (prev && prev.src === f.src && prev.section === f.section && prev.body.length + f.body.length < 9000) {
      prev.body += '\n\n' + f.body;
      prev.raw = prev.raw.replace(/\n\n[\s\S]*$/, '') + '\n\n' + f.body;
      merged++;
      continue;
    }
    kept.push(f);
  }

  const head = '# ' + path.basename(shardDir) + ' -- ' + m + ' (' + kept.length + ' fragments)\n\n';
  fs.writeFileSync(path.join(outDir, m), head + kept.map(k => k.raw).join('\n\n') + '\n');
  stats[m] = { in: frags.length, out: kept.length, dropBoiler, dropExact, dropNear, merged };
}

if (process.argv.includes('--report')) {
  console.log('module'.padEnd(22) + 'in'.padStart(7) + 'out'.padStart(7) + 'boiler'.padStart(8) + 'exact'.padStart(7) + 'near'.padStart(7) + 'merged'.padStart(8));
  for (const [m, s] of Object.entries(stats)) {
    console.log(m.padEnd(22) + String(s.in).padStart(7) + String(s.out).padStart(7) +
                String(s.dropBoiler).padStart(8) + String(s.dropExact).padStart(7) +
                String(s.dropNear).padStart(7) + String(s.merged).padStart(8));
  }
}
