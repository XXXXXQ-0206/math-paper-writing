#!/usr/bin/env node
/** Diagnose provenance failures: find where a segment diverges from source. */
const fs = require('fs'), path = require('path');
const MODULES = ['01-abstract.md','02-introduction.md','03-preliminaries.md','04-statements.md','05-proof.md','06-conclusion.md'];
const norm = s => String(s).replace(/\s+/g, ' ').trim();

const CASES = [
  ['dynamical-systems-and-ergodic-theory','02-introduction.md','uniform-bounds-for-planar-polynomial-limit-cycles'],
  ['real-and-complex-analysis','03-preliminaries.md','Koebes-Circle-Domain-Conjecture'],
  ['topology','02-introduction.md','Filtered-products-and-boundary-preserving-compression'],
];

for (const [disc, mod, stem] of CASES) {
  console.log('===== ' + disc + ' / ' + mod + ' / ' + stem);
  // gather this manuscript's curated input across all modules
  let hay = '';
  for (const m of MODULES) {
    const p = path.join('curated', disc, m);
    if (!fs.existsSync(p)) continue;
    for (const raw of fs.readFileSync(p,'utf8').split(/(?=^@src )/m).filter(x=>x.startsWith('@src '))) {
      const src = (raw.match(/^@src (.*)$/m)||[])[1]||'';
      if (!src.includes(stem)) continue;
      hay += ' ' + norm(raw.replace(/^@src [^\n]*\n@title [^\n]*\n@section [^\n]*\n+/,''));
    }
  }
  // find the failing body
  const p = path.join('final', disc, mod);
  for (const raw of fs.readFileSync(p,'utf8').split(/(?=^@src )/m).filter(x=>x.startsWith('@src '))) {
    const src = (raw.match(/^@src (.*)$/m)||[])[1]||'';
    if (!src.includes(stem)) continue;
    const body = norm(raw.replace(/^@src [^\n]*\n@title [^\n]*\n@section [^\n]*\n+/,''));
    for (const seg of body.split('[...]')) {
      const s = norm(seg);
      if (s.length < 25) continue;
      if (hay.includes(s)) continue;
      // longest matching prefix
      let lo = 0, hi = s.length;
      while (lo < hi) { const mid = Math.ceil((lo+hi)/2); if (hay.includes(s.slice(0,mid))) lo = mid; else hi = mid-1; }
      console.log('  BODY : ' + s.slice(0, 200));
      console.log('  MATCH: ' + JSON.stringify(s.slice(0, lo)));
      console.log('  DIVERGE AT: ' + JSON.stringify(s.slice(lo, lo+70)));
      console.log('  SRC HAS  : ' + JSON.stringify(hay.slice(hay.indexOf(s.slice(0,Math.min(lo,40)))+lo, hay.indexOf(s.slice(0,Math.min(lo,40)))+lo+70)));
      console.log('');
    }
  }
}