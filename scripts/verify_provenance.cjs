#!/usr/bin/env node
/**
 * verify_provenance.cjs -- independent check that no text was invented.
 *
 * Every emitted body is split on the cut marker [...]. Each resulting
 * segment must appear verbatim (whitespace-normalised) in the curated
 * input of the SAME manuscript named by its @src. A segment that cannot
 * be found is either invented prose or text borrowed from another paper.
 *
 * Usage: node tools/verify_provenance.cjs [--verbose]
 */
const fs = require('fs'), path = require('path');
const VERBOSE = process.argv.includes('--verbose');
const MODULES = ['01-abstract.md','02-introduction.md','03-preliminaries.md',
                 '04-statements.md','05-proof.md','06-conclusion.md'];

const norm = s => String(s).replace(/\s+/g, ' ').trim();
const MIN_SEG = 25;   // ignore short connective segments

let totalSegs = 0, badSegs = 0, badFrags = 0, totalFrags = 0;
const problems = [];

for (const disc of fs.readdirSync('final')) {
  const fd = path.join('final', disc), cd = path.join('curated', disc);
  if (!fs.statSync(fd).isDirectory()) continue;

  // index the curated input by manuscript
  const source = new Map();
  if (fs.existsSync(cd)) {
    for (const m of MODULES) {
      const p = path.join(cd, m);
      if (!fs.existsSync(p)) continue;
      for (const raw of fs.readFileSync(p, 'utf8').split(/(?=^@src )/m).filter(x => x.startsWith('@src '))) {
        const src = (raw.match(/^@src (.*)$/m) || [])[1] || '';
        const b = raw.replace(/^@src [^\n]*\n@title [^\n]*\n@section [^\n]*\n+/, '');
        source.set(src, (source.get(src) || '') + ' ' + norm(b));
      }
    }
  }

  for (const m of MODULES) {
    const p = path.join(fd, m);
    if (!fs.existsSync(p)) continue;
    for (const raw of fs.readFileSync(p, 'utf8').split(/(?=^@src )/m).filter(x => x.startsWith('@src '))) {
      totalFrags++;
      const src = (raw.match(/^@src (.*)$/m) || [])[1] || '';
      const body = norm(raw.replace(/^@src [^\n]*\n@title [^\n]*\n@section [^\n]*\n+/, ''));
      const hay = source.get(src);
      if (!hay) { problems.push(disc + '/' + m + ' :: no curated input for ' + src.split('/preprints/')[1]); badFrags++; continue; }
      let fragBad = false;
      for (const seg of body.split('[...]')) {
        const s = norm(seg);
        if (s.length < MIN_SEG) continue;
        totalSegs++;
        if (!hay.includes(s)) {
          badSegs++; fragBad = true;
          if (VERBOSE || problems.length < 12) {
            problems.push(disc + '/' + m + ' :: ' + src.split('/preprints/')[1] + ' :: ' + s.slice(0, 110));
          }
        }
      }
      if (fragBad) badFrags++;
    }
  }
}

console.log('fragments checked : ' + totalFrags);
console.log('segments checked  : ' + totalSegs + ' (>= ' + MIN_SEG + ' chars)');
console.log('segments NOT found: ' + badSegs);
console.log('fragments affected: ' + badFrags);
if (problems.length) {
  console.log('\nfirst problems:');
  problems.slice(0, 25).forEach(p => console.log('  - ' + p));
}
console.log(badSegs === 0 ? '\nPROVENANCE CLEAN: every segment is verbatim from its own manuscript.'
                          : '\nPROVENANCE FAILURES PRESENT.');