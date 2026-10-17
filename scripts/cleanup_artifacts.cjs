#!/usr/bin/env node
/**
 * cleanup_artifacts.cjs -- final textual cleanup of the corpus.
 *
 * Removes residues the de-TeX pass could not handle:
 *   - accent commands whose letter was dropped ("Erd os" -> "Erdos")
 *   - LaTeX line-break spacing in titles ("\\[4pt]")
 * Applies to every file under the given roots, in place.
 *
 * Usage: node tools/cleanup_artifacts.cjs <dir> [<dir> ...]
 */
const fs = require('fs'), path = require('path');

const RULES = [
  [/\bErd os\b/g, 'Erdos'],          // \H{o} lost its letter
  [/\bErd o\b/g, 'Erdos'],
  [/\\\[\d+(\.\d+)?pt\]/g, ' '],     // \\[4pt] line-break spacing
  [/\s{2,}/g, ' '],
];

function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, out); else if (p.endsWith('.md')) out.push(p);
  }
  return out;
}

let files = 0, changed = 0, total = 0;
for (const root of process.argv.slice(2)) {
  if (!fs.existsSync(root)) continue;
  for (const f of walk(root)) {
    const before = fs.readFileSync(f, 'utf8');
    let after = before;
    // only collapse double spaces on label lines, never inside prose bodies
    after = after.replace(/\\\[\d+(\.\d+)?pt\]/g, ' ');
    after = after.replace(/\bErd os\b/g, 'Erdos').replace(/\bErd o\b/g, 'Erdos');
  // Diacritic commands whose base letter was dropped by the de-TeX pass.
  // These are proper names; the source forms are R\o rdam and Milh\o j.
  after = after.replace(/\bR\s?o rdam\b/g, 'Rordam').replace(/\bR rdam\b/g, 'Rordam');
  after = after.replace(/\bMilh\s?j\b/g, 'Milhoj').replace(/\bMilh j\b/g, 'Milhoj');
    after = after.split('\n').map(l =>
      l.startsWith('@title ') || l.startsWith('@section ') ? l.replace(/\s{2,}/g, ' ') : l
    ).join('\n');
    files++;
    if (after !== before) {
      fs.writeFileSync(f, after);
      changed++;
      total += (before.length - after.length);
    }
  }
}
console.log('scanned ' + files + ' files, cleaned ' + changed + ', removed ' + total + ' bytes');
