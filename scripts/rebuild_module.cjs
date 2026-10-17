#!/usr/bin/env node
/**
 * rebuild_module.cjs -- regenerate one output module from curated input.
 *
 * Used to restore a module that was damaged by a bad mechanical pass.
 * Keeps every manuscript, picks its longest curated fragment, and trims
 * to a budget at a sentence boundary. Output is verbatim by construction.
 *
 * Usage: node tools/rebuild_module.cjs <discipline> <module> <budgetBytes>
 */
const fs = require('fs'), path = require('path');
const [disc, mod, budgetArg] = process.argv.slice(2);
const BUDGET = Number(budgetArg || 900);
if (!disc || !mod) { console.error('usage: node tools/rebuild_module.cjs <disc> <module> <budget>'); process.exit(2); }

const src = path.join('curated', disc, mod);
const dst = path.join('final', disc, mod);
const text = fs.readFileSync(src, 'utf8');
const frags = text.split(/(?=^@src )/m).filter(x => x.startsWith('@src '));

function trimAtSentence(body, budget) {
  if (body.length <= budget) return body;
  const cut = body.slice(0, budget);
  const stop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('.\n'));
  return (stop > budget * 0.5 ? cut.slice(0, stop + 1) : cut).trim() + '\n\n[...]';
}

// one fragment per manuscript: the longest
const best = new Map();
for (const raw of frags) {
  const head = (raw.match(/^@src [^\n]*\n@title [^\n]*\n@section [^\n]*\n+/) || [''])[0];
  const srcUrl = (raw.match(/^@src (.*)$/m) || [])[1] || '';
  const body = raw.slice(head.length).trim();
  const cur = best.get(srcUrl);
  if (!cur || body.length > cur.body.length) best.set(srcUrl, { head, body });
}

const parts = [];
for (const [srcUrl, v] of best) {
  parts.push(v.head + trimAtSentence(v.body, BUDGET));
}
const header = '# ' + disc + ' -- ' + mod + '\n\n';
fs.writeFileSync(dst, header + parts.join('\n\n') + '\n');
console.log(disc + '/' + mod + ': rebuilt ' + parts.length + ' fragments from ' + frags.length +
            ' curated, ' + (fs.statSync(dst).size / 1024).toFixed(1) + ' KB');