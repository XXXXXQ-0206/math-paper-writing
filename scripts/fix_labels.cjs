#!/usr/bin/env node
/**
 * fix_labels.cjs -- normalize LaTeX in @title and @section lines.
 * Converts accents and math delimiters to the corpus convention: plain
 * ASCII for names, $...$ for math. Bodies are never touched.
 * Usage: node tools/fix_labels.cjs <dir> [<dir> ...] [--apply]
 */
const fs = require('fs'), path = require('path');
const apply = process.argv.includes('--apply');
const MARK = String.fromCharCode(1);

const ACCENTS = [
  [/\\[\x22\x27\x60^~=.]\{?([a-zA-Z])\}?/g, '$1'],
  [/\\c\{?([a-zA-Z])\}?/g, '$1'],
  [/\\v\{?([a-zA-Z])\}?/g, '$1'],
  [/\\H\{?([a-zA-Z])\}?/g, '$1'],
  [/\\r\{?([a-zA-Z])\}?/g, '$1'],
  [/\\k\{?([a-zA-Z])\}?/g, '$1'],
  [/\\b\{?([a-zA-Z])\}?/g, '$1'],
  [/\\d\{?([a-zA-Z])\}?/g, '$1'],
  [/\\ss\b/g, 'ss'],
  [/\\o\b/g, 'o'],
  [/\\O\b/g, 'O'],
  [/\\l\b/g, 'l'],
  [/\\L\b/g, 'L'],
  [/\\ae\b/g, 'ae'],
  [/\\AE\b/g, 'AE']
];

function fixLabel(v) {
  let t = String(v);
  const vault = [];
  t = t.replace(/\$[^$]*\$/g, function (m) { vault.push(m); return MARK + (vault.length - 1) + MARK; });
  t = t.replace(/\\\(([\s\S]*?)\\\)/g, function (m, g) { return '$' + g + '$'; });
  for (const pair of ACCENTS) t = t.replace(pair[0], pair[1]);
  t = t.replace(/\\[ ,;:!]/g, ' ');   // escaped space and thin spaces
  t = t.replace(/\\[a-zA-Z@]+\*?/g, ' ');
  t = t.replace(/\\\[[^\]]*\]/g, ' ');
  t = t.replace(/[{}]/g, '').replace(/[~]/g, ' ');
  t = t.replace(/\s+/g, ' ').trim();
  t = t.replace(new RegExp(MARK + '([0-9]+)' + MARK, 'g'), function (m, i) { return vault[Number(i)]; });
  return t.replace(/\s+/g, ' ').trim();
}

function walk(d, out) {
  out = out || [];
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, out); else if (p.endsWith('.md')) out.push(p);
  }
  return out;
}

let files = 0, changed = 0, lines = 0;
const samples = [];
for (const root of process.argv.slice(2)) {
  if (root.startsWith('--') || !fs.existsSync(root)) continue;
  for (const f of walk(root)) {
    const before = fs.readFileSync(f, 'utf8');
    const after = before.split('\n').map(function (l) {
      const m = l.match(/^(@(?:title|section) )(.*)$/);
      if (!m) return l;
      const fixed = fixLabel(m[2]);
      if (fixed !== m[2]) {
        lines++;
        if (samples.length < 8) samples.push('  ' + m[2] + '\n   -> ' + fixed);
        return m[1] + fixed;
      }
      return l;
    }).join('\n');
    files++;
    if (after !== before) { changed++; if (apply) fs.writeFileSync(f, after); }
  }
}
console.log((apply ? 'APPLIED' : 'DRY RUN') + ': ' + files + ' files, ' + changed + ' changed, ' + lines + ' label lines fixed');
if (samples.length) { console.log('\nsamples:'); samples.forEach(function (s) { console.log(s); }); }