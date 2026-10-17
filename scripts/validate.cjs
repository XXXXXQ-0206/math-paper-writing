#!/usr/bin/env node
/**
 * validate.cjs -- check a curated shard against the skill's requirements.
 *
 * Enforces the four things that make the corpus usable:
 *   1. COVERAGE  every manuscript in the shard is represented
 *   2. BUDGET    the shard stays within its byte budget
 *   3. LABELS    every fragment has well-formed @src/@title/@section
 *   4. HYGIENE   no leftover LaTeX in labels, no empty bodies
 *
 * Usage: node tools/validate.cjs <curated-dir> <reference-dir> [--budget=KB]
 */
const fs = require('fs'), path = require('path');

const MODULES = ['01-abstract.md','02-introduction.md','03-preliminaries.md',
                 '04-statements.md','05-proof.md','06-conclusion.md'];

const dir = process.argv[2], ref = process.argv[3];
if (!dir) { console.error('usage: node tools/validate.cjs <curated-dir> [reference-dir] [--budget=KB]'); process.exit(2); }
const budgetArg = (process.argv.find(a => a.startsWith('--budget=')) || '').split('=')[1];
const BUDGET = budgetArg ? Number(budgetArg) * 1024 : Infinity;

const problems = [];
let bytes = 0, frags = 0;
const papers = new Set(), refPapers = new Set();

for (const m of MODULES) {
  const p = path.join(dir, m);
  if (!fs.existsSync(p)) { problems.push('MISSING module file: ' + m); continue; }
  const txt = fs.readFileSync(p, 'utf8');
  bytes += Buffer.byteLength(txt);

  const parts = txt.split(/(?=^@src )/m).filter(x => x.startsWith('@src '));
  if (!parts.length) { console.log('  note: ' + m + ' has no fragments (allowed)'); }
  for (const raw of parts) {
    frags++;
    const src = (raw.match(/^@src (.*)$/m) || [])[1];
    const title = (raw.match(/^@title (.*)$/m) || [])[1];
    const sec = (raw.match(/^@section (.*)$/m) || [])[1];
    if (!src) problems.push(m + ': fragment without @src');
    if (title === undefined) problems.push(m + ': fragment without @title');
    if (sec === undefined) problems.push(m + ': fragment without @section');
    const stripped = String(title || '').replace(/\$[^$]*\$/g, '') + ' ' + String(sec || '').replace(/\$[^$]*\$/g, '');
    if (/\\/.test(stripped)) problems.push('LaTeX left in label: ' + (title || sec));
    const body = raw.replace(/^@src [^\n]*\n@title [^\n]*\n@section [^\n]*\n+/, '').trim();
    if (body.length < 80) problems.push(m + ': body too short (' + body.length + 'B) in ' + (src || '?').slice(-40));
    if (src) papers.add(src.split('/preprints/')[1]);
  }
}

if (ref && fs.existsSync(ref)) {
  for (const m of MODULES) {
    const p = path.join(ref, m);
    if (!fs.existsSync(p)) continue;
    for (const x of fs.readFileSync(p, 'utf8').matchAll(/^@src (.*)$/gm)) {
      const d = x[1].split('/preprints/')[1]; if (d) refPapers.add(d);
    }
  }
  const missing = [...refPapers].filter(x => !papers.has(x));
  if (missing.length) problems.push('COVERAGE: ' + missing.length + ' manuscripts absent, e.g. ' + missing.slice(0, 3).join(', '));
}

const size = (bytes / 1024).toFixed(0) + ' KB';
const over = bytes > BUDGET;
console.log(path.basename(dir).padEnd(44) + 'frags=' + String(frags).padStart(6) +
            '  papers=' + String(papers.size).padStart(4) + '  size=' + size.padStart(9) +
            (BUDGET < Infinity ? '  budget=' + (BUDGET / 1024) + 'KB' + (over ? '  OVER' : '  ok') : ''));
if (over) problems.push('BUDGET: ' + size + ' exceeds ' + (BUDGET / 1024) + ' KB');

if (problems.length) {
  console.log('\nPROBLEMS (' + problems.length + '):');
  for (const p of problems.slice(0, 25)) console.log('  - ' + p);
  if (problems.length > 25) console.log('  ... and ' + (problems.length - 25) + ' more');
  process.exit(1);
}
console.log('  OK');
