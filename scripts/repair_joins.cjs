#!/usr/bin/env node
/**
 * repair_joins.cjs -- mark non-contiguous joins in curated fragments.
 *
 * A curator may drop a passage (or strip de-TeX junk) and join the two
 * surviving sides directly. The result reads continuously but is not a
 * contiguous run of the source. This finds each such jump, verifies that
 * BOTH sides are verbatim from the same manuscript, and inserts [...]
 * at the junction. It never adds or alters words.
 *
 * Usage: node tools/repair_joins.cjs [--apply] [--verbose]
 */
const fs = require('fs'), path = require('path');
const APPLY = process.argv.includes('--apply');
const VERBOSE = process.argv.includes('--verbose');
const MODULES = ['01-abstract.md','02-introduction.md','03-preliminaries.md',
                 '04-statements.md','05-proof.md','06-conclusion.md'];
const norm = s => String(s).replace(/\s+/g, ' ').trim();
const MIN = 25;

// index curated input by manuscript
const source = new Map();
for (const disc of fs.readdirSync('curated')) {
  const cd = path.join('curated', disc);
  if (!fs.statSync(cd).isDirectory()) continue;
  for (const m of MODULES) {
    const p = path.join(cd, m);
    if (!fs.existsSync(p)) continue;
    for (const raw of fs.readFileSync(p,'utf8').split(/(?=^@src )/m).filter(x=>x.startsWith('@src '))) {
      const src = (raw.match(/^@src (.*)$/m)||[])[1]||'';
      const b = norm(raw.replace(/^@src [^\n]*\n@title [^\n]*\n@section [^\n]*\n+/,''));
      source.set(src, (source.get(src)||'') + ' ' + b);
    }
  }
}

let scanned = 0, repaired = 0, unrepairable = 0;
const notes = [];

for (const disc of fs.readdirSync('final')) {
  const fd = path.join('final', disc);
  if (!fs.statSync(fd).isDirectory()) continue;
  for (const m of MODULES) {
    const p = path.join(fd, m);
    if (!fs.existsSync(p)) continue;
    const text = fs.readFileSync(p,'utf8');
    const parts = text.split(/(?=^@src )/m);
    let touched = false;
    const rebuilt = parts.map(part => {
      if (!part.startsWith('@src ')) return part;
      scanned++;
      const head = (part.match(/^@src [^\n]*\n@title [^\n]*\n@section [^\n]*\n+/)||[''])[0];
      const src = (part.match(/^@src (.*)$/m)||[])[1]||'';
      const hay = source.get(src);
      if (!hay) return part;
      const body = part.slice(head.length);
      // repair each existing segment that is not contiguous
      const segs = body.split('[...]').map(s => s);
      let changed = false;
      const fixed = segs.map(seg => {
        const raw = seg.trim();
        const s = norm(raw);
        if (s.length < MIN || hay.includes(s)) return seg;
        // longest matching prefix
        let lo = 0, hi = s.length;
        while (lo < hi) { const mid = Math.ceil((lo+hi)/2); if (hay.includes(s.slice(0,mid))) lo = mid; else hi = mid-1; }
        if (lo < MIN) { unrepairable++; notes.push('UNREPAIRABLE ' + disc+'/'+m+' '+src.split('/preprints/')[1]); return seg; }
        // find a split k where the tail is verbatim
        for (let k = lo; k < s.length - MIN; k++) {
          const tail = s.slice(k).trim();
          if (tail.length < MIN) break;
          if (hay.includes(tail)) {
            const cut = raw.indexOf(s.slice(k, k+20));
            if (cut < 0) continue;
            changed = true; repaired++;
            notes.push('JOIN ' + disc+'/'+m+'  ' + src.split('/preprints/')[1] + '  at ' + cut);
            return raw.slice(0, cut).trimEnd() + ' [...] ' + raw.slice(cut).trimStart();
          }
        }
        unrepairable++; notes.push('UNREPAIRABLE ' + disc+'/'+m+' '+src.split('/preprints/')[1]);
        return seg;
      });
      if (changed) {
        touched = true;
        // collapse doubled markers
        let nb = fixed.join(' [...] ').replace(/(\s*\[\.\.\.\]\s*)+/g, ' [...] ');
        return head + nb.trim();
      }
      return part;
    }).join('');
    if (touched && APPLY) fs.writeFileSync(p, rebuilt);
  }
}
console.log((APPLY?'APPLIED':'DRY RUN') + ': scanned ' + scanned + ', joins repaired ' + repaired + ', unrepairable ' + unrepairable);
if (VERBOSE || !APPLY) notes.slice(0, 30).forEach(n => console.log('  ' + n));