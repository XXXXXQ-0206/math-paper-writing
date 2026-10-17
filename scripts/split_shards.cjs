#!/usr/bin/env node
/**
 * split_shards.cjs -- split the raw corpus into per-discipline shards.
 *
 * Each shard is a self-contained directory holding one file per writing
 * module, so a curator can own a discipline without touching anyone
 * else's files.
 *
 * Inputs : raw/*.md, selected.json
 * Output : shards/<discipline>/0X-*.md, shards/manifest.json
 */
const fs = require('fs'), path = require('path');

const sel = JSON.parse(fs.readFileSync('selected.json', 'utf8'));
const discOf = {};
for (const p of sel) discOf[p.dir] = p.disc;

const safe = d => d.replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase();
const MODULES = ['01-abstract.md','02-introduction.md','03-preliminaries.md',
                 '04-statements.md','05-proof.md','06-conclusion.md'];

const shards = {};
for (const m of MODULES) {
  const txt = fs.readFileSync(path.join('raw', m), 'utf8');
  const parts = txt.split(/(?=^@src )/m).slice(1);
  for (const part of parts) {
    const src = (part.match(/^@src (.*)$/m) || [])[1] || '';
    const dir = src.split('/preprints/')[1] || '';
    const d = discOf[dir] || 'Uncatalogued';
    (shards[d] = shards[d] || {});
    (shards[d][m] = shards[d][m] || []).push(part.trim());
  }
}

fs.rmSync('shards', { recursive: true, force: true });
const rows = [];
for (const [d, mods] of Object.entries(shards)) {
  const dd = path.join('shards', safe(d));
  fs.mkdirSync(dd, { recursive: true });
  let tot = 0, frags = 0;
  for (const m of MODULES) {
    const blocks = mods[m] || [];
    const out = '# ' + d + ' -- ' + m + ' (' + blocks.length + ' fragments)\n\n' + blocks.join('\n\n') + '\n';
    fs.writeFileSync(path.join(dd, m), out);
    tot += out.length; frags += blocks.length;
  }
  rows.push([d, safe(d), frags, tot]);
}
rows.sort((a, b) => b[3] - a[3]);
console.log('discipline'.padEnd(46) + 'frags'.padStart(7) + 'size'.padStart(11));
for (const [d, s, n, t] of rows) {
  console.log('  ' + d.padEnd(44) + String(n).padStart(7) + (Math.round(t / 1024) + ' KB').padStart(11));
}
const totalMB = rows.reduce((a, r) => a + r[3], 0) / 1048576;
console.log('\ntotal: ' + totalMB.toFixed(1) + ' MB across ' + rows.length + ' shards');
fs.writeFileSync('shards/manifest.json',
  JSON.stringify(rows.map(([d, s, n, t]) => ({ discipline: d, dir: s, fragments: n, bytes: t })), null, 1));
