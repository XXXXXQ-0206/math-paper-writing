#!/usr/bin/env node
/**
 * assemble.cjs -- merge every final/<discipline>/ into the skill corpus.
 *
 * Produces references/0X-*.md for the installed skill, keeping fragments
 * grouped by discipline so the corpus stays navigable, and reports the
 * coverage and size of the result.
 *
 * Inputs : final/<discipline>/*.md
 * Output : references/0X-*.md, papers.tsv, _assembly-report.json
 */
const fs = require('fs'), path = require('path');

const MODULES = ['01-abstract.md','02-introduction.md','03-preliminaries.md',
                 '04-statements.md','05-proof.md','06-conclusion.md'];
const TITLES = {
  '01-abstract.md': 'Abstract',
  '02-introduction.md': 'Introduction',
  '03-preliminaries.md': 'Preliminaries, definitions and conventions',
  '04-statements.md': 'Statement of results',
  '05-proof.md': 'Proof and argument',
  '06-conclusion.md': 'Conclusion, consequences and open problems',
};

const finalRoot = process.argv[2] || 'final';
const outRoot = process.argv[3] || 'references';
fs.mkdirSync(outRoot, { recursive: true });

const disciplines = fs.readdirSync(finalRoot)
  .filter(d => fs.statSync(path.join(finalRoot, d)).isDirectory())
  .sort();

const papers = new Set();
const report = [];
let grand = 0;

for (const m of MODULES) {
  const chunks = [];
  let frags = 0, bytes = 0;
  for (const d of disciplines) {
    const p = path.join(finalRoot, d, m);
    if (!fs.existsSync(p)) continue;
    const txt = fs.readFileSync(p, 'utf8');
    const parts = txt.split(/(?=^@src )/m).filter(x => x.startsWith('@src '));
    if (!parts.length) continue;
    chunks.push('## ' + d.replace(/-/g, ' ') + '\n\n' + parts.map(x => x.trim()).join('\n\n'));
    frags += parts.length;
    bytes += Buffer.byteLength(txt);
    for (const x of txt.matchAll(/^@src (.*)$/gm)) {
      const dd = x[1].split('/preprints/')[1]; if (dd) papers.add(dd);
    }
  }
  const head = '# ' + TITLES[m] + ' corpus (' + frags + ' fragments from ' + papers.size + ' manuscripts)\n\n' +
               'Fragments are grouped by discipline. Each carries @src (manuscript), @title, and\n' +
               '@section (where it sits in the paper, and what kind of result it states).\n\n';
  const body = head + chunks.join('\n\n') + '\n';
  fs.writeFileSync(path.join(outRoot, m), body);
  report.push({ module: m, fragments: frags, bytes: body.length });
  grand += body.length;
}

console.log('module'.padEnd(22) + 'frags'.padStart(8) + 'size'.padStart(11));
for (const r of report) {
  console.log(r.module.padEnd(22) + String(r.fragments).padStart(8) + (Math.round(r.bytes / 1024) + ' KB').padStart(11));
}
console.log('TOTAL'.padEnd(22) + ''.padStart(8) + (Math.round(grand / 1024) + ' KB').padStart(11));
console.log('\nmanuscripts represented: ' + papers.size);
fs.writeFileSync(path.join(outRoot, '_assembly-report.json'),
  JSON.stringify({ modules: report, totalBytes: grand, manuscripts: papers.size }, null, 1));
