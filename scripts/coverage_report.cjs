#!/usr/bin/env node
/** coverage_report.cjs -- which manuscripts made it into references/. */
const fs = require('fs'), path = require('path');
const sel = JSON.parse(fs.readFileSync('selected.json', 'utf8'));
const all = new Set(sel.map(p => p.dir));
const kept = new Set();
const dir = process.argv[2] || 'references';
for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.md')) continue;
  for (const m of fs.readFileSync(path.join(dir, f), 'utf8').matchAll(/^@src (.*)$/gm)) {
    const d = m[1].split('/preprints/')[1]; if (d) kept.add(d);
  }
}
const missing = [...all].filter(x => !kept.has(x));
console.log('manuscripts in collection : ' + all.size);
console.log('represented in corpus     : ' + kept.size);
console.log('absent                    : ' + missing.length);
if (missing.length) {
  console.log('\nfirst 20 absent:');
  missing.slice(0, 20).forEach(m => console.log('  ' + m));
}
