#!/usr/bin/env node
/**
 * build_clusters.cjs -- de-TeX the selected manuscripts and cluster the
 * prose into the six writing modules under references/.
 *
 * Inputs : _repo/preprints/, selected.json
 * Output : references/01-abstract.md ... references/06-conclusion.md, papers.tsv
 *
 * Usage: node scripts/build_clusters.cjs
 */

const fs=require('fs'),path=require('path');
const ROOT = process.env.MATH_REPO || '_repo/preprints';
const sel=JSON.parse(fs.readFileSync('selected.json','utf8'));
function body(dir,root,maxDepth=6){
  const seen=new Set();
  function expand(file,depth){
    if(depth>maxDepth||seen.has(file)) return '';
    seen.add(file); if(!fs.existsSync(file)) return '';
    let s=fs.readFileSync(file,'utf8');
    s=s.replace(/\\input\{([^}]+)\}/g,(mm,g1)=>{
      const c=path.join(path.dirname(file),g1.endsWith('.tex')?g1:g1+'.tex');
      return fs.existsSync(c)?expand(c,depth+1):'';
    });
    return s;
  }
  const full=expand(root,0);
  const i=full.indexOf('\\begin{document}');
  return i>=0?full.slice(i+16):full;
}
// ---- de-TeX that PROTECTS math ----
function deTeX(src){
  let s=src.replace(/\r/g,'');
  const vault=[];
  const stash=(t)=>{ vault.push(t); return '\u0000'+(vault.length-1)+'\u0000'; };

  // 1. protect verbatim-ish and drop non-prose environments
  for(const env of ['figure','figure*','table','table*','tikzpicture','verbatim','lstlisting','thebibliography','algorithm','algorithmic','filecontents','comment']){
    const e=env.replace('*','\\*');
    s=s.replace(new RegExp('\\\\begin\\{'+e+'\\}[\\s\\S]*?\\\\end\\{'+e+'\\}','g'),' ');
  }
  // 2. display math -> [EQ]
  s=s.replace(/\\\[[\s\S]*?\\\]/g,' [EQ] ').replace(/\$\$[\s\S]*?\$\$/g,' [EQ] ');
  for(const env of ['equation','equation*','align','align*','gather','gather*','multline','multline*','eqnarray','eqnarray*','displaymath','array','matrix','pmatrix','bmatrix','cases','split','aligned']){
    const e=env.replace('*','\\*');
    s=s.replace(new RegExp('\\\\begin\\{'+e+'\\}[\\s\\S]*?\\\\end\\{'+e+'\\}','g'),' [EQ] ');
  }
  // 3. protect inline math (stash before any command stripping)
  // also normalise the backslash-paren inline-math form into dollar form
  s=s.replace(/\\\(([\s\S]*?)\\\)/g,(mm,g1)=>'$'+g1+'$');
  s=s.replace(/\$([^$]+)\$/g,(mm,g1)=>{
    let t=g1.replace(/\s+/g,' ').trim();
    // normalise \mathbb Q -> \mathbb{Q}, \mathcal F -> \mathcal{F}
    t=t.replace(/\\(mathbb|mathcal|mathbf|mathrm|mathfrak|operatorname|text|emph)\s*([A-Za-z])/g,'\\$1{$2}');
    t=t.replace(/\\(mathbb|mathcal|mathbf|mathrm|mathfrak)\{([^{}]*)\}/g,'\\$1{$2}');
    return stash('$'+t+'$');
  });
  // 4. citations / refs / labels
  s=s.replace(/\\cite[tp]?\*?(?:\[[^\]]*\])*\{[^}]*\}/g,'[CITE]');
  s=s.replace(/\\(?:Cref|cref|eqref|autoref|ref)\{[^}]*\}/g,'[REF]');
  s=s.replace(/\\label\{[^}]*\}/g,'');
  // 5. headings
  s=s.replace(/\\(?:section|subsection|subsubsection|paragraph)\*?\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g,'\n@@HEAD@@ $1\n');
  // 6. keep content of text formatting
  s=s.replace(/\\(?:emph|textit|textbf|textsc|textrm|textsf|texttt|mbox|text)\{([^{}]*)\}/g,'$1');
  // 7. environments + spacing
  s=s.replace(/\\(?:begin|end)\{[^}]*\}/g,' ');
  s=s.replace(/\\(?:noindent|smallskip|medskip|bigskip|clearpage|newpage|centering|hfill|par|quad|qquad|item)\b/g,' ');
  // 8. remaining commands: drop
  s=s.replace(/\\[a-zA-Z@]+\*?/g,' ');
  s=s.replace(/[{}]/g,'').replace(/~/g,' ');
  // 9. restore math
  s=s.replace(/\u0000(\d+)\u0000/g,(mm,i)=>vault[Number(i)]);
  // 10. whitespace
  s=s.split('\n').map(l=>l.replace(/[ \t]+/g,' ').trim()).filter(Boolean).join('\n');
  return s.replace(/\n{2,}/g,'\n').trim();
}
function sections(t){
  const out=[]; const idx=[]; const re=/\\section\*?\{/g; let m;
  while((m=re.exec(t))) idx.push(m.index);
  if(!idx.length) return [{title:'',text:t}];
  if(idx[0]>0) out.push({title:'',text:t.slice(0,idx[0])});
  for(let i=0;i<idx.length;i++){
    const c=t.slice(idx[i], i+1<idx.length?idx[i+1]:t.length);
    const q=c.match(/^\\section\*?\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/);
    out.push({title:q?q[1].trim():'',text:c});
  }
  return out;
}
function classify(title){
  const t=title.toLowerCase().replace(/\\[a-zA-Z]+/g,' ').replace(/[^a-z ]/g,' ').replace(/\s+/g,' ').trim();
  if(!t) return null;
  if(/introduction|overview|outline of|guide to/.test(t)) return 'introduction';
  if(/preliminar|convention|notation|set up|setup|background|standing|preparation|preparatory|foundation|general (setting|framework|facts)|basic (facts|definitions)|terminology/.test(t)) return 'preliminaries';
  if(/conclusion|consequences|further (remarks|questions|directions)|open (problems|questions)|outlook|closing|discussion|applications and/.test(t)) return 'conclusion';
  return 'proof';
}
const THM=['theorem','proposition','corollary','conjecture','claim'];
const DEF=['definition','convention','notation','assumption','setup','hypothesis'];
function envBlocks(text,names){
  const out=[];
  for(const n of names){
    const re=new RegExp('\\\\begin\\{'+n+'\\}(?:\\[[^\\]]*\\])?([\\s\\S]*?)\\\\end\\{'+n+'\\}','g');
    let m;
    while((m=re.exec(text))){
      const before=text.slice(Math.max(0,m.index-420),m.index);
      const lead=before.split(/(?<=[.!?])\s+/).slice(-2).join(' ').trim();
      out.push({kind:n,lead,body:m[1]});
    }
  }
  return out;
}
function usable(t,minLen,minWords){
  if(t.length<minLen) return false;
  const words=(t.match(/[A-Za-z]{2,}/g)||[]).length;
  if(words<minWords) return false;
  const eq=(t.match(/\[EQ\]/g)||[]).length;
  if(eq/Math.max(1,words/60)>3.5) return false;
  if(/\u0000/.test(t)) return false;               // unresolved placeholder
  if(/(\\[a-zA-Z]+){0,1}\s*$/.test(t)&&t.length<minLen*1.2) return false;
  return true;
}
const clean=t=>t.split('\n').map(l=>l.startsWith('@@HEAD@@')?'**'+l.slice(8).trim()+'**':l).join('\n').trim();
/** Strip LaTeX from a title so the corpus labels stay readable. */
function plainTitle(raw,fallback){
  let t=String(raw)
    .replace(/\\\\/g,' ')                     // LaTeX line break
    .replace(/\\texorpdfstring\{([^{}]*)\}\{[^{}]*\}/g,'$1')
    .replace(/\\[^a-zA-Z]/g,'')                  // accents, delimiters, thin spaces
    .replace(/\\[a-zA-Z@]+\*?/g,' ')        // remaining commands
    .replace(/[{}]/g,'').replace(/[~]/g,' ')
    .replace(/\s+/g,' ').trim();
  return t.length>4?t:fallback;
}
function paperTitle(rootFile,fallback){
  const s=fs.readFileSync(rootFile,'utf8');
  const m=s.match(/\\title(?:\[[^\]]*\])?\{([\s\S]*?)\}/);
  return m?plainTitle(m[1],fallback):fallback;
}

const PAPER_CAP=20000, MOD_CAP=20000000;
const mods={abstract:[],introduction:[],preliminaries:[],statements:[],proof:[],conclusion:[]};
const tsv=[];
for(const p of sel){
  const dir=path.join(ROOT,p.dir);
  const rootFile=path.join(dir,p.root);
  const b=body(dir,rootFile);
  const src='https://github.com/openai/math/tree/main/preprints/'+p.dir;
  const title=paperTitle(rootFile,p.title);
  const add=(mod,sec,text,minLen,minWords)=>{
    const c=clean(deTeX(text)).slice(0,PAPER_CAP);
    if(!usable(c,minLen,minWords)) return;
    mods[mod].push({src,title,sec,text:c});
  };
  const am=b.match(/\\begin\{abstract\}([\s\S]*?)\\end\{abstract\}/);
  if(am) add('abstract','Abstract',am[1],150,25);
  for(const s of sections(b)){
    const mod=classify(s.title);
    if(!mod) continue;
    if(mod==='introduction'){ add('introduction',s.title,s.text,1200,180); continue; }
    if(mod==='preliminaries'){ add('preliminaries',s.title,s.text,600,90); continue; }
    if(mod==='conclusion'){ add('conclusion',s.title,s.text,600,90); continue; }
    add('proof',s.title,s.text,900,140);
    for(const e of envBlocks(s.text,THM)) add('statements',s.title+' — '+e.kind, e.lead+'\n\n'+e.body, 220, 30);
    for(const e of envBlocks(s.text,DEF)) add('preliminaries',s.title+' — '+e.kind, e.lead+'\n\n'+e.body, 180, 25);
  }
  tsv.push([p.disc,p.num,title.replace(/\t/g,' '),p.dir].join('\t'));
}
const FILES={abstract:'01-abstract.md',introduction:'02-introduction.md',preliminaries:'03-preliminaries.md',statements:'04-statements.md',proof:'05-proof.md',conclusion:'06-conclusion.md'};
const OUT='raw';
fs.mkdirSync(OUT,{recursive:true});
const report=[];
for(const [mod,items] of Object.entries(mods)){
  const order=[]; const byPaper=new Map();
  for(const it of items){ if(!byPaper.has(it.src)){ byPaper.set(it.src,[]); order.push(it.src);} byPaper.get(it.src).push(it); }
  let out='# '+mod+' corpus ('+order.length+' sources)\n\n';
  let cursor=0, added=0, progress=true;
  while(progress && out.length<MOD_CAP){
    progress=false;
    for(const k of order){
      const list=byPaper.get(k); if(cursor>=list.length) continue;
      const it=list[cursor];
      const block='@src '+it.src+'\n@title '+plainTitle(it.title,it.title)+'\n@section '+plainTitle(it.sec,'(untitled)')+'\n\n'+it.text+'\n\n';
      if(out.length+block.length>MOD_CAP) continue;
      out+=block; added++; progress=true;
    }
    cursor++;
  }
  fs.writeFileSync(path.join(OUT,FILES[mod]),out);
  report.push([FILES[mod],order.length,added,out.length]);
}
console.log('module'.padEnd(22)+'srcs'.padStart(6)+'blocks'.padStart(8)+'size'.padStart(11));
let tot=0;
for(const [f,s,n,l] of report){ console.log(f.padEnd(22)+String(s).padStart(6)+String(n).padStart(8)+(Math.round(l/1024)+' KB').padStart(11)); tot+=l; }
console.log('TOTAL'.padEnd(22)+''.padStart(6)+''.padStart(8)+(Math.round(tot/1024)+' KB').padStart(11));
fs.writeFileSync('papers.tsv','discipline\tresult\ttitle\tdir\n'+tsv.join('\n')+'\n');
console.log('\npapers.tsv rows:',tsv.length);
