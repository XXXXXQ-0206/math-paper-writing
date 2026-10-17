#!/usr/bin/env node
/**
 * curate.cjs -- per-paper selection and condensation for one discipline.
 *
 * The raw corpus contains every fragment of every manuscript. A style
 * corpus does not need all of it: it needs, for each manuscript, the
 * fragments that best model how that manuscript is written. This tool
 * enforces a per-manuscript budget per module and ranks the candidates.
 *
 * Scoring (higher is better, all heuristic):
 *   + prose density      (letters per non-letter character)
 *   + sentence length    (a real paragraph, not a stub)
 *   + section-label prior (a "— theorem" fragment is a good statement model)
 *   - equation density    ([EQ] per 100 words)
 *   - reference density   ([REF] per 100 words)
 *   - cross-reference-only openings
 *
 * Usage:
 *   node tools/curate.cjs <in-dir> <out-dir> [--budget=N] [--report]
 *   budgets default to  per module: abstract 1200, introduction 1800,
 *   preliminaries 1200, statements 1600, proof 1600, conclusion 1400
 */
const fs = require('fs'), path = require('path');

const MODULES = ['01-abstract.md','02-introduction.md','03-preliminaries.md',
                 '04-statements.md','05-proof.md','06-conclusion.md'];
const DEFAULT_BUDGET = {
  '01-abstract.md': 1200,
  '02-introduction.md': 1800,
  '03-preliminaries.md': 1200,
  '04-statements.md': 1600,
  '05-proof.md': 1600,
  '06-conclusion.md': 1400,
};

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

function score(f) {
  const b = f.body;
  const words = (b.match(/[A-Za-z]{2,}/g) || []).length;
  if (words < 25 || b.length < 200) return -1;   // too short to model a style
  const letters = (b.match(/[A-Za-z]/g) || []).length;
  const prose = letters / Math.max(1, b.length);
  const eq = (b.match(/\[EQ\]/g) || []).length;
  const ref = (b.match(/\[REF\]/g) || []).length;
  const eqPer100 = eq / Math.max(1, words / 100);
  const refPer100 = ref / Math.max(1, words / 100);
  // a genuine paragraph, not a stub or a wall of formulas
  const len = Math.min(words, 220) / 220;
  let s = 2.0 * prose + 1.2 * len - 0.25 * eqPer100 - 0.15 * refPer100;
  // reward labelled statements and definitions
  if (/—\s*(theorem|proposition|lemma|corollary|conjecture|definition|convention|notation|assumption|setup|hypothesis)\s*$/i.test(f.section)) s += 0.55;
  // penalise fragments that open mid-sentence or with a bare cross-reference
  if (/^\[(REF|EQ)\]/.test(b)) s -= 0.5;
  if (/^(and|but|so|then|thus|hence|therefore|whereas)\b/i.test(b)) s -= 0.3;
  // an abstract that opens "We prove" is a strong model
  if (/^We (prove|show|establish|give|construct|answer|develop)\b/.test(b)) s += 0.4;
  return s;
}

function trim(body, budget) {
  if (body.length <= budget) return body;
  const cut = body.slice(0, budget);
  const stop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('.\n'), cut.lastIndexOf('; '));
  return (stop > budget * 0.55 ? cut.slice(0, stop + 1) : cut).trim() + '\n\n[TRUNCATED]';
}

const inDir = process.argv[2], outDir = process.argv[3];
if (!inDir || !outDir) { console.error('usage: node tools/curate.cjs <in-dir> <out-dir>'); process.exit(2); }
const budgetArg = (process.argv.find(a => a.startsWith('--budget=')) || '').split('=')[1];
const BUDGET = budgetArg ? Object.fromEntries(MODULES.map(m => [m, Number(budgetArg)])) : DEFAULT_BUDGET;

fs.mkdirSync(outDir, { recursive: true });
const stats = {};
for (const m of MODULES) {
  const src = path.join(inDir, m);
  if (!fs.existsSync(src)) continue;
  const frags = parse(fs.readFileSync(src, 'utf8'));

  const byPaper = new Map();
  for (const f of frags) {
    if (!byPaper.has(f.src)) byPaper.set(f.src, []);
    byPaper.get(f.src).push(f);
  }

  const kept = [];
  let dropped = 0;
  for (const [src_, list] of byPaper) {
    const scored = list.map(f => ({ f, s: score(f) })).filter(x => x.s >= 0)
      .sort((a, b) => b.s - a.s);
    if (!scored.length) { dropped += list.length; continue; }
    dropped += list.length - scored.length;
    // take the best, then keep adding while the budget allows
    let used = 0;
    for (const { f } of scored) {
      if (used >= BUDGET[m]) break;
      const room = BUDGET[m] - used;
      if (room < 320) break;   // no room for a meaningful fragment
      const body = trim(f.body, room);
      kept.push({ ...f, body });
      used += body.length;
    }
  }
  kept.sort((a, b) => a.src.localeCompare(b.src));
  const head = '# ' + path.basename(inDir) + ' -- ' + m + ' (' + kept.length + ' fragments, ' +
               new Set(kept.map(k => k.src)).size + ' manuscripts)\n\n';
  const out = head + kept.map(k => {
    const body = k.body === k.raw.split('\n\n').slice(1).join('\n\n') ? k.body : k.body;
    return '@src ' + k.src + '\n@title ' + k.title + '\n@section ' + k.section + '\n\n' + body;
  }).join('\n\n') + '\n';
  fs.writeFileSync(path.join(outDir, m), out);
  stats[m] = { in: frags.length, out: kept.length, dropped, bytes: out.length };
}

if (process.argv.includes('--report')) {
  console.log('module'.padEnd(22) + 'in'.padStart(7) + 'out'.padStart(7) + 'dropped'.padStart(9) + 'size'.padStart(11));
  let tb = 0;
  for (const [m, s] of Object.entries(stats)) {
    console.log(m.padEnd(22) + String(s.in).padStart(7) + String(s.out).padStart(7) +
                String(s.dropped).padStart(9) + (Math.round(s.bytes / 1024) + ' KB').padStart(11));
    tb += s.bytes;
  }
  console.log('TOTAL'.padEnd(22) + ''.padStart(7) + ''.padStart(7) + ''.padStart(9) + (Math.round(tb / 1024) + ' KB').padStart(11));
}
