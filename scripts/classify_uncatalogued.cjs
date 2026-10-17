#!/usr/bin/env node
/**
 * classify_uncatalogued.cjs -- assign a discipline to manuscripts the
 * catalogue does not list, by scoring title/directory keywords.
 * Writes selected.json in place (adds discSource: catalogue|keyword).
 */
const fs = require('fs');
const sel = JSON.parse(fs.readFileSync('selected.json', 'utf8'));

const RULES = [
  ['Number theory', /elliptic|modular|selmer|shafarevich|tate|heegner|galois represent|dirichlet|l-function|zeta|riemann|primes?\b|arithmetic|diophantine|p-adic|class field|iwasawa|automorphic|hecke|cusp form|quadratic form|lattice|rational point|bsd|birch|swinnerton|goldfeld|hilbert.s tenth|abc conjecture|langlands|congruent/i],
  ['Algebraic and complex geometry', /scheme|variet|morphism|cohomolog|hodge|kahler|kähler|sheaf|divisor|bundle|birational|minimal model|log canonical|abundance|calabi|fano|surfaces?\b|threefold|fourfold|motive|chow|gromov|symplectic|algebraic curve|elliptic surface|nef|ample|semiample|iitaka|kodaira|weil|kuga|satake|abelian/i],
  ['Algebra', /group theor|rings?\b|modules?\b|fields?\b|galois theory|representation theor|lie algebra|hopf|tensor|homological algebra|category theor|commutative algebra|noetherian|cohen-macaulay|brauer|quiver|associative/i],
  ['Group theory', /group\b|groups\b|subgroup|cayley|coxeter|amenab|kazhdan|sofic|hyperbolic group|free group|braid|wreath|soluble|nilpotent/i],
  ['Probability and statistical mechanics', /random|probability|brownian|martingale|percolation|ising|potts|gibbs|entropy|stochastic|markov|limit law|central limit|large deviation|spin glass|parisi|mezard|interacting particle|dimer|six-vertex|reconstruction|mixing time|concentration/i],
  ['Mathematical physics', /quantum|schr|heisenberg|hamiltonian|spectral gap|fermion|boson|vlasov|boltzmann|yang-mills|conformal field|renormaliz|einstein|general relativ|black hole|penrose|hawking|wave equation|scattering|many-body|bose|condensate|laughlin|hall effect|topological order|anyon|entanglement/i],
  ['Partial differential equations', /partial differential|\bpde\b|navier|stokes|elliptic equation|parabolic|hyperbolic equation|regularity|a priori|sobolev|weak solution|viscosity solution|harmonic|laplacian|calabi flow|ricci flow|mean curvature|blow-up|singularit|dispersive|klein-gordon|maxwell/i],
  ['Differential geometry', /riemannian|manifold|curvature|geodesic|metric space|ricci|holonomy|minimal surface|hyperbolic manifold|symplectic manifold|contact structure|fibration|spin structure|yamabe|scalar curvature/i],
  ['Topology', /topolog|homotopy|homology|fundamental group|knot|manifold|surgery|cobordism|k-theory|characteristic class|bordism|4-manifold|smooth structure|disc embedding|exotic/i],
  ['Combinatorics', /combinator|graph\b|graphs\b|hypergraph|ramsey|extremal|coloring|colour|matching|matroid|poset|permutation|additive combinator|sumset|arithmetic progression|design\b|tournament|chromatic/i],
  ['Theoretical computer science', /algorithm|complexity|np-hard|np-complete|turing|computab|circuit|lower bound|approximation|decidab|automata|logic program|proof complexity|p versus np|cryptograph|communication complexity|quantum algorithm|satisfiab|constraint/i],
  ['Mathematical logic', /model theory|set theory|forcing|ordinal|cardinal|consistency|independence|descriptive set|recursion theor|computability|large cardinal|continuum hypothesis|definab|ultrafilter|zfc|peano/i],
  ['Operator algebras', /operator algebra|c\*-algebra|von neumann|factor\b|trace\b|projection|amenab|nuclear|k-theory of|derivation|masa|subfactor|free group factor|connes|kaplansky|quasitrace|tracial/i],
  ['Functional analysis', /banach|hilbert space|normed|operator\b|spectral theor|compact operator|reflexive|weak topology|uniform convexity|interpolation space|frame\b|basis\b/i],
  ['Real and complex analysis', /harmonic analysis|fourier|analytic function|holomorphic|meromorphic|entire function|conformal|quasiconformal|potential theor|measure theor|lebesgue|fatou|carleson|restriction conjecture|falconer|hausdorff dimension|fractal/i],
  ['Convex and metric geometry', /convex|polytope|metric geometry|embedding|isoperimetric|brunn|minkowski|banach space geometry|normed space|volume|surface area|discrete geometry|sphere packing|john.s|geodesic metric/i],
  ['Dynamical systems and ergodic theory', /dynamical|ergodic|entropy|mixing|billiard|hyperbolic dynamics|anosov|rotation number|invariant measure|recurrence|chaos|attractor|foliation|teichmuller|moduli space of curves|flows?\b/i],
];

let changed = 0;
for (const p of sel) {
  if (p.disc !== 'Uncatalogued') { p.discSource = 'catalogue'; continue; }
  const hay = (p.title + ' ' + p.dir).replace(/-/g, ' ');
  let best = null, bestScore = 0;
  for (const [disc, re] of RULES) {
    const m = hay.match(new RegExp(re.source, 'gi'));
    const score = m ? m.length : 0;
    if (score > bestScore) { bestScore = score; best = disc; }
  }
  if (best && bestScore >= 2) { p.disc = best; p.discSource = 'keyword'; changed++; }
  else { p.discSource = 'unclassified'; }
}
const census = {};
for (const p of sel) census[p.disc] = (census[p.disc] || 0) + 1;
console.log('reclassified by keyword: ' + changed);
for (const [d, n] of Object.entries(census).sort((a, b) => b[1] - a[1])) {
  console.log('  ' + d.padEnd(44) + String(n).padStart(5));
}
fs.writeFileSync('selected.json', JSON.stringify(sel, null, 1));
