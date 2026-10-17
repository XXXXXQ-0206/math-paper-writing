#!/usr/bin/env node
/**
 * select_all.cjs -- take EVERY manuscript in the collection.
 *
 * Unlike select_papers.cjs (which caps at 4 per discipline), this keeps
 * every preprint directory that has a parseable root .tex, and records
 * its discipline from the catalogue where one is known.
 *
 * Inputs : _repo/preprints/, overview.tex
 * Output : selected.json  (+ a per-discipline census on stdout)
 */
const fs = require('fs'), path = require('path');

const ROOT = process.env.MATH_REPO || '_repo/preprints';

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out); else out.push(p);
  }
  return out;
}
function rootTexAll(dir) {
  const tex = walk(dir).filter(f => f.endsWith('.tex'));
  const info = tex.map(f => { const s = fs.readFileSync(f, 'utf8'); return { f, cls: /\\documentclass/.test(s), doc: /\\begin\{document\}/.test(s) }; });
  let roots = info.filter(x => x.cls && x.doc).map(x => x.f);
  if (!roots.length) roots = info.filter(x => x.doc).map(x => x.f);
  if (!roots.length) roots = info.filter(x => x.cls).map(x => x.f);
  if (!roots.length) return null;
  const rank = f => { const n = path.basename(f); return n === 'main.tex' ? 0 : n === 'paper.tex' ? 1 : 2; };
  roots.sort((a, b) => rank(a) - rank(b) || a.split(path.sep).length - b.split(path.sep).length);
  return roots;
}
function body(root, maxDepth = 6) {
  const seen = new Set();
  function expand(file, depth) {
    if (depth > maxDepth || seen.has(file) || !fs.existsSync(file)) return '';
    seen.add(file);
    let s = fs.readFileSync(file, 'utf8');
    s = s.replace(/\\input\{([^}]+)\}/g, (m, g1) => {
      const c = path.join(path.dirname(file), g1.endsWith('.tex') ? g1 : g1 + '.tex');
      return fs.existsSync(c) ? expand(c, depth + 1) : '';
    });
    return s;
  }
  const resolved = expand(root, 0);
  const i = resolved.indexOf('\\begin{document}');
  return i >= 0 ? resolved.slice(i + 16) : resolved;
}

// catalogue: preprint directory -> {discipline, result number, title}
const discOf = {};
{
  const ov = fs.readFileSync('overview.tex', 'utf8');
  let cur = null;
  const re = /\\cataloguesection\{([^}]*)\}\{(\d+)\}|\\resultentry\{(\d+)\}\{([^}]*)\}\{([^}]*)\}\{((?:[^{}]|\{[^{}]*\})*)\}/g;
  let m;
  while ((m = re.exec(ov))) {
    if (m[1] !== undefined) { cur = m[1]; continue; }
    if (m[3] !== undefined && cur) {
      for (const x of m[6].matchAll(/preprints\/([^\/{)]+)\//g)) {
        if (!(x[1] in discOf)) discOf[x[1]] = { disc: cur, num: m[3], title: m[4] };
      }
    }
  }
}

const all = [];
const census = {};
for (const dirName of fs.readdirSync(ROOT)) {
  const dir = path.join(ROOT, dirName);
  if (!fs.statSync(dir).isDirectory()) continue;
  const cands = rootTexAll(dir);
  if (!cands || !cands.length) continue;
  // Some directories ship several documents (main.tex + part-1.tex + summary.tex).
  // Take the first candidate that actually yields sections, not merely a preamble.
  let rt = cands[0], b = body(rt);
  if (!/\\section\*?\{/.test(b)) {
    for (const c of cands.slice(1)) { const bb = body(c); if (/\\section\*?\{/.test(bb)) { rt = c; b = bb; break; } }
  }
  const abs = b.match(/\\begin\{abstract\}([\s\S]*?)\\end\{abstract\}/);
  const meta = discOf[dirName];
  const rec = {
    dir: dirName,
    disc: meta ? meta.disc : 'Uncatalogued',
    num: meta ? meta.num : '',
    title: meta ? meta.title : dirName.replace(/-/g, ' '),
    root: path.relative(dir, rt).replace(/\\/g, '/'),
    nSec: (b.match(/\\section\*?\{/g) || []).length,
    absLen: abs ? abs[1].length : 0,
  };
  all.push(rec);
  census[rec.disc] = (census[rec.disc] || 0) + 1;
}

console.log('discipline'.padEnd(44) + 'manuscripts');
for (const [d, n] of Object.entries(census).sort((a, b) => b[1] - a[1])) {
  console.log('  ' + d.padEnd(42) + String(n).padStart(5));
}
console.log('\nTOTAL MANUSCRIPTS: ' + all.length);
fs.writeFileSync('selected.json', JSON.stringify(all, null, 1));
