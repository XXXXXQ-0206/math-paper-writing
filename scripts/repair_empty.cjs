#!/usr/bin/env node
/**
 * repair_empty.cjs -- fix fragments whose body is empty or a stub.
 *
 * A curator can emit a label with no body (a bad merge or a trim that
 * consumed everything). This restores the body from the curated input for
 * the same @src + @section; if no source body exists, the fragment is
 * dropped. It never invents text.
 *
 * Usage: node tools/repair_empty.cjs <final-dir> <curated-dir> [--apply]
 */
const fs = require('fs'), path = require('path');

const finalDir = process.argv[2], refDir = process.argv[3];
const apply = process.argv.includes('--apply');
if (!finalDir || !refDir) { console.error('usage: node tools/repair_empty.cjs <final> <curated> [--apply]'); process.exit(2); }

const MODULES = ['01-abstract.md','02-introduction.md','03-preliminaries.md',
                 '04-statements.md','05-proof.md','06-conclusion.md'];
const MIN = 80;

function parse(text) {
  return text.split(/(?=^@src )/m).filter(x => x.startsWith('@src ')).map(raw => {
    const m = raw.match(/^(@src [^\n]*\n@title [^\n]*\n@section [^\n]*\n+)/);
    return { head: m ? m[1] : '', body: m ? raw.slice(m[1].length).trim() : raw.trim(), raw };
  });
}

let restored = 0, dropped = 0, files = 0;
for (const mod of MODULES) {
  const fp = path.join(finalDir, mod), rp = path.join(refDir, mod);
  if (!fs.existsSync(fp)) continue;
  const frags = parse(fs.readFileSync(fp, 'utf8'));
  // index the curated input by src+section, and by src alone
  const byKey = new Map(), bySrc = new Map();
  if (fs.existsSync(rp)) {
    for (const f of parse(fs.readFileSync(rp, 'utf8'))) {
      const src = (f.head.match(/^@src (.*)$/m) || [])[1] || '';
      const sec = (f.head.match(/^@section (.*)$/m) || [])[1] || '';
      byKey.set(src + '|' + sec, f.body);
      if (!bySrc.has(src) || f.body.length > bySrc.get(src).length) bySrc.set(src, f.body);
    }
  }
  let touched = false;
  const out = [];
  for (const f of frags) {
    if (f.body.length >= MIN) { out.push(f); continue; }
    const src = (f.head.match(/^@src (.*)$/m) || [])[1] || '';
    const sec = (f.head.match(/^@section (.*)$/m) || [])[1] || '';
    const cand = byKey.get(src + '|' + sec) || bySrc.get(src);
    if (cand && cand.length >= MIN) {
      out.push({ head: f.head, body: cand.slice(0, 1200) });
      restored++; touched = true;
      console.log('RESTORED ' + mod + '  ' + src.split('/preprints/')[1] + '  (' + cand.length + 'B)');
    } else {
      dropped++; touched = true;
      console.log('DROPPED  ' + mod + '  ' + src.split('/preprints/')[1] + '  (no source body)');
    }
  }
  if (touched) {
    files++;
    if (apply) fs.writeFileSync(fp, out.map(f => f.head + f.body).join('\n\n') + '\n');
  }
}
console.log((apply ? 'APPLIED' : 'DRY RUN') + ': restored ' + restored + ', dropped ' + dropped + ', files ' + files);