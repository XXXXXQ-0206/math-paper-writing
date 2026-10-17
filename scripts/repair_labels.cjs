#!/usr/bin/env node
/**
 * repair_labels.cjs -- recompute @title lines in curated/ from the source.
 *
 * The first-generation title cleaner stripped LaTeX math commands, so
 * titles like "Erd\H{o}s" became "Erd o" and "$n\log n$" became "$n n$".
 * This rewrites only the @title line of each fragment; bodies are untouched.
 *
 * Usage: node tools/repair_labels.cjs [--apply]
 */
const fs = require('fs'), path = require('path');

const sel = JSON.parse(fs.readFileSync('selected.json', 'utf8'));
const rootOf = {};
for (const p of sel) rootOf[p.dir] = p.root;
const ROOT = '_repo/preprints';

/** Title cleaner that PRESERVES $...$ math and folds accents to ASCII. */
function cleanTitle(raw, fallback) {
  let t = String(raw);
  const vault = [];
  // Normalize \( ... \) to $...$ so both math forms are protected alike.
  t = t.replace(/\\\(([^)]*)\\\)/g, (m, g1) => '$' + g1 + '$');
  // Protect inline math from every later rule.
  t = t.replace(/\$[^$]*\$/g, m => { vault.push(m); return '\u0001' + (vault.length - 1) + '\u0001'; });
  t = t.replace(/\\texorpdfstring\s*\{([^{}]*)\}\s*\{[^{}]*\}/g, '$1');
  t = t.replace(/\\\\/g, ' ');
  // Accents: \H{o}, \"a, \'e, \ss, \o, \l, \ae
  t = t.replace(/\\[`'^"~=.]\s*\{?([a-zA-Z])\}?/g, '$1');
  t = t.replace(/\\ss\b/g, 'ss').replace(/\\o\b/g, 'o').replace(/\\O\b/g, 'O');
  t = t.replace(/\\l\b/g, 'l').replace(/\\L\b/g, 'L').replace(/\\ae\b/g, 'ae');
  t = t.replace(/\\[a-zA-Z@]+\*?/g, ' ');
  t = t.replace(/[{}]/g, '').replace(/[~]/g, ' ');
  t = t.replace(/\s+/g, ' ').trim();
  t = t.replace(/\u0001(\d+)\u0001/g, (m, i) => vault[Number(i)]);
  t = t.replace(/\s+/g, ' ').trim();
  return t.length > 4 ? t : fallback;
}

function extractTitle(src) {
  // Brace-counted extraction: a non-greedy regex stops at the first '}'
  // inside math such as $\mathrm{SLE}_3$, truncating the title.
  const at = src.search(/\\title\s*(?:\[[^\]]*\])?\s*\{/);
  if (at < 0) return null;
  const open = src.indexOf('{', at);
  let depth = 0;
  for (let j = open; j < src.length; j++) {
    const ch = src[j];
    if (ch === '{') depth++;
    else if (ch === '}') { depth--; if (depth === 0) return src.slice(open + 1, j); }
  }
  return null;
}

function titleFromRoot(dir) {
  const rel = rootOf[dir];
  if (!rel) return null;
  const f = path.join(ROOT, dir, rel);
  if (!fs.existsSync(f)) return null;
  const raw = extractTitle(fs.readFileSync(f, 'utf8'));
  if (raw === null) return null;
  return cleanTitle(raw, null);
}

const apply = process.argv.includes('--apply');
let files = 0, changed = 0, missing = 0;
const samples = [];

const ROOTS = process.argv.slice(2).filter(a => !a.startsWith('--'));
const scanRoots = ROOTS.length ? ROOTS : ['curated'];
for (const rootDir of scanRoots) {
for (const disc of fs.readdirSync(rootDir)) {
  const dd = path.join(rootDir, disc);
  if (!fs.statSync(dd).isDirectory()) continue;
  for (const f of fs.readdirSync(dd)) {
    if (!f.endsWith('.md')) continue;
    const p = path.join(dd, f);
    const txt = fs.readFileSync(p, 'utf8');
    let touched = false;
    const parts = txt.split(/(?=^@src )/m);
    const rebuilt = parts.map(part => {
      if (!part.startsWith('@src ')) return part;
      const dir = (part.match(/^@src .*\/preprints\/([^\s]+)\s*$/m) || [])[1];
      if (!dir) return part;
      const t = titleFromRoot(dir);
      if (!t) { missing++; return part; }
      const cur = (part.match(/^@title (.*)$/m) || [])[1] || '';
      if (cur === t) return part;
      touched = true; changed++;
      if (samples.length < 14 && /Erd o|\$n n|_1\$|\[4pt\]|and$|\\/.test(cur)) {
        samples.push('  OLD: ' + cur + '\n  NEW: ' + t);
      }
      return part.replace(/^@title .*$/m, '@title ' + t);
    }).join('');
    files++;
    if (touched && apply) fs.writeFileSync(p, rebuilt);
  }
}
}
console.log((apply ? 'APPLIED' : 'DRY RUN') + ': ' + files + ' files, ' + changed +
            ' titles repaired, ' + missing + ' without a source title');
if (samples.length) { console.log('\nsamples:'); samples.forEach(s => console.log(s)); }
