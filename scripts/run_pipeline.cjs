#!/usr/bin/env node
/**
 * run_pipeline.cjs -- condense then curate every shard.
 * Inputs : shards/, selected.json
 * Output : curated/<discipline>/*.md, curated/_baseline.json
 */
const fs = require('fs'), path = require('path');
const { execFileSync } = require('child_process');

const shardRoot = 'shards';
const outRoot = 'curated';
fs.rmSync(outRoot, { recursive: true, force: true });
fs.mkdirSync(outRoot, { recursive: true });

const rows = [];
for (const d of fs.readdirSync(shardRoot)) {
  const sd = path.join(shardRoot, d);
  if (!fs.statSync(sd).isDirectory()) continue;
  const tmp = path.join(outRoot, '_tmp_' + d);
  const out = path.join(outRoot, d);
  fs.mkdirSync(tmp, { recursive: true });
  execFileSync(process.execPath, ['tools/condense.cjs', sd, tmp], { stdio: 'ignore' });
  execFileSync(process.execPath, ['tools/curate.cjs', tmp, out], { stdio: 'ignore' });
  fs.rmSync(tmp, { recursive: true, force: true });

  let raw = 0, cur = 0, papers = new Set();
  for (const f of fs.readdirSync(sd)) raw += fs.statSync(path.join(sd, f)).size;
  for (const f of fs.readdirSync(out)) {
    cur += fs.statSync(path.join(out, f)).size;
    const t = fs.readFileSync(path.join(out, f), 'utf8');
    for (const m of t.matchAll(/^@src (.*)$/gm)) papers.add(m[1]);
  }
  rows.push({ discipline: d, rawBytes: raw, curatedBytes: cur, manuscripts: papers.size });
}

rows.sort((a, b) => b.curatedBytes - a.curatedBytes);
console.log('discipline'.padEnd(42) + 'papers'.padStart(7) + 'raw'.padStart(10) + 'curated'.padStart(10) + 'ratio'.padStart(7));
let R = 0, C = 0, P = 0;
for (const r of rows) {
  console.log('  ' + r.discipline.padEnd(40) + String(r.manuscripts).padStart(7) +
    (Math.round(r.rawBytes / 1024) + 'K').padStart(10) +
    (Math.round(r.curatedBytes / 1024) + 'K').padStart(10) +
    ((100 * r.curatedBytes / r.rawBytes).toFixed(0) + '%').padStart(7));
  R += r.rawBytes; C += r.curatedBytes; P += r.manuscripts;
}
console.log('\nTOTAL  manuscripts(rows sum)=' + P + '  raw=' + (R / 1048576).toFixed(1) + ' MB  curated=' + (C / 1048576).toFixed(1) + ' MB  (' + (100 * C / R).toFixed(0) + '%)');
fs.writeFileSync(path.join(outRoot, '_baseline.json'), JSON.stringify(rows, null, 1));
