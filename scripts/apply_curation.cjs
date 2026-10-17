#!/usr/bin/env node
/**
 * apply_curation.cjs -- apply curation decisions to a shard.
 *
 * Decisions are keyed by module. Per-module rules:
 *   drop            [i, ...]      omit these fragment indices
 *   trim            { i: bytes }  keep first N bytes, cut at a sentence
 *   labels          { i: {title, section} }
 *   trimOver        N             trim EVERY fragment longer than N bytes
 *   dropShorterThan N             drop fragments with a body shorter than N
 *   maxPerPaper     N             keep at most N fragments per @src
 *   note            { i: reason }  recorded in the report
 *
 * Usage: node tools/apply_curation.cjs <in-dir> <out-dir> <decisions.json>
 */
const fs = require('fs'), path = require('path');

const [inDir, outDir, decFile] = process.argv.slice(2);
if (!inDir || !outDir || !decFile) {
  console.error('usage: node tools/apply_curation.cjs <in-dir> <out-dir> <decisions.json>');
  process.exit(2);
}
const dec = JSON.parse(fs.readFileSync(decFile, 'utf8'));
fs.mkdirSync(outDir, { recursive: true });

function splitFrag(raw) {
  const m = raw.match(/^(@src [^\n]*\n@title [^\n]*\n@section [^\n]*\n+)/);
  return { head: m ? m[1] : '', body: m ? raw.slice(m[1].length).trim() : raw.trim() };
}
function trimAtSentence(body, budget) {
  if (body.length <= budget) return body;
  const cut = body.slice(0, budget);
  const stop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('.\n'));
  return (stop > budget * 0.5 ? cut.slice(0, stop + 1) : cut).trim() + '\n\n[...]';
}

const report = [];
for (const [mod, rules] of Object.entries(dec)) {
  const src = path.join(inDir, mod);
  if (!fs.existsSync(src)) continue;
  let parts = fs.readFileSync(src, 'utf8').split(/(?=^@src )/m).slice(1).map(r => r.trim());

  const drop = new Set(rules.drop || []);
  const trim = rules.trim || {};
  const labels = rules.labels || {};
  const trimOver = rules.trimOver || 0;
  const dropShort = rules.dropShorterThan || 0;
  const maxPerPaper = rules.maxPerPaper || 0;

  let dropped = 0, trimmed = 0, relabelled = 0;

  // ---- per-fragment rules ----
  let kept = [];
  parts.forEach((raw, i) => {
    if (drop.has(i)) { dropped++; return; }
    const { head, body } = splitFrag(raw);
    if (dropShort && body.length < dropShort) { dropped++; return; }
    let h = head;
    if (labels[i]) {
      if (labels[i].title !== undefined) h = h.replace(/^@title .*$/m, '@title ' + labels[i].title);
      if (labels[i].section !== undefined) h = h.replace(/^@section .*$/m, '@section ' + labels[i].section);
      relabelled++;
    }
    let b = body;
    const budget = trim[i] || (trimOver && body.length > trimOver ? trimOver : 0);
    if (budget) { const nb = trimAtSentence(body, budget); if (nb !== b) { trimmed++; b = nb; } }
    kept.push({ head: h, body: b, src: (h.match(/^@src (.*)$/m) || [])[1] || '' });
  });

  // ---- per-paper cap ----
  if (maxPerPaper) {
    const seen = new Map();
    const out = [];
    for (const k of kept) {
      const n = (seen.get(k.src) || 0) + 1;
      seen.set(k.src, n);
      if (n <= maxPerPaper) out.push(k); else dropped++;
    }
    kept = out;
  }

  const head = '# ' + path.basename(inDir) + ' -- ' + mod + '\n\n';
  const text = head + kept.map(k => k.head + k.body).join('\n\n') + '\n';
  fs.writeFileSync(path.join(outDir, mod), text);

  report.push({ mod, inFrags: parts.length, outFrags: kept.length, dropped, trimmed, relabelled,
                inKB: +(fs.statSync(src).size / 1024).toFixed(1),
                outKB: +(Buffer.byteLength(text) / 1024).toFixed(1) });
}

console.log('module'.padEnd(22) + 'in'.padStart(6) + 'out'.padStart(6) + 'drop'.padStart(6) +
            'trim'.padStart(6) + 'label'.padStart(7) + 'inKB'.padStart(9) + 'outKB'.padStart(9));
let a = 0, b = 0;
for (const r of report) {
  console.log(r.mod.padEnd(22) + String(r.inFrags).padStart(6) + String(r.outFrags).padStart(6) +
              String(r.dropped).padStart(6) + String(r.trimmed).padStart(6) + String(r.relabelled).padStart(7) +
              String(r.inKB).padStart(9) + String(r.outKB).padStart(9));
  a += r.inKB; b += r.outKB;
}
console.log('TOTAL'.padEnd(22) + ''.padStart(6) + ''.padStart(6) + ''.padStart(6) + ''.padStart(6) +
            ''.padStart(7) + String(a.toFixed(1)).padStart(9) + String(b.toFixed(1)).padStart(9) +
            '  (' + (100 * b / a).toFixed(0) + '%)');
