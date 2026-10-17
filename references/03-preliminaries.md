# Preliminaries, definitions and conventions corpus (222 fragments from 674 manuscripts)

Fragments are grouped by discipline. Each carries @src (manuscript), @title, and
@section (where it sits in the paper, and what kind of result it states).

## algebra

@src https://github.com/openai/math/tree/main/preprints/A-counterexample-to-Tachikawas-second-conjecture-September-23-2026
@title A counterexample to Tachikawa's second conjecture
@section Homological preliminaries

**Homological preliminaries** The tools in this section serve two passages in the construction. Complete-resolution comparison will turn the triangular cone's endomorphism calculation into the vanishing needed for transfer to a symmetric algebra. Stable duality will supply the negative-degree maps used in that calculation. Separately, projective models and their stable images will turn the derived-induction object into a finite bimodule, preserving its maps and connecting morphisms under evaluation. Throughout the construction, $k$ has characteristic two. Unless explicitly stated otherwise, algebras and modules are finite dimensional over $k$.

[...]

Modules are left modules unless a side is specified. Write $D=\Hom_k(-,k)$ and $G^e=G\otimes_kG^{\mathrm{op}}$; an unsubscripted tensor product is over $k$. Differentials lower homological degree, and [EQ] Characteristic two removes the signs in shifts, tensor differentials and cones.

@src https://github.com/openai/math/tree/main/preprints/A-linear-list-coloring-bound-in-terms-of-the-Hadwiger-number-September-23-2026
@title A linear list-coloring bound in terms of the Hadwiger number
@section Preliminaries and probabilistic tools

**Preliminaries and probabilistic tools** All graphs are finite, simple, and undirected. A stable set is a set of pairwise nonadjacent vertices. For a vertex set $X$, write $P[X]$ for the induced subgraph and $P-X=P[V(P)\setminus X]$. A clique model consists of disjoint nonempty connected vertex sets, called bags, with an edge between every two bags. Models lift through edge contractions and vertex deletions, so $h$ is nonincreasing under taking minors. Whenever a subgraph is specified by its vertices, it is induced. A

[...]

graph is $k$-connected if it has more than $k$ vertices and remains connected after deletion of fewer than $k$ vertices. Such a graph has minimum degree at least $k$. A separator split is a partition $V(P)=A\mathbin{\dot\cup}Z\mathbin{\dot\cup}A'$, with $A,A'$ nonempty and anticomplete. If $|V(P)|>k$ and $P$ is not $k$-connected, there is such a split with $|Z|<k$.

@src https://github.com/openai/math/tree/main/preprints/A-Torsion-Free-Group-Algebra-with-Zero-Divisors-September-23-2026
@title A Torsion-Free Group Algebra with Zero Divisors
@section From bounded patterns to spherical arrangements — definition

A reduced spherical arrangement over $\Gamma$ consists of the following
data on an oriented sphere.
There are finitely many pairwise disjoint piecewise linear closed
disks. Each disk boundary carries a positive-length cyclically immersed
closed path in $\Gamma$, with the possible exception of one boundary.
That exceptional boundary carries a positive-length immersed interval
path starting at $x_A$ or $x_B$: its two endpoints are represented at one
marked boundary point, called the break. No immersion condition
is imposed across that break. At least one ordinary cyclically immersed
boundary is present.
The paths are read in the boundary orientations induced by the
oriented disks. Their edge occurrences are paired in distinct twos by
piecewise linear arcs whose interiors lie outside the disks. The arcs
are mutually disjoint, and each occurrence contains exactly one arc end
in its interior.
Paired occurrences have inverse signed letters in these boundary
orientations, and their underlying undirected edges of $\Gamma$ are
distinct, as required by Equation [REF].

@src https://github.com/openai/math/tree/main/preprints/Equality-cases-in-the-sharp-one-dimensional-matrix-Lieb-Thirring-inequality-October-5-2026
@title Equality cases in the sharp one-dimensional matrix Lieb--Thirring inequality
@section Spectral and convexity preliminaries

**Spectral and convexity preliminaries** Two elementary facts let us work with measurable potentials and identify the equality condition in the potential estimate.

[...]

Let $p>1$ and let $W:\R\to\C^{m\times m}$ be measurable, Hermitian and positive semidefinite, with $\int_\R\tr(W^p)<\infty$. The form $h_W$ on $H^1(\R;\C^m)$ is closed and bounded below. Multiplication by $W^{1/2}$ is compact from $H^1$ to $L^2$. The negative spectrum of $H_W$ consists of isolated eigenvalues of finite multiplicity, with possible accumulation only at zero. Its eigenfunctions belong to $H^1$ and satisfy $-\psi''-W\psi=\lambda\psi$ distributionally.

[...]

The one-dimensional Sobolev estimate, applied to the norm of a vector function, gives $\|\psi\|_\infty^2\le2\|\psi\|_2\|\psi'\|_2$. H\"older's inequality, interpolation and Young's inequality imply [EQ]

@src https://github.com/openai/math/tree/main/preprints/Lechs-multiplicity-conjecture-September-23-2026
@title Lech's multiplicity conjecture
@section The characteristic-$p$ argument — definition

We use the following terminology of Iyengar--Ma--Walker [CITE]. Let $(R,\mathfrak{m})$ be a Noetherian local ring of characteristic $p>0$ and dimension $d$. A short complex over $R$ is a complex of finite free modules [EQ] whose homology modules have finite length and for which $H_0(F)\ne0$.

[...]

When $G$ is finite free, let $\Phi_R^nG$ denote scalar extension along the $n$th Frobenius endomorphism. Its Dutta multiplicity is [EQ]

@src https://github.com/openai/math/tree/main/preprints/Reconstruction-of-Function-Fields-from-Mod-ell-Milnor-K-Theory-October-5-2026
@title Reconstruction of Function Fields from Mod-$\ell$ Milnor $K$-Theory
@section Alternating characters and quasi-divisorial valuations — definition

A quasi-divisorial valuation, or quasi-prime divisor, of
$F/\kappa$ is a valuation minimal under coarsening among those with
[EQ]
A quasi-prime divisor trivial on $\kappa$ is called a prime
divisor, or a true prime divisor.
A quasi-prime $r$-divisor is a composition of $r$
successive quasi-prime divisors on the resulting residue fields.

@src https://github.com/openai/math/tree/main/preprints/The-Blockwise-Alperin-Weight-Conjecture-September-23-2026
@title The Blockwise Alperin Weight Conjecture
@section Classical foundations used

**Classical foundations used** We state the classical inputs to make the scope of the proof explicit. We also use elementary linear algebra, field and group theory, and the basic definitions and functorial formalism of schemes, sheaves, divisors, and K\"ahler differentials.

[...]

[Finite groups] For a finite group $X$, its $p$-subgroups lie in Sylow subgroups of order $|X|_p$. A nontrivial finite $p$-group has nontrivial center and an element of order $p$, and each of its maximal proper subgroups is normal. We use the orbit--stabilizer formula and the usual fixed-point and conjugation actions. [Finite-dimensional algebras and characters] The Jacobson radical of a finite-dimensional algebra is nilpotent. Over an algebraically closed field, its semisimple quotient is a product of full matrix algebras, one for each simple module up to isomorphism.

## algebraic and complex geometry

@src https://github.com/openai/math/tree/main/preprints/A-conditional-abelianity-theorem-for-special-fourfold-pairs-with-a-half-weight-divisor-October-5-2026
@title A conditional abelianity theorem for special fourfold pairs with a half-weight divisor
@section Statement and context — definition

Remark [REF] gives the local comparison with orbifold symmetric differentials. Every connected smooth compact K\"ahler manifold which is special in the sense of Definition [REF] has virtually abelian entire discrete topological fundamental group, in every complex dimension.

[...]

A smooth compact complex manifold or a smooth root orbifold $V$ is special if there is no integer $1\le p\le\dim V$ and no holomorphic line bundle $L$ admitting a nonzero sheaf map [EQ]

@src https://github.com/openai/math/tree/main/preprints/A-high-arity-counterexample-to-Pixton-completeness-in-Chow-September-24-2026
@title A high-arity counterexample to Pixton completeness in Chow
@section The strata algebra and the explicit class — definition

We also need a class supported on rational bridges, not tails.
On three labeled slots $J=(a,b,c)$, take every one-edge
unmarked stable graph of genus $g$, subdivide its edge by
a genus-zero vertex, and put all three labels at that new vertex.
Sum the resulting undecorated graphs, dividing each by its automorphism
order. Pull this sum back by forgetting all labels outside $J$;
call the resulting class $\beta_J^{\mathrm{st}}$.

@src https://github.com/openai/math/tree/main/preprints/Abelian-covers-Gale-correspondences-and-the-Hodge-conjecture-for-powers-October-6-2026
@title Abelian covers, Gale correspondences, and the Hodge conjecture for powers
@section Coordinate-root covers — definition

We use the convention that $\Q(1)$
has weight $-2$.
Let $m,n\geq2$ and $0\leq d\leq m-2$. A subspace
$P\subset\C^m$ of dimension $d+1$ is coordinate-general
if every $d+1$ coordinate functionals restrict to a basis of
$P^*$. Let $\U_{d,m}\subset\Gr(d+1,m)$ be this open locus.
For $P\in\U_{d,m}$, define
[EQ]
where the denominator is diagonal. The phase action preserves $X_P$,
and $q_P:X_P\to\PP(P)$, $[x_i]\mapsto[x_i^n]$, is its
coordinate-power map.

@src https://github.com/openai/math/tree/main/preprints/Abundance-after-nonvanishing-for-compact-Kahler-fourfolds-September-27-2026
@title Abundance after nonvanishing for compact Kahler fourfolds
@section Actual adjoints and analytic conventions

**Actual adjoints and analytic conventions**
We collect the conventions that keep the argument on the given
holomorphic line bundles. All complex spaces are Hausdorff and countable
at infinity. A normal connected complex space is irreducible: its locally
irreducible components are open as well as closed. All divisors called
effective are Weil divisors with nonnegative coefficients.
**Adjoints, residues, and singularities**
For a normal complex space $X$, let $j:X_{\mathrm{reg}}\hookrightarrow X$
be the regular locus and set $\omega_X=j_*\omega_{X_{\mathrm{reg}}}$.
For an integral Weil divisor $H$, $\OO_X(H)$ is the rank-one reflexive
divisorial sheaf.

@src https://github.com/openai/math/tree/main/preprints/Abundance-in-numerical-dimension-one-for-terminal-threefolds-in-positive-characteristic-September-24-2026
@title Abundance in numerical dimension one for terminal threefolds in positive characteristic
@section Birational preparation

**Birational preparation** The purpose of this section is to replace the hypothetical case of maximal nef dimension by a smooth threefold carrying a single connected nef cycle. The torsion assertion below concerns the entire Cartier cycle, with its nilpotents. [The prepared cycle] Suppose that $k$ is uncountable and algebraically closed of characteristic $p>3$, and that $X$ is a projective terminal threefold with $K_X$ nef, $\nu(K_X)=1$, and $n(X,K_X)=3$. There exist a smooth projective threefold $V$, a generically finite separable morphism $\rho:V\to X$, a very ample divisor $H$ on $V$, and a nonzero effective Cartier divisor [EQ] with the following properties.

[...]

The divisor $D$ is nef, and $D|_{D_\alpha}$ is numerically trivial for every $\alpha$. There is no $D$-trivial curve through a very general point of $V$. Moreover $D\cdot H^2>0$ and $D^2\cdot H=0$.

@src https://github.com/openai/math/tree/main/preprints/Ambiently-homeomorphic-isolated-hypersurfaces-of-multiplicities-two-and-three-September-24-2026
@title Ambiently homeomorphic isolated hypersurfaces of multiplicities two and three
@section Classical inputs and conventions

**Classical inputs and conventions** This section records the classical results used below, together with their hypotheses and the conventions needed to apply them. **Milnor lattices, spectra, and integral monodromy** [Milnor] Let $s\geq2$, and let $f:(\mathbb{C}^s,0)\to(\mathbb{C},0)$ be a holomorphic germ with an isolated critical point at $0$, with $f(0)=0$.

[...]

Both $F_f$ and its interior are homotopy equivalent to a finite bouquet of $(s-1)$-spheres. The link is $(s-3)$-connected. See [CITE].

@src https://github.com/openai/math/tree/main/preprints/An-isomorphism-of-the-free-group-factors-September-23-2026
@title An isomorphism of the free group factors
@section Tracial preliminaries and a free-sum estimate

**Tracial preliminaries and a free-sum estimate**
Throughout, $(M,\tau)$ is a von Neumann algebra with faithful normal tracial state. We write
[EQ]
The Hilbert space completion of $M$ in $\normtwo{\cdot}$ is $L^2(M,\tau)$, with inner product $\langle x,y\rangle=\tau(y^*x)$, linear in the first variable. Left multiplication gives its faithful normal representation of $M$. A $*$-isomorphism is a bijective complex-linear map preserving multiplication and adjoints. A linear map between von Neumann algebras is normal if it is ultraweakly continuous. We use standard finite von Neumann algebra facts, including bounded Borel functional calculus, Kaplansky density, and the trace-preserving conditional expectation onto a von Neumann subalgebra. The expectation extends to the orthogonal projection of $L^2(M,\tau)$ onto the subalgebra's $L^2$ space.

@src https://github.com/openai/math/tree/main/preprints/Arithmetic-Stein-degree-bounds-for-log-Calabi-Yau-pairs-September-25-2026
@title Arithmetic Stein-degree bounds for log Calabi--Yau pairs
@section Conventions and foundational inputs

**Conventions and foundational inputs**
All fields have characteristic zero. A variety is integral and of finite
type over its ground field. A contraction is a projective surjective
morphism $f:V\to Z$ between normal varieties with $f_*\OO_V=\OO_Z$.
Divisors over a variety are identified with divisorial valuations,
normalized to have value group $\Z$. We use log discrepancies:
[EQ]
The pair is log canonical (lc) if these numbers are nonnegative and
Kawamata log terminal (klt) if they are positive. A divisorial valuation
of log discrepancy zero is an lc place. A variety is
$\epsilon$-lc if the pair with zero boundary has all log discrepancies
at least $\epsilon$.

@src https://github.com/openai/math/tree/main/preprints/Bounded-klt-complements-for-Fano-contractions-September-25-2026
@title Bounded klt complements for Fano contractions
@section Valuative pushforward of discrepancy functions — definition

Bars denote Cartier closure and may be suppressed when there is no ambiguity. For a projective contraction $\pi:Y\to V$, put [EQ]

[...]

A prime valuation upstairs is horizontal when its restriction to $\C(V)$ is trivial.

[...]

All b-divisors are evaluated on models on which the displayed Cartier data descend. A discrepancy presentation on a normal projective model $Y$ is [EQ] Here $a_{K,Y}$ is the form discrepancy, $\mathbf{M}$ is b-nef and b-$\Q$-Cartier, and $D$ is a rational Cartier divisor on $Y$. The

[...]

presentation is Calabi--Yau if $D=0$. Sub-generalized lc and sub-generalized klt mean, respectively, $a(P)\ge0$ and $a(P)>0$ for every relevant prime divisor on every higher model. Effectivity means effectivity of the boundary trace on the specified model, not on every higher model.

@src https://github.com/openai/math/tree/main/preprints/Canonical-ampleness-of-compact-hyperbolic-Kahler-manifolds-September-23-2026
@title Canonical ampleness of compact hyperbolic Kahler manifolds
@section Conventions and disc functionals

**Conventions and disc functionals** Throughout, $X$ is a compact connected K\"ahler manifold of complex dimension $n\ge1$, with no nonconstant entire curves, and $k$ is a fixed K\"ahler metric. This section fixes the signs and normalizations used in the disc estimates. We write $dd^c=i\partial\bar\partial$ and identify a Hermitian tensor with its real $(1,1)$-form so that the tensor associated with a real-valued potential $\phi$ has quadratic form [EQ] and associated form $\ddc\phi$.

[...]

For a K\"ahler form $h$, set [EQ] This globally defined form represents $2\pi c_1(T^{1,0}X)$; hence $[-R_h]=2\pi c_1(K_X)$.

@src https://github.com/openai/math/tree/main/preprints/Conditional-good-minimal-models-for-compact-Kahler-fourfolds-October-5-2026
@title Conditional good minimal models for compact Kahler fourfolds
@section Conventions and the three hypotheses

**Conventions and the three hypotheses** All spaces are over $\C$, unless a statement in the projective appendices explicitly specifies another field of characteristic zero. A compact K\"ahler space means a complex analytic space with a K\"ahler form given by local smooth strictly plurisubharmonic potentials on local embeddings. Our spaces are normal and connected, hence irreducible.

[...]

An elementary step for an adjoint $J=K_T+B$ is either a nontrivial projective bimeromorphic divisorial contraction, with the pair pushed forward, or a diagram [EQ] whose morphisms are projective, bimeromorphic, and small, with strict transform boundary on $T^+$. The base is normal compact K\"ahler, and the source and next space are normal globally strongly $\Q$-factorial compact K\"ahler spaces.

@src https://github.com/openai/math/tree/main/preprints/Deforming-hypersymplectic-four-manifolds-to-hyperkahler-triples-October-7-2026
@title Deforming hypersymplectic four-manifolds to hyperkahler triples
@section Definite pairs and the coefficient sphere — definition

A pair $(A,C)$ of real two-forms is definite if its wedge-product
matrix is positive definite at every point. A two-form $B$ tames
an almost-complex structure $J$ if $B(v,Jv)>0$ for every nonzero tangent
vector $v$. It is compatible if, in addition,
$B(Ju,Jv)=B(u,v)$. When these forms are called symplectic, closedness is
included.

@src https://github.com/openai/math/tree/main/preprints/Every-complex-K3-surface-is-Oka-September-23-2026
@title Every complex K3 surface is Oka
@section Local approximation from complete directions — definition

All
approximation assertions use an arbitrary fixed Hermitian distance
on the target.
A complex surface $X$ has property $L$ at $x$ if there is an open
neighborhood $V$ of $x$ with the following property. For every special
pair $D\subset D'$, every pair of closed polydiscs
$P_0\Subset\operatorname{int}P\subset\C^q$, and every holomorphic map
$f$ from a neighborhood of $D\times P$ into $V$, the restriction
$f|_{D\times P_0}$ is a uniform limit of maps holomorphic near
$D'\times P_0$ with values in $X$.
The case $q=0$ is included. We call $V$ a witness neighborhood.

@src https://github.com/openai/math/tree/main/preprints/Finite-ordinary-minimal-model-programs-on-compact-Kahler-fourfolds-October-5-2026
@title Finite ordinary minimal model programs on compact Kähler fourfolds
@section Relative programs for rational nef line data — definition

Rational generalized b-line data on a normal compact space $T$ consist of an effective rational divisor $B$, a projective modification $p\colon W\to T$, and a rational line bundle $M_W$ on $W$. The bundle is pulled back on every higher model; this b-object is denoted by $\bM$. We require $M_W$ to be nef, or to be nef over a specified base in a relative argument.

[...]

The adjoint [EQ] is required to be rationally invertible.

[...]

Log discrepancy is $a(E;T,B+\bM)=1-\operatorname{coeff}_E B_W$, evaluated on a model carrying $E$. Generalized klt and generalized lc, abbreviated gklt and glc, mean that all these discrepancies are positive and nonnegative, respectively.

@src https://github.com/openai/math/tree/main/preprints/Irrational-cubic-fourfolds-with-geometric-K3-categories-September-24-2026
@title Irrational cubic fourfolds with geometric K3 categories
@section Birational fields and a divisorial cocycle — definition

For a finitely generated field $F/\C$, choose a smooth projective model $V$ and set [EQ] For an integral variety $V$, put $u(V)=u(\C(V))$.

[...]

For every invariant [EQ] let $A_B\in\operatorname{End}_{\Q}(T_{M,\Q})$ be determined by $B(u,v)=q_M(A_Bu,v)$. Let $G_M$ be the unital rational algebra generated by all such operators. On the zero space we take the zero algebra.

[...]

For a generic Mori surface with its specified structure, set [EQ] The del Pezzo value depends on the surface; the conic value includes its chosen genus-zero curve structure.

@src https://github.com/openai/math/tree/main/preprints/Log-abundance-for-compact-Kahler-spaces-under-logarithmic-Iitaka-subadditivity-October-4-2026
@title Log abundance for compact Kähler spaces under logarithmic Iitaka subadditivity
@section Programs with a fixed nef part and special termination — definition

An effective rational dlt pair $(T,B)$ on a normal compact Kähler space satisfies the lc-strata resolution convention if it admits a projective log resolution $r:W\to T$ with smooth compact Kähler source such that the strict boundary and the exceptional support together have distinct smooth components forming a simple normal crossing divisor. Writing [EQ] with compatible canonical choices, every $r$-exceptional coefficient of $B_W^{\mathrm{cr}}$ is strictly less than one, and $r$ is an isomorphism at the general point of every log canonical center of $(T,B)$.

[...]

For $n\geq0$, let $\Ggood_n$ be the following assertion. If $X$ is a connected smooth compact Kähler manifold of dimension $n$, $B$ is a rational simple normal crossing boundary with coefficients in $[0,1]$, and $J=K_X+B$ is pseudo-effective, then there is a smooth compact Kähler modification $\mu:Y\to X$ and an actual rational line identity [EQ] where $R$ is a rational divisor.

@src https://github.com/openai/math/tree/main/preprints/Logarithmic-Kodaira-dimension-and-whole-fiber-variation-September-26-2026
@title Logarithmic Kodaira dimension and whole-fiber variation
@section Markings and a constant finite normalization — definition

In the notation [REF], let $E/b(I)$ be a finite extension.
A moving test is a prime divisor $P$ of $V'_E$ whose image in
$V'$ is dense. Its valuation is trivial both on $k=b(V')$ and on $E$.

@src https://github.com/openai/math/tree/main/preprints/Milnes-rationality-conjecture-for-abelian-varieties-October-7-2026
@title Milne's rationality conjecture for abelian varieties
@section Comparisons and rational Lefschetz classes — definition

A tuple $\alpha=(\alpha_v)_v$, with $\alpha_v\in H_v^{2r}(X)(r)$, has the Lefschetz pairing property if, for every $\delta\in\Lef^{\dim X-r}(X)$, the numbers $\Tr_v(\alpha_v\delta_v)$ are the images of one number in $\Q$.

[...]

The polarization is an alternating form $\psi:V\times V\longrightarrow\Q(1)$ satisfying [EQ] The rational space of Weil classes associated with $E$ is the subspace [EQ] whose scalar extension to a splitting field $\Omega$ of $E$ is [EQ] Here each summand is extended by zero on the other eigenspaces. The right side is Galois stable, so it defines the indicated rational subspace.

@src https://github.com/openai/math/tree/main/preprints/Minimal-models-and-Mori-fibre-spaces-for-generalized-log-canonical-Q-pairs-September-24-2026
@title Minimal models and Mori fibre spaces for generalized log canonical $\Q$-pairs
@section Conventions and preliminary notation

**Conventions and preliminary notation** **Pairs, nef data and discrepancies** All varieties are integral. A contraction is a projective surjective morphism $f$ to a normal variety with $f_*\cO=\cO$. Unless a different field is specified, the local and field-theoretic arguments take place over $\C$. Section [REF] explains the passage to any algebraically closed field of characteristic zero.

[...]

For a generalized pair $(X,B+M)$, choose a projective birational model $\pi\colon X'\to X$ carrying the nef rational Cartier divisor $M'$. On a smooth model $p\colon W\to X$ dominating $X'$, write $M_W$ for its pullback and define $B_W$ by [EQ] For a prime divisor $E$ on $W$, set [EQ] This is independent of the choice of higher model. The nef data are held fixed throughout all birational operations on a generalized pair.

@src https://github.com/openai/math/tree/main/preprints/Numerical-Semiampleness-of-Nef-Adjoint-Divisors-October-3-2026
@title Numerical Semiampleness of Nef Adjoint Divisors
@section Conventions and birational inputs

**Conventions and birational inputs** Varieties are integral and projective over an algebraically closed field of characteristic zero unless stated otherwise. A $\Q$-pair $(X,B)$ consists of a normal variety, an effective rational boundary $B$, and a rational Cartier divisor $K_X+B$. We use log discrepancies: on a resolution $h:Y\to X$, the equality $K_Y+B_Y=h^*(K_X+B)$ assigns log discrepancy $1-b_E$ to a prime divisor with coefficient $b_E$ in $B_Y$. The pair is klt if all log discrepancies are positive, and log canonical if they are nonnegative.

[...]

The symbols $\sim_\Q$ and $\equiv$ denote rational linear and numerical equivalence. A divisor is pseudo-effective if its numerical class is in the closure of the cone generated by effective divisors, and big if its class lies in the interior of that cone. Its Iitaka dimension is denoted by $\kappa$.

@src https://github.com/openai/math/tree/main/preprints/Projective-Space-Bases-of-Lagrangian-Fibrations-September-23-2026
@title Projective-space bases of Lagrangian fibrations
@section Notation and global inputs

**Notation and global inputs** All spaces are over $\C$ unless a reduction to positive characteristic is specified. An irreducible holomorphic symplectic manifold is abbreviated IHS. Write $q=q_X$ for the Beauville--Bogomolov--Fujiki quadratic form, and $(\,\cdot\,,\,\cdot\,)$ for its associated bilinear form. We also write $q(x,y)=(x,y)$, so that $q(x)=q(x,x)$. We use the integral normalization; its real signature is $(3,b_2(X)-3)$.

[...]

For a coherent sheaf $M$ on a normal space, $M^{**}$ is its reflexive hull. In particular, $\Omega_B^{[j]}=(\bigwedge^j\Omega_B^1)^{**}$.

[...]

[Background for the given fibration]

@src https://github.com/openai/math/tree/main/preprints/Semialgebraic-universal-covers-of-normal-projective-varieties-September-24-2026
@title Semialgebraic universal covers of normal projective varieties
@section Preparation, kernels, and projective holes

**Preparation, kernels, and projective holes** This section supplies the two kinds of control needed for projective windows. Preparation makes the boundary limits finite and preserves their real parameters. The second half of the section proves that projective fibres which are present up to algebraic holes retain this property throughout a connected parameter domain. All manifolds in this section are complex manifolds unless real coordinates are specified. A locally pseudoconvex open subset of a manifold means an open subset which is locally Stein at every boundary point. The open sets are allowed to be disconnected before a distinguished component is selected. Subanalytic data on a relatively compact coordinate box are always assumed to extend as globally subanalytic data to a slightly larger box. Rational powers of a positive scale variable are allowed.

[...]

In this paper, bounded algebraic data means that one such finite atlas and uniform finite bounds for the number and degrees of the polynomial fibre equations and tests have been fixed.

@src https://github.com/openai/math/tree/main/preprints/Sharp-nodal-length-on-smooth-surfaces-September-23-2026
@title Sharp nodal length on smooth surfaces
@section Persistence and packing — definition

Proposition [REF]
and the fixed coordinate volume comparisons give a constant
$C_{\mathrm{init}}$ such that $N(Q_0)\le C_{\mathrm{init}}$.
**Entries and persistent nearby regions**
Choose a threshold $H>\max\{L,C_{\mathrm{init}}\}$. Along each descending
grid path, an excursion starts the first time $N(Q)>H$ and ends the first
subsequent time $N(Q)\le L$. After an excursion has ended, apply the same
rule again. A square at which an excursion starts is called an
entry. An excursion is active at a square if it has started
and has not yet ended there.

@src https://github.com/openai/math/tree/main/preprints/Smooth-counterexamples-to-Yaus-nodal-upper-bound-in-dimensions-three-and-four-September-23-2026
@title Smooth counterexamples to Yau's nodal upper bound in dimensions three and four
@section Background modes and strict envelopes

**Background modes and strict envelopes**
Let
[EQ]
where the sphere has radius one and both circles have length $2\pi$.
Fix a coordinate cube $P$ whose closure lies in $0<p<\pi/2$, and a
smaller coordinate cube $D\Subset P$. Throughout the proof, integration
against $dx$ in this chart means coordinate Lebesgue measure.
[Background modes]
For every integer $k\ge1$, set
[EQ]
Then $u_k^0$ is a smooth real eigenfunction on $M$ with
$(\Delta_{g_0}+\Lambda_k)u_k^0=0$.

@src https://github.com/openai/math/tree/main/preprints/Termination-for-projective-log-canonical-fourfolds-with-rational-boundary-September-24-2026
@title Termination for projective log canonical fourfolds with rational boundary
@section The difficulty and its local deficit — definition

For a terminal pair $(Y,\Theta)$ on the prepared chain, define
[EQ]
The correction in parentheses is performed at each individual surface
before summing over surfaces.

@src https://github.com/openai/math/tree/main/preprints/Termination-of-generalized-canonical-flips-on-compact-Kahler-fourfolds-October-5-2026
@title Termination of generalized-canonical flips on compact Kahler fourfolds
@section Analytic foundations and common models

**Analytic foundations and common models**

[...]

All discrepancy comparisons use the fixed b-divisor $\bM$ from Theorem [REF]. **Places and projective resolutions** A place is a global prime divisor on a normal proper bimeromorphic model, identified with its strict transforms on common higher models. Its centre is its reduced irreducible image. A place is exceptional over a model when its centre has codimension at least two. This description does not identify places solely through fields of global meromorphic functions. Properness makes the centres compact analytic subspaces.

[...]

Every divisor in a pullback comparison is an actual divisor, with the compatible canonical representatives prescribed in Theorem [REF]. Ordinary relative canonical coefficients can be computed from local pluricanonical equations after clearing a Cartier multiple;

@src https://github.com/openai/math/tree/main/preprints/Termination-of-generalized-log-canonical-flips-on-compact-Kahler-fourfolds-October-5-2026
@title Termination of generalized log canonical flips on compact Kahler fourfolds
@section Generalized pairs and auxiliary programs — definition

The auxiliary definitions and statements in this section use reduced,
irreducible, second-countable complex analytic spaces as their ambient
spaces.
A normal compact complex space $T$ is globally strongly
$\Q$-factorial if, for every coherent rank-one reflexive sheaf
$\mathcal{F}$ on all of $T$, some positive reflexive power
[EQ]
is an invertible sheaf.

@src https://github.com/openai/math/tree/main/preprints/The-Abelian-Zilber-Pink-Conjecture-September-24-2026
@title The abelian Zilber--Pink conjecture
@section Height scales and an auxiliary sequence theorem — definition

Let $I$ be the ordered list $1,\ldots,s$, possibly preceded by $0$.
The list is nonempty; if $0$ occurs, $s$ may be zero. For each
$\ell\in I$, fix an abelian variety $A_\ell$ over $\Qbar$, a nonzero
abelian subvariety $W_\ell\subseteq A_\ell$, an irreducible subvariety
$Y_\ell\subseteq A_\ell$, and an integer $m_\ell\ge0$. Put
[EQ]
For positive integers $i$, let $y_{i\ell}\in Y_\ell(\Qbar)$ and
$H_{i\ell}\ge1$ satisfy
[EQ]
For consecutive indices $\ell,\ell'$ in $I$, require
$H_{i\ell}/H_{i\ell'}\to0$.
The factors $\ell\ge1$ are called high factors. They satisfy
$H_{i\ell}\to\infty$, and, for every fixed homomorphism
$g:A_\ell\to G$ to an abelian variety whose restriction to $W_\ell$
is nonzero,
[EQ]

@src https://github.com/openai/math/tree/main/preprints/The-abelianity-conjecture-for-special-compact-Kahler-manifolds-September-23-2026
@title The abelianity conjecture for special compact Kahler manifolds
@section Geometric and group-theoretic preliminaries

**Geometric and group-theoretic preliminaries**

[...]

All manifolds are connected unless stated otherwise. A fibration is a dominant meromorphic map with connected general fibre. We resolve its graph when making differential or fundamental-group arguments. A smooth compact space in Fujiki's class $\mathcal{C}$ is replaced, when needed, by a compact K\"ahler modification. Smooth compact bimeromorphic models have the same fundamental group. Fibre groups always mean groups of smooth models of general fibres; their images are understood up to base-point transport. The image of a general fibre group is normal in the total fundamental group: over a smooth fibration locus this follows from the homotopy exact sequence, and the fundamental group of the open total space surjects onto that of the total space. **Specialness and quotient reductions** We recall the precise established inputs used in the proof.

@src https://github.com/openai/math/tree/main/preprints/The-normalized-volume-gap-in-dimension-four-September-24-2026
@title The normalized-volume gap in dimension four
@section Volume conventions and the cone reduction

**Volume conventions and the cone reduction** All varieties are over $\C$. We use log discrepancies: for a prime divisor $F$ on a smooth proper birational model $\mu:Y\to X$, [EQ] For

[...]

a pair $(X,\Delta)$ with $K_X+\Delta$ $\Q$-Cartier, the divisor formula is [EQ] When $K_X$ is itself $\Q$-Cartier, this is $A_X(F)-\ord_F(\Delta)$. The pair is klt, respectively lc, when all prime divisors over it have positive, respectively nonnegative, log discrepancies. For an lc pair, an lc center is the center on $X$ of a prime divisor with log discrepancy zero; a minimal lc center is minimal under inclusion. A normal $\Q$-Gorenstein variety is terminal when every exceptional prime divisor has log discrepancy greater than one. Replacing a valuation by a positive multiple leaves its normalized volume unchanged.

@src https://github.com/openai/math/tree/main/preprints/Two-step-monodromy-of-special-quasi-projective-varieties-September-24-2026
@title Two-step monodromy of special quasi-projective varieties
@section The surface and its orbifold multiplicities — definition

For a neat fibration,
[EQ]
by [CITE], attributed there to
[CITE].
A smooth projective orbifold pair $(Y,D)$ is special if for every
elementary birational orbifold morphism
$u:(Y',D')\to(Y,D)$ with $(Y',D')$ smooth projective and every neat fibration
$g:(Y',D')\to Z$ with $\dim Z>0$,
[EQ]
A smooth open variety $X=Y\setminus D$ with reduced boundary is
logarithmically special when its smooth projective compactification pair
is special in this sense.

@src https://github.com/openai/math/tree/main/preprints/Uniform-effective-log-Iitaka-fibrations-for-fourfolds-September-26-2026
@title Uniform effective log Iitaka fibrations for fourfolds
@section Generic chains and orders of sections — definition

Let $V$ be an integral projective variety of positive dimension, and let $P$ be a big, nef, semiample rational Cartier divisor on $V$. For a smooth projective birational resolution $\pi:\widetilde V\to V$, set [EQ] where $x$ is very general in the smooth isomorphism locus, identified with its lift to $\widetilde V$.

[...]

For a subvariety $A$, the notation $\gamma(P;A)$ means the same invariant for the restriction of $P$, pulled back to a resolution of $A$.

@src https://github.com/openai/math/tree/main/preprints/Uniform-Pluricanonical-Iitaka-Fibrations-October-3-2026
@title Uniform Pluricanonical Iitaka Fibrations
@section Conventions and the induction hypotheses

**Conventions and the induction hypotheses** Until the final field-descent argument we work over $\C$. Varieties are integral and projective unless another setting is stated. We use the standard discrepancy conventions for klt, dlt, and lc pairs [CITE]. All boundaries in the proof are rational. A rational Cartier divisor means a $\Q$-Cartier $\Q$-divisor. Canonical divisors are chosen compatibly when forms are pulled back or residues are taken. On a normal variety, sections of an integral Weil divisor always mean sections of its rank-one reflexive divisorial sheaf. For rational divisors $D,E$ we write $D\preceq E$ if $E-D$ is rationally linearly equivalent to an effective divisor. An index bound is a common trivializing multiple: a single integer kills all the actual divisor classes under consideration and clears their coefficients. A

[...]

contraction is a projective surjective morphism $f:X\to Z$ of normal varieties such that $f_*\OO_X=\OO_Z$.

@src https://github.com/openai/math/tree/main/preprints/Universal-cover-splitting-for-compact-Kahler-manifolds-September-23-2026
@title Universal-cover splitting for compact Kahler manifolds
@section Rational boxes and ambient crossing germs — definition

Let $A,B$ be locally path connected spaces. A continuous map $R:A\times B\to M$ is a box if, near every parameter pair, there are a product neighborhood $A'\times B'$ and a product chart on its image in which [EQ] Thus first-parameter slices locally follow $\mathcal{F}_1$ plaques and second-parameter slices locally follow $\mathcal{F}_2$ plaques.

[...]

Let $U\subset\C^a\times\C^b$ be open, with parameter blocks $(s,t)$. A holomorphic map $f:U\to X$ is a holomorphic box if [EQ] The conditions are imposed at every point of $U$. They do not require $f$ to be an immersion.

@src https://github.com/openai/math/tree/main/preprints/Virasoro-Constraints-for-Projective-Complete-Intersections-September-24-2026
@title Virasoro Constraints for Projective Complete Intersections
@section Transport by capped chains — notation

**Geometry and coherent data**
All targets in a chain have complex dimension $n$. Let $D$ be a smooth
projective variety, possibly disconnected, and let $N$ be a line bundle
on $D$. We use the convention that $\PP(E)$ parametrizes lines in $E$.
Set
[EQ]
The normals of $D_l,D_r$ in $C$ are $N^{-1},N$, respectively. Thus a
chain, written in its geometric order, is
[EQ]
Every displayed junction identifies a right section with a left section,
or identifies the corresponding divisor on an end.

@src https://github.com/openai/math/tree/main/preprints/Virasoro-Constraints-under-Projectivization-October-5-2026
@title Virasoro Constraints under Projectivization
@section Descendant potentials and quantization — definition

**Projective constraints and changes of frame** An even infinitesimal symplectic operator $A$ is satisfied projectively by a potential $Z$ if [EQ] is independent of the descendant or ancestor variables. In this expression $\op_\eta(A)$ acts on $Z$. Such a scalar may depend on the Novikov variables, equivariant parameters, and $\hbar$.

[...]

The fundamental solution $S(u,z)=\id+O(z^{-1})$ is defined by [EQ] The pairing term supplies the unstable two-point contribution.

## combinatorics

@src https://github.com/openai/math/tree/main/preprints/Almost-Linear-Time-Maximum-Cardinality-Matching-in-Sparse-General-Graphs-September-24-2026
@title Almost-Linear-Time Maximum-Cardinality Matching in General Graphs
@section Conventions and static primitives

**Conventions and static primitives**
**Representations and fixed-parameter bounds**
Auxiliary graphs may have parallel edges or arcs, always distinguished by
identifiers. Fix a reference orientation on every variable edge. Traversing
an edge backward negates its coefficient. A signed circulation has zero
divergence at every vertex; its length norm for positive lengths $\ell$ is
[EQ]
This norm differs from the raw length of a supplied traversal list:
the latter counts every traversal with its multiplicity, before cancellation.
Later a forest edge may map either to an actual graph edge, with its endpoint
correspondence specified, or to a null edge whose two endpoints have the
same image. A null traversal has zero actual projected length, although a
reduction may assign it an additional positive bookkeeping length.
All representation sizes include vertices or slots, individual edges,
terminal incidences, and explicitly stored lists. Ordinary adjacency lists,
heaps, balanced dictionaries, and path-copy persistent maps incur logarithmic
overhead per record operation. No argument permits a free scan of all
[...]

@src https://github.com/openai/math/tree/main/preprints/Deterministic-nonbipartite-Ramanujan-graphs-in-every-fixed-degree-September-23-2026
@title Deterministic nonbipartite Ramanujan graphs in every fixed degree
@section Conventions and parameters

**Conventions and parameters**
Throughout the proof $d\ge3$ is fixed, $q=d-1$, $s=2\sqrt q$, and $n$ is
even. Constants may depend on $d$ and on the fixed parameters and moment
orders chosen below, but never on $n$. The assertion that a bound has an
arbitrarily small power loss means that, for each prescribed fixed
$\eta>0$, the bound holds with factor $n^\eta$ once its preceding loss
parameters have been chosen sufficiently small and $n$ is sufficiently
large. A bound denoted $n^{o(1)}$ has this usual meaning for every fixed
positive exponent. The two uses will be kept distinct when selecting
parameters.
All vertex-space precision matrices and their inverses act on
$\mathbf1^\perp$. For coordinate entries and traces we extend such an
operator by zero on the constant vector. Stub-space operators on a
contrast subspace are extended by zero in the same way. The distinction
between the identity on a contrast subspace and its zero extension is
understood in all compressed identities.
[...]

@src https://github.com/openai/math/tree/main/preprints/Monochromatic-finite-sums-and-products-in-the-positive-integers-September-23-2026
@title Monochromatic finite sums and products in the positive integers
@section Two principles and the combinatorial deduction — definition

Products and Lipschitz combinations of any
fixed finite number of such families remain bounded-complexity
nilsequences of the same maximal step, by taking product nilmanifolds.
Fix finite sets $\mathcal{A}\subset\Q_{>0}$ and $[r]$, and an admissible
family. A system of step-at-most-$s$ models consists of functions
$S_{B,a,c}:\Z\to[0,1]$, one for each block $B$, $a\in\mathcal{A}$,
and $c\in[r]$. If $i=\max B$, then on each interval
$[kH_i,(k+1)H_i)$ and each residue class modulo $M$, the function is a
nilsequence in the progression index. The complexity is bounded
uniformly over $w$, all pieces, and all model indices. The representing
observables may be, and are, chosen $[0,1]$-valued on their entire
nilmanifolds.
These are the limit and
extraction properties used below.
For a fixed $n$, an admissible family consists of positive integers
$M,h_1,\ldots,h_n,H_1,\ldots,H_n$, positive powers of two
$X_1,\ldots,X_n$, and independent random variables $t_1,\ldots,t_n$,
all depending on $w$, with the following properties.
$M$ and each $h_i$ are $w$-smooth multiples of $W^w$.
[...]

@src https://github.com/openai/math/tree/main/preprints/Snaky-in-21-Maker-moves-September-25-2026
@title Snaky in 21 Maker moves
@section Conditional winning positions — definition

Let $A\subseteq T\subset\Z^2$ be finite and let $h\ge1$ be an integer.
The triple $(A,T,h)$ is a valid claim if, at every position with
Maker to move and with
[EQ]

@src https://github.com/openai/math/tree/main/preprints/The-Euclidean-plane-is-not-five-colorable-September-23-2026
@title The Euclidean plane is not five-colorable
@section Spectral preliminaries and continuous characters

This section and Section [REF] establish the probability-law
rigidity used in the coloring transfer of Section [REF].
The laws live on the character group of the discrete algebraic plane.
We state the rigidity theorem after defining that group, then prove
that exclusion of ordinary continuous characters persists in the
conditional difference laws arising along compact towers. This
relative singularity is the input to the Fourier argument in
Section [REF].
**Algebraic rotations and continuous characters**
Identify the plane with $\C$, and set
[EQ]
We regard $E$ as an additive discrete group and $K$ as a multiplicative
discrete group. Let
[EQ]
be the compact character group of $E$. A point $d\in D$ is a homomorphism
from the additive group $E$ to the unit complex group $\T$. We use additive
notation on $D$, so $(d+d')(z)=d(z)d'(z)$. For $a,z\in E$, put
[...]

@src https://github.com/openai/math/tree/main/preprints/The-strong-thin-tree-conjecture-September-23-2026
@title The strong thin tree conjecture
@section Locally connected hierarchies — definition

The matrix need only obey an upper bound on cuts; an upper bound
in the positive semidefinite order would be a stronger condition.
Let $H=(V,E)$ be a finite loopless multigraph. A hierarchy on $V$
is a finite rooted tree of distinct nonempty vertex sets. Its root is $V$,
its leaves are the singleton sets, and the children of every nonleaf form
a partition of that node into at least two sets. For a nonroot node $A$,
[...]

@src https://github.com/openai/math/tree/main/preprints/Variable-dimension-Weisfeiler-Leman-equivalence-on-general-and-subcubic-graphs-September-25-2026
@title Variable-dimension Weisfeiler--Leman equivalence on general and subcubic graphs
@section Joint refinement and its bijective game — definition

We prove the precise
histogram and empty-position statement, including the order in which
a bijection is announced.
Let $X$ be a finite simple graph and let $k\geq 2$. For
$\mathbf{v}=(v_1,\ldots,v_k)\in V(X)^k$, write
$\mathbf{v}[i\leftarrow z]$ for the tuple obtained by replacing its $i$th
coordinate by $z$. The initial color $\chi_0^X(\mathbf{v})$ records, for every
ordered pair of coordinates, whether their entries are equal and whether
they are adjacent. Recursively, set
[EQ]

## convex and metric geometry

@src https://github.com/openai/math/tree/main/preprints/A-single-lattice-covering-bound-of-order-n-log-n-September-23-2026
@title A single-lattice covering bound of order $n\log n$
@section Geometric and horizontal preparations

**Geometric and horizontal preparations**
We use two established results: the pointwise Gaussian marginal theorem
of Eldan and Klartag, and the Rogers--Schmidt mean-hole estimate. From
the first we derive a finite list of bodies contained in nearby horizontal
sections; from the second we obtain one horizontal lattice that works for
the whole list. Neither result requires symmetry. This section develops the finite-section
and common-lattice preparation of Li and Liu [CITE], with the precise bounds used in our construction.
**A finite list of horizontal sections**
Theorem 1 of Eldan and Klartag [CITE] has the following consequence.
There are absolute constants $\alpha,\beta,\gamma,C_0>0$ such that, for
all sufficiently large $n$, every isotropic random vector $X\in\R^n$
with a log-concave density has the following property: for each integer
$1\le D\le n^\alpha$, there is a $D$-dimensional subspace $E$ whose
orthogonal marginal has density $f_E$ satisfying
[EQ]
Here isotropic means $\E X=0$ and $\E XX^{\mathsf T}=I_n$; orthonormal
coordinates identify $E$ with $\R^D$.

@src https://github.com/openai/math/tree/main/preprints/Planar-Graph-Metrics-Embed-into-L1-with-Constant-Distortion-September-23-2026
@title Planar Graph Metrics Embed into $L_1$ with Constant Distortion
@section Columns and thin bands — definition

All these estimates use the width of the band and the circular order of the columns, with constants independent of their number. A column model consists of a finite cyclically ordered set $V_0$ of indices, a copy $\{i\}\times\R$ of the height line for each $i\in V_0$, and a finite collection of links. A link $ij$ has a prescribed closed bounded set $S_{ij}\subset\R$ of switch heights. At $H\in S_{ij}$ we identify $(i,H)$ with $(j,H)$. The resulting quotient is denoted by $X$, and its height function by $h$.

[...]

The links are noncrossing if no two have four distinct endpoints alternating in the cyclic order. We require all column models below to have noncrossing links.

@src https://github.com/openai/math/tree/main/preprints/The-Solomon-Yau-least-volume-theorem-September-23-2026
@title The Solomon--Yau least-volume theorem
@section Cohomological detection and the min--max input — definition

This is exactly Almgren's homology class of the loop
[CITE].
A flat-continuous map
$\Phi:X\to\mathcal{Z}_m^0(S^{m+1};\mathbb{Z}_2)$ from a finite CW
complex is detecting if
[EQ]
Detection is preserved by flat homotopies. We say that $\Phi$ has
no concentration of mass if
[EQ]

## differential geometry

@src https://github.com/openai/math/tree/main/preprints/An-integral-scalar-curvature-bound-for-real-simplicial-volume-October-5-2026
@title An integral scalar curvature bound for real simplicial volume
@section A measured degree estimate — definition

We write $|G|_\infty=\max_i|G_i|$, with the empty maximum interpreted as zero. Let $T>0$. A controlled measured $d$-band over $Q_T^d$ consists of a measured space of oriented $d$-manifolds as above, a leafwise metric $h$, a function $\phi$, and a map $G=(G_1,\ldots,G_d):X\to Q_T^d$.

[...]

After rescaling coordinates we may, and do, call them unit boxes with buffers.

[...]

No bound on the value of $\phi$ is required. The sum of the measures of the transversals of this cover is finite. There is a common bound on the number of plaques of the cover whose buffered boxes meet any one plaque of the cover.

@src https://github.com/openai/math/tree/main/preprints/Bounded-scalar-curvature-and-smooth-extension-of-four-dimensional-Ricci-flow-September-24-2026
@title Bounded scalar curvature and smooth extension of four-dimensional Ricci flow
@section Small-scale geometry and the outermost scale — definition

The bounded-scalar-curvature estimates in [CITE] give background for these estimates; the scale selection, tree organization, and motion assertions needed here are included below. Fix a small cap $l_0>0$. At a material point $x\in M$ set [EQ] The definition uses the whole spatial ball, not just curvature at its center. The function $l$ is positive and continuous before $T$, and $|l(x,t)-l(y,t)|\leq d_t(x,y)$.

[...]

Continuity in time follows by compactness and smooth dependence of the metric, using radii slightly smaller or larger than the supremum.

@src https://github.com/openai/math/tree/main/preprints/Entropy-equality-and-local-symmetry-in-negative-curvature-September-23-2026
@title Entropy equality and local symmetry in negative curvature
@section Dynamical preliminaries

**Dynamical preliminaries** Put $m=n-1$, let $X$ be the geodesic vector field, and let $\alpha$ be the canonical contact form on $SM$, normalized by $\alpha(X)=1$. The strong Anosov splitting is [EQ] The strong foliations are denoted by $\Ws,\Wu$. Their weak versions include the flow direction. We use the following classical facts for compact strictly negatively curved geodesic flows: uniform hyperbolicity, smooth individual strong and weak leaves with uniform local bounds at each finite order, absolute continuity of the foliations, and ergodicity of Liouville volume. The hyperbolic structure comes from Anosov's theory [CITE].

[...]

Passing to an oriented finite cover of $M$ preserves both entropies and allows the conormal volumes below to be defined globally. Indeed the lifted Lyapunov exponents and normalized smooth entropy formula are unchanged; topological entropy can equally be computed by volume growth on the common universal cover [CITE].

@src https://github.com/openai/math/tree/main/preprints/Giglis-distributional-curvature-characterization-of-Alexandrov-spaces-September-24-2026
@title Gigli's distributional curvature characterization of Alexandrov spaces
@section Calculus and background results

**Calculus and background results** We collect the analytic conventions and the precise approximation facts used below. Throughout this section $(M,d,m)$ is an $\RCD(K,N)$ space with $N<\infty$, full support, and the usual locally finite reference measure. All the analytic results recalled here also hold under $\RCD^*(K,N)$. We use them under the unreduced hypothesis of Theorem [REF]. **Test calculus and localization** Besides $\Test$, defined in [REF], it is useful to write [EQ]

[...]

A function is a local test function on an open set if it agrees on every relatively compact smaller open set with a global test function. We write $H_g$ for $\Hess g$, and identify the covector $H_g(V,\cdot)$ with a vector when using the notation $H_gV$. The following facts belong to the standard second-order $\RCD$ calculus [CITE]. Both test classes are algebras. A test function has an $L^2$ Hessian, and for test fields [EQ] The connection is metric-compatible and torsion-free. In particular, inner products of bounded test fields belong to $W^{1,2}$, and their differentials obey the usual product rule.

@src https://github.com/openai/math/tree/main/preprints/Path-selection-and-an-elliptic-inequality-on-degenerating-Ricci-flat-trees-September-24-2026
@title Path selection and an elliptic inequality on degenerating Ricci-flat trees
@section Selection of paths at several exponential ends — definition

Only a finite number of these comparisons is used to construct any particular path. A domain base is a directed family of connected real open domains in auxiliary independent variables, each containing the distinguished sequence for a set of indices in $\mathcal{U}$. A germ on the base is an analytic function on one such domain, with its local complexification; two functions are identified if they agree on a smaller domain. Extra ordinary variables range over complex polydiscs about specified standard values. A regular system $\mathcal{A}$, with scalar field $K$, has the following properties.

[...]

Every nonzero family $F(q,\zeta)$ admits a nonzero scalar $k\in K$ such that $F/k$ has a finite, nonzero holomorphic limit as a germ in $\zeta$, locally uniformly on a polydisc, along the domain base. The scalar reciprocal $1/k$ is in the system. For real families $k$ can be chosen real. Every scalar comparison or finite scalar limit made at the distinguished sequence holds along the base after the appropriate restrictions.

@src https://github.com/openai/math/tree/main/preprints/Positive-scalar-curvature-and-uniform-codimension-two-width-September-23-2026
@title Positive scalar curvature and uniform codimension-two width
@section Finite cuts with compatible ends — definition

The following definition records these spaces and their incidences
after repeated cuts.
At stage $r$, a status is $\alpha\in\{+,-,*\}^{r}$.
Its entries record the first $r$ processed cuts.
A sign $+$ or $-$ selects the corresponding retained side of a cut,
and a star $*$ selects the wall, called a hit.
The space $E_\alpha$ is a smooth second countable manifold without boundary,
possibly empty or disconnected; when nonempty its base dimension is
$m(\alpha)=n-\#\{i:\alpha_i=*\}$. Its connected components are called
packets. Replacing signs by stars gives the face order.
If $B$ is a packet with $d$ additional stars relative to a coarser status,
then for that coarser status it has exactly one incident packet $E$ and
one corresponding occurrence of a full product tail
[EQ]

@src https://github.com/openai/math/tree/main/preprints/Positive-scalar-curvature-forces-rational-inessentiality-September-23-2026
@title Positive scalar curvature forces rational inessentiality
@section Conventions and the nonnegative scalar-curvature reduction

**Conventions and the nonnegative scalar-curvature reduction** We record the degree conventions for the comparison construction and reduce nonnegative scalar curvature to the positive and Ricci-flat cases used in the corollaries. All manifolds and metrics are smooth. A closed manifold is compact and has no boundary. Unless stated otherwise, manifolds are oriented. Fundamental classes are taken with the indicated coefficients; we use the same symbol $[M]$ for an integral fundamental class and its images under extension of coefficients. The Laplacian is $\Delta=\diver\nabla$, and a round sphere has positive scalar curvature. For a hypersurface with unit normal $\nu$, our second fundamental form is $\mathrm{II}(X,Y)=\langle\nabla_X\nu,Y\rangle$ and its mean curvature is its trace. These conventions fix the signs in the graph calculations below.

[...]

**Fundamental classes and degree** Throughout the proof, $\Gamma=\pi_1(M)$ and $c_M:M\to B\Gamma$ have the meaning fixed in [REF]. No finite-dimensional model for $B\Gamma$ is assumed.

@src https://github.com/openai/math/tree/main/preprints/Smooth-isometric-immersions-of-closed-surfaces-into-Euclidean-four-space-September-23-2026
@title Smooth isometric immersions of closed surfaces into Euclidean four-space
@section Global preparation and finite assembly

**Global preparation and finite assembly** We now arrange a finite sequence of primitive additions to which Proposition [REF] applies. The main point is the order of the choices. The initial immersion will be modified at the crossings of the support boundaries, although those boundaries depend on the number of primitive additions. Uniform second-derivative bounds for the initial modification allow us to choose the number of additions first.

[...]

**A spherical starting immersion** Every closed smooth surface admits an ordinary smooth immersion into $S^3$. Indeed, the two-dimensional case of Whitney's immersion theorem gives a $C^1$ immersion into $\R^3$ [CITE].

@src https://github.com/openai/math/tree/main/preprints/The-affine-Bernstein-theorem-in-dimensions-three-through-nine-September-24-2026
@title The affine Bernstein theorem in dimensions three through nine
@section Convex limits and centered fibers — definition

Letting $\eta\downarrow0$ and using compactness gives the
reverse Hausdorff inclusion.
A model with $k$ directions, or a $k$-model, is a member
$C$ of $\mathcal{F}(D)$ equipped with affine coordinates
[EQ]
such that
[EQ]
and every cap $C\cap\{\sum_i s_i\le T\}$, $T\ge0$, is compact.
Its transverse fibers are
[EQ]
The coordinates are part of the model data.

@src https://github.com/openai/math/tree/main/preprints/Uniform-Bi-Holder-Transport-from-Weak-MTW-September-25-2026
@title Uniform Bi-Holder Transport from Weak MTW
@section The density-free foundation

**The density-free foundation** We record the precise geometric input from [CITE]. Every statement in this section is density-free and uses only the fixed compact manifold and weak MTW. The proofs, including the treatment of conjugate cut endpoints, are in that paper. A potential is a function $u(x)=\max_y\{-c(x,y)-w(y)\}$ with a continuous datum $w$; replacing $w$ by the cost transform of $u$ gives a dual pair. Put $D_g=\operatorname{diam}M$. The total minimizing-vector set $\{(x,p):p\in G_x\}$ is compact. For $p\in G_x$ and $y_s=\exp_x(sp)$, $0<s<1$, divided action gives [EQ]

[...]

[Uniform supports and active logs] There is a geometric constant $C_g$ such that the cost is uniformly semiconcave in either variable, including at cut points. Every potential is $D_g$-Lipschitz and uniformly semiconvex. For a continuous representing datum $w$, define [EQ] Then $\mathcal{V}_u(x)$ is compact and $\partial u(x)=\operatorname{conv}\mathcal{V}_u(x)$. Every $p\in\partial u(x)$ has a positive representation using at most $n+1$ affinely independent active logs.

## dynamical systems and ergodic theory

@src https://github.com/openai/math/tree/main/preprints/A-smooth-three-torus-diffeomorphism-with-simple-Lebesgue-spectrum-September-23-2026
@title A smooth three-torus diffeomorphism with simple Lebesgue spectrum
@section Preparation, whitening, and the smooth limit

The finite prediction result encodes a target observable in a packet
sum while retaining nearly flat total spectral density. We prepare
arbitrary observables for that result, whiten the resulting vector to
exactly flat density, and diagonalize the stages to obtain a smooth map
whose one orbit is complete. All vector comparisons in this section take place in the fixed physical
space $L^2(\T^3)$, even when intermediate coordinates change. A neighborhood
of a diffeomorphism will mean a neighborhood of the pair consisting of the
map and its inverse in the $C^\infty$ topology. For a unitary $U$, write
[EQ]  
We use the packet spectral calculus from Section [REF]

[...]

:
for a measurable function $\alpha$ of the additive spectral variable $z$, the
coefficient of $\alpha(U_S)F$ at angular index $m$ is
$\alpha(m\phi(u)\bmod1)A_m(u,a)$.

[...]

[A flat vector]
For every intermediate twist and every good arc $I$, there is a real
centered vector $v$ of spectral density $1$, using two nonzero angular
indices and coefficients supported in a compact subinterval of $I$.

@src https://github.com/openai/math/tree/main/preprints/Critical-mixing-in-the-Sherrington-Kirkpatrick-model-September-25-2026
@title Critical mixing in the Sherrington--Kirkpatrick model
@section Conventions and Gaussian observations

For a full-support law $\nu$ on $\Omega_n$, we write
[EQ]  
Conditional expectation given all spins except one is an orthogonal
projection on $L^2(\nu)$. The average of these projections therefore has
spectrum in $[0,1]$. Its Dirichlet form is $\D_\nu/n$, a fact used later
to pass directly from continuous time to deterministic numbers of
attempted updates.

[...]

All vector norms are Euclidean and all matrix norms are operator norms
unless another norm is indicated. Empirical averages have a factor $1/n$. We use the orthogonal invariance of a GOE completion. Adjoin independent
$J_{ii}\sim N(0,2/n)$ to $J^\circ$ and call the completed matrix $J$. The added energy is $\frac12\sum_iJ_{ii}$ because $x_i^2=1$; it is
constant on the cube. Hence the Gibbs law, transition kernels, and all
functional constants are unchanged.

@src https://github.com/openai/math/tree/main/preprints/Pointwise-convergence-of-triple-ergodic-averages-for-mixing-transformations-October-4-2026
@title Pointwise convergence of triple ergodic averages for mixing transformations
@section Local forms and the orbit oscillation estimate — definition

The kernel class is the one used in [CITE]. Fix $c_0>0$ and $C_0\geq1$. For an interval $I$ of length
$r=|I|$, a kernel $w_I\in C_c^\infty(\mathbb{R}^2;\mathbb{C})$ is
admissible if the following hold. For every $(x,t)\in\operatorname{supp}w_I$ and
$j\in\{0,1,2,3\}$,
$x+jt\in I$ and
$\operatorname{dist}(x+jt,\partial I)\geq c_0r$. For every $v\in\mathbb{R}$ and $j=0,1,2,3$,
[EQ]  
For all nonnegative integers $p,q$, with $n=p+q$,
[EQ]  
For measurable scalar functions $z_j:\mathbb{R}\to\mathbb{C}$, define
the associated local form, whenever its integral is finite, by
[EQ]  
For a Hilbert-valued argument with a distinguished physical scalar
coordinate, the form uses that coordinate. We write
$\|z\|_{p,I}=(|I|^{-1}\int_I\|z\|^p)^{1/p}$ for the normalized interval
norm, with the usual essential supremum when $p=\infty$.

@src https://github.com/openai/math/tree/main/preprints/Pointwise-Multiple-Ergodic-Averages-for-Mixing-Transformations-October-4-2026
@title Pointwise Multiple Ergodic Averages for Mixing Transformations
@section Channels and closure under selected laws — definition

This channel construction and its closure argument adapt
[CITE]; the proof below permits every fixed
finite set of slots $I=\{1,\ldots,n\}$. A channel is a flow $Y$ over the suspension $C$, with factor map
$\pi_Y:Y\to C$, together with a finite list of probability-preserving
maps $D_\gamma:Y\to C$, called outputs, and positive rational
numbers $q_\gamma$, such that
[EQ]  
for each fixed $t$, modulo null sets. Partition the output indices into
three groups, numbered $1,2,3$; empty groups are allowed.

[...]

Let $V$ collect the phase coordinates of $\pi_Y$ and all the $D_\gamma$. Under the measure $m_Y$ require
[EQ]  
An empty spatial list has the one-point law.

@src https://github.com/openai/math/tree/main/preprints/Rokhlins-multiple-mixing-problem-for-one-transformation-September-23-2026
@title Rokhlin's multiple-mixing problem for one transformation
@section Ordered arrays and conditional locality — definition

An array object consists of standard probability systems
$(Y,m_0,T_Y)$ and $(U,\nu,T_U)$, factor maps
[EQ]  
and probability laws $m_n$ on $Y^{I^n}$ for $n\geq0$. All
transformations are invertible and the factor maps commute with time. The laws satisfy the following requirements. Each $m_n$ is invariant under simultaneous $T_Y$ and projects
coordinatewise to $\rho_n$. For $n\geq1$, fixing any axis at a slot
gives $m_{n-1}$, and every proper family of last-axis planes is
independent under $m_n$. For $n\geq1$, conditional on the complete parameter array
$(u(y_v))_{v\in I^n}$, every proper family of last-axis planes is
independent. The conditional law of each plane is $m_{n-1}$
conditioned only on that plane's own parameter array.

[...]

An extension is another such object together with a local factor
map $\theta:Y'\to Y$ preserving every array law and the map to $X$,
such that the old parameter is a factor of the new parameter.

@src https://github.com/openai/math/tree/main/preprints/Triple-ergodic-averages-with-distinct-integer-slopes-October-4-2026
@title Triple ergodic averages with distinct integer slopes
@section From the local estimate to pointwise convergence — definition

All constants in
this section may depend on the slopes.
**Smooth profiles and cancellation kernels**
An averaging profile is a real $\varphi\in C_c^\infty(\R)$ with
[EQ]  
and, for some $G\geq1$,
[EQ]  
Write $\varphi_a(t)=a^{-1}\varphi(t/a)$ for $a>0$. Profiles are necessarily signed: a nonnegative smooth function of
mass one cannot have zero second moment.

@src https://github.com/openai/math/tree/main/preprints/uniform-bounds-for-planar-polynomial-limit-cycles-September-24-2026
@title Uniform bounds for planar polynomial limit cycles
@section Projection, matching, and the cycle count — definition

**Open domains and the projection principle**
An open analytic system consists of a specified open set
$U\subset\RR^a\times\RR^n$, real analytic equations
$F:U\longrightarrow\RR^m$, and a finite list of real analytic margins
$g_1,\ldots,g_s>0$ specifying its open restrictions. We require the
following completeness of the list of margins: if a sequence in $U$ has
bounded coordinates and all its margins are bounded below by positive
constants, every finite limit of that sequence belongs to $U$ and is a
point of analyticity of all the data. Coordinate-chart boundaries are
included among these restrictions. A nonzero condition $h\ne0$ can be
written as the margin $h^2>0$.

## functional analysis

@src https://github.com/openai/math/tree/main/preprints/An-Endpoint-Gradient-Bound-for-the-Centered-Disk-Maximal-Operator-September-26-2026
@title An Endpoint Gradient Bound for the Centered Disk Maximal Operator
@section Sobolev input and absolute continuity — corollary

Let $BV(\R^2)$ denote the globally integrable functions whose distributional derivatives have finite total variation. For every real $f\in BV(\R^2)$, [EQ] with the constant from Theorem [REF]. Writing $P(F)=|D\1_F|(\R^2)$ for perimeter, every measurable set $E$ with $|E|<\infty$ and $P(E)<\infty$ satisfies [EQ] These superlevel sets have finite measure for every $t>0$ and finite perimeter for almost every $t>0$.

@src https://github.com/openai/math/tree/main/preprints/Failure-of-Bounded-Approximation-in-a-Lipschitz-Free-Space-over-a-Uniformly-Discrete-Metric-Space-September-26-2026
@title A uniformly discrete counterexample to bounded approximation in Lipschitz-free spaces
@section From bounded blocks to AP without BAP — proposition

Let $(N,d,o)$ be a countable pointed metric space such that $d(x,y)\ge1$ for distinct points and $\operatorname{diam}N\le B<\infty$. The map [EQ] is a linear isomorphism onto $\F(N)$ and satisfies [EQ] If $N\ne\{o\}$, then $\F(N)$ has $2B$-BAP. If $N=\{o\}$, both spaces are zero.

## group theory

@src https://github.com/openai/math/tree/main/preprints/A-hyperbolic-group-with-no-geometric-CAT0-action-September-25-2026
@title A hyperbolic group with no geometric CAT(0) action
@section The incidence template and the nested tables — definition

Additional smallness requirements will be imposed when we choose finitely many sampling tests. Use the following mutually independent Bernoulli arrays.

[...]

For each point $i$, an array indexed by $S_n^{E(F_i)}$ includes every tuple with probability $N^{f-k_i}$. An included tuple, together with its type $i$, is a fan occurrence $b$. An array indexed by $S_n^{E(\Gamma)}$ marks every full core tuple with probability $N^{p-gf-1}$. A top occurrence $a$ is a marked tuple whose restriction to every $F_i$ is an included fan occurrence. We write $a\to b$ when $b$ is the fan in one of the seven slots of $a$.

@src https://github.com/openai/math/tree/main/preprints/An-infinite-finitely-presented-periodic-group-September-23-2026
@title An infinite finitely presented periodic group
@section Cancellation and the matrix-nil algebra — definition

A letter test of dimension $d\geq1$ at level $j$ assigns a matrix
$M(a)\in M_d(K)$ to each $a\in\Sigma_j$. For
$w=a_1\cdots a_n$ put $M(w)=M(a_1)\cdots M(a_n)$ and $M(\varnothing)=1_d$. Its length-$n$ sum is
[EQ]  
A chunk test of dimension $d$ and label bound $b\geq1$ consists of
a finite set $\mathcal{C}$ of chunk identifiers, a nonempty label
$v_\gamma\in\Sigma_j^*$ with $|v_\gamma|\leq b$ for each
$\gamma\in\mathcal{C}$, and a weight $W_\gamma\in M_d(K)$. Its length-$n$
sum is
[EQ]  
The empty sequence contributes $1_d\otimes1$ when $n=0$. A test eventually vanishes if its length-$n$ sum is zero for every
sufficiently large integer $n$.

@src https://github.com/openai/math/tree/main/preprints/Expected-amenable-subalgebras-preserving-core-commutants-September-23-2026
@title Expected amenable subalgebras preserving core commutants
@section Modular notation and bicentralizer inputs

The absolute proof and the relative tensor estimate use states on the bounded
operators of the standard Hilbert space whose left and right marginals are
prescribed and whose modular energy is concentrated at one point. We first state the resulting bicentralizer identity and the completely
positive maps that shift its energy parameter. We use standard modular theory [CITE] and the
modular-invariance criterion for state-preserving expectations
[CITE]. We may assume that the algebras are nonzero. Choose a faithful normal state
on $N$ and extend it by $E_N$; denote both states by $\varphi$. Put
[EQ]

@src https://github.com/openai/math/tree/main/preprints/Harmonic-heights-and-the-Artin-K-pi-1-conjecture-September-23-2026
@title Harmonic heights and the Artin $K( ,1)$ conjecture
@section Weighted height data and convex subobjects — definition

**Caps and spherical accessibility**
For $q\in\Zbb$ and $K\subseteq\widehat S$, the data at a
representative $x$ are capped at $q$ on $K$ if
[EQ]  
For a set of colors $J$, let $\partial J$ denote its outside
neighbors in the framed diagram; it includes the frame when
the frame is a neighbor. Positivity of the family weights
makes a cap equivalent to the absence of generators in all
the corresponding unfolded vertices and levels in every
member of the family.

[...]
Consequently $q_i$ is constant on $B$, and
the signs $\eta_i^{q_i}(P)$ are also constant there, because $B$ lies in
one positive-support component at that level.

[...]

For a lower coset $Q=A_Rz\subsetneq P$, call an open color
$i\in T\setminus R$ eligible if
[EQ]

@src https://github.com/openai/math/tree/main/preprints/Parabolic-intersections-in-Artin-groups-September-23-2026
@title Parabolic Intersections in Artin Groups
@section Caps and two-point uniqueness — definition

We first build convex subobjects of a
capped layer and then use right simple modules to recover that coset.
**Accessibility of a cap**
For $q\in\mathbb{Z}$ and a color set $D$, the family at $x$ is
capped at $q$ on $D$ if
[EQ]  
Equivalently, every family member has no generator in those colors
above level $q$. We write $\partial J$ for the exterior neighbors of
$J$ in $\widehat S$.

@src https://github.com/openai/math/tree/main/preprints/quasi-isometric-recognition-of-virtually-polycyclic-groups-September-24-2026
@title Quasi-isometric Recognition of Virtually Polycyclic Groups
@section Affine limits of chart profiles — definition

Consequently $\mathcal{U}_\delta$ is connected. Let $r\to\infty$ along a sequence. For each $r$, choose a map pair with
first map $F$, a basepoint $x\in G$, and a deterministic suffix $k_0\in N$
satisfying
[EQ]  
Choose $a$ uniformly with respect to Haar measure on $B_r(\mathcal{C})$,
and set $n=ak_0$. The chart profile is the random continuous function
[EQ]  
The law of this function is taken in
$C_{\mathrm{loc}}(D_\infty,W)$, with its topology of uniform convergence
on compact subsets. The map, basepoint, and suffix may all vary with $r$.

@src https://github.com/openai/math/tree/main/preprints/Virtual-compact-specialness-of-hyperbolic-one-relator-groups-September-25-2026
@title Virtual compact specialness of hyperbolic one-relator groups
@section Expansion gates — definition

We formulate the
argument more generally because Section [REF]   will
use relative free-product trees in place of these Cayley trees. Consider oriented monotone paths in a tree of groups with height. Sample at
successive occurrences of one edge type, and number these occurrences by
integers. At position $i$ fix a short window $W_i$, of a fixed radius $s$;
the window may consist of the sampled edge itself. Write
$H_i=\Stab(W_i)$, with pointwise stabilizers throughout. In the relative
case fix an invariant system of height-zero peripheral groups. A group is
nonparabolic if it is nontrivial and is not contained in any one of
these actual peripheral groups. The required package consists of the
following properties.

## mathematical logic

@src https://github.com/openai/math/tree/main/preprints/Eventual-Categoricity-for-Abstract-Elementary-Classes-September-24-2026
@title Eventual categoricity for abstract elementary classes
@section Working schemes and uniform comparison of diagrams — definition

An isomorphism means a structural isomorphism onto the entire system.
Fix an unbounded definable class $S$ of eligible levels, a finite system
shape, and a set-sized finite-support term template $F$. A
working scheme consists of classes $\mathcal{C}_\mu$, for $\mu\in S$,
arrows between their objects, and comparisons $D$ of bounded lists,
with the following properties. Every vertex of an object in
$\mathcal{C}_\mu$ has cardinality $\mu$.

[...]

@src https://github.com/openai/math/tree/main/preprints/Single-fold-Diophantine-representations-September-24-2026
@title Single-fold Diophantine representations
@section Polynomial constructions with unique witnesses — definition

A single-fold polynomial system for a relation $R\subseteq\NN^d$ is a
finite list of integer polynomial equations $F_i(a,z)=0$ such that the set of
complete tuples $z$ is a singleton for $a\in R$ and empty otherwise.
A single-fold graph of a function $f:D\to\NN^e$, where
$D\subseteq\NN^d$, is such a system for
$\{(a,f(a)):a\in D\}$. Thus each input $a\in D$ determines both the output and
all further auxiliary variables uniquely. Inputs outside $D$ have no solutions.

@src https://github.com/openai/math/tree/main/preprints/Weak-and-strong-normalization-in-pure-type-systems-September-25-2026
@title Weak and strong normalization in pure type systems
@section Sort profiles and normalization candidates — definition

A candidate at $T$ is a set $C$ satisfying
$G_T\subseteq C\subseteq\top_T$ and the following head-expansion
property: if
[EQ]
all displayed components $D,P,n,\vec m$ are strongly normalizing, and
$P[x:=n]\vec m\in C$, then $r\in C$. Denote the candidates at $T$
by $\mathcal{C}(T)$.

@src https://github.com/openai/math/tree/main/preprints/Witnessed-symmetric-choice-is-strictly-stronger-than-choiceless-polynomial-time-with-counting-September-24-2026
@title Witnessed symmetric choice is strictly stronger than choiceless polynomial time with counting
@section Small orbits give supports at every rank — definition

As usual, an atom permutation acts on finite sets recursively by
$h\cdot x=\{h\cdot y:y\in x\}$.
For an atom tuple $\alpha=(\alpha_1,\ldots,\alpha_r)$, let
[EQ]
The tuple $\alpha$ is a $K$-support of an atom or hereditarily
finite set $x$ over $A_b$ if every element of $K_\alpha$ fixes $x$.

[...]

## mathematical physics

@src https://github.com/openai/math/tree/main/preprints/A-Charged-Reduction-of-the-Spacetime-Penrose-Inequality-in-Spatial-Dimensions-at-Least-Four-October-5-2026
@title A Charged Reduction of the Spacetime Penrose Inequality in Spatial Dimensions at Least Four
@section Area positivity and preparation of the asymptotic end

This section makes the reductions needed before the scalar construction.
The reductions preserve the electric flux form and the prescribed trapping
sign on each original boundary component. They do not require a filling,
a preferred slice, or a timelike ADM vector at the outset. The conclusion
about the original ADM vector will follow only after the estimate for
prepared data has been proved in Proposition [REF].
Throughout this section, $k=n-1$, $\omega=\Area(S^k)$, and
$c_n^2=k(k-1)/2$. [...]
[A bounded flux form]
Under the topological, completeness, and asymptotic hypotheses of
Definition [REF], the full-cut infimum satisfies
[EQ]
This assertion does not use the constraint inequalities or an assumed
minimizing hypersurface.

@src https://github.com/openai/math/tree/main/preprints/A-two-dimensional-area-law-from-a-global-spectral-gap-September-24-2026
@title A two-dimensional area law from a global spectral gap
@section Scanning collars and improving the entropy bound — definition

The entropy bounds will be reused each time the safe-box
exponent improves.
Let $s_0\ge1$ and $n$ be positive integers. A template with parameters
$(n,s_0)$ is a nonempty finite set $T\subset\Z^2$ of the form
[EQ]
where $N_0\ge1$ is an integer and each $P_a$ is a closed convex rectangle or triangle of sup-norm
diameter at most $s_0$, all of whose sides have slope
$0,\infty,1$, or $-1$. Empty sampled pieces can be omitted.
For the fixed cut $A$, the template is separated from the cut if
[EQ]
As above, $T_j$ is the ambient integer dilation,
$X=A\cap T$, and $Q_j=A\cap(T_j\setminus T)$, for $j\ge0$.

@src https://github.com/openai/math/tree/main/preprints/Absolutely-Continuous-Spectrum-for-Weak-Disorder-Anderson-Models-in-Dimensions-at-Least-Three-September-23-2026
@title Absolutely Continuous Spectrum for Weak-Disorder Anderson Models in Dimensions at Least Three
@section Failure histories and removal of pending sites — definition

For $d=3$ we retain the existential threshold
in Proposition [REF].
For the fixed dimension $d\ge4$, let $n_*(d)$ be the least integer
$k\ge10$ with the following property. For every pair of integers
$n_0\ge k$ and $m\ge4n_0$, every $u\in(1/4,1]$, and every
$E\in I_d=-2d+(1/200,1/100)$, set
[EQ]
Let $H_{m,n_0,u}$ be the true periodic negative-hopping Anderson matrix
on $(\ZZ/L\ZZ)^d$ with independent uniform $[-1,1]$ variables and
coupling $\lambda(n_0,u)$. With probability at least $1/2$, there must
exist a set $A$ and coefficients $r=(r_i)_{i\in A}$ such that
[EQ]
The probability here is taken only over the true site variables.

@src https://github.com/openai/math/tree/main/preprints/Blochs-Law-for-Finite-Range-Heisenberg-Ferromagnets-in-Three-Dimensions-October-5-2026
@title Bloch's Law for Finite-Range Heisenberg Ferromagnets in Three Dimensions
@section Kernels and the geometry of available slots — definition

This threshold depends only on the fixed geometry.
A slice $t$ is regular for the anchor $z$ at radius $R$
if the following hold in every coset $\gamma$:
for every $w\in B_{11R}(z)$,
$\#(\mathcal{O}_t^\gamma\cap B_{M_*}(w))<6$;
for every $w\in\mathcal{O}_t^\gamma\setminus B_{10R}(z)$,
$\operatorname{rad}_w\mathcal{C}_t^\gamma(w) \le(1+|w-z|_\infty)^\nu$.
The anchor itself need not be an available site.
[...] A finite collection of slot points with site coordinates $(x_i)$ is
sparse if
[EQ]
Repeated bar coordinates count with their multiplicities, including
points from different cosets. The same definition applies to a list of
centers in $\Z^3$. Every subcollection remains sparse.

@src https://github.com/openai/math/tree/main/preprints/Conformal-flow-and-the-Riemannian-Penrose-inequality-with-minimizing-frontiers-September-27-2026
@title Conformal flow and the Riemannian Penrose inequality with minimizing frontiers
@section The initial enclosure, buried boundary, and flow notation

We construct the conformal flow for $n\ge8$, following Bray and
Bi--Zhu [CITE]. The flow keeps the full frontier
area fixed while changing the exterior metric. We first specify its
ambient manifold and filled side, including the connectedness needed
for the harmonic potentials.
Extend the original smooth metric a short distance behind its compact
frontier, and truncate there at a smooth compact boundary $B$. Denote
the resulting smooth ambient exterior by $(M,g_0)$ and its original
filled side by $J$. The set $J$ contains a fixed collar of $B$.
Smooth boundary charts, the compact core, and the complete
asymptotically flat tail make $M$ complete with $B$ included. The
metric on the buried side need not have nonnegative scalar curvature.

@src https://github.com/openai/math/tree/main/preprints/Endpoint-convergence-for-the-planar-Schrodinger-equation-September-24-2026
@title Endpoint convergence for the planar Schrodinger equation
@section Packets, localization, and fractal estimates — definition

Parameters reused in different arguments have only their
local meaning.
Let $L\geq1$, and set $R=L^2$. An atom with label $\alpha$ is the field
[EQ]
The frequencies $\omega_\alpha$ lie in a fixed square. The labels obey a
joint phase-space bound: every unit ball in $\R^2\times\R^2$ contains at most
a fixed number of the pairs
[EQ]
The profiles $H_\alpha(y,\tau)$ are supported in a fixed bounded box, and
have uniform bounds for sufficiently many derivatives. [...]
A packet field is a finite
sum $\sum_\alpha c_\alpha A_\alpha$, and its coefficient energy is
$\sum_\alpha|c_\alpha|^2$, without weights.

@src https://github.com/openai/math/tree/main/preprints/Entanglement-with-zero-distillable-secret-key-in-local-dimension-ten-September-27-2026
@title Entanglement with zero distillable secret key in local dimension ten
@section Complete public transcripts — definition

Ordinary finite protocols obtain these laws by composition;
a countable schedule requires the compatibility conditions below.
Let $A$ and $B$ be finite-dimensional complex input spaces. An admitted
protocol consists of local quantum instruments, local memories and
randomness, and authenticated two-way public classical communication.
Each party may process its whole input space jointly. Its data and their
joint laws satisfy the following requirements.
Initial resources.
Before interaction,
there is a recorded standard Borel public variable $C_0$, possibly constant,
whose law is fixed once the protocol is chosen. It is independent of the
supplied input together with any purifying or untouched reference.
Conditional on $C_0$, the joint state or law of that input and reference
and the two initial private auxiliary resources is the product of the
input-reference state and one resource for each laboratory. [...]
All shared initial randomness is
included in $C_0$.

@src https://github.com/openai/math/tree/main/preprints/Equality-and-rigidity-in-the-spacetime-Penrose-inequality-September-27-2026
@title Equality and rigidity in the spacetime Penrose inequality
@section Equality and the number of boundary components — definition

We define these comparison
classes separately because their distinction is used in the proof.
Let the boundary of a one-ended exterior be
$S=\bigsqcup_{i=1}^{\ell}S_i$, with $1\leq\ell<\infty$ and each
$S_i$ connected. The boundary is outermost in the partial-coincidence
sense if no enclosing cut $\Gamma\ne S$ has all of the following
properties: every connected component of $\Gamma$ is either an entire
original component $S_i$ or is wholly contained in the open exterior;
at least one component lies in the open exterior; and
$\theta_+(\Gamma)\leq0$ everywhere for the normal toward the end.
[...] The data satisfy all hypotheses of
Theorem [REF], have connected boundary $S$, and
satisfy the following additional conditions:
[...] $S$ is a future marginally outer trapped surface (MOTS):
$\theta_+(S)=0$ for the normal into $\Omega$.
No smooth compact embedded two-sided enclosing hypersurface in
$\operatorname{int}\Omega$, possibly disconnected and oriented toward
the end, has $\theta_+\le0$ everywhere.

@src https://github.com/openai/math/tree/main/preprints/Generic-C1-Future-Inextendibility-Near-Rotating-Subextremal-Kerr-Spacetimes-September-23-2026
@title Generic $C^1$ Future Inextendibility Near Rotating Subextremal Kerr Spacetimes
@section The all-spin background and the constrained linear packet

Fix $d\in\mathcal{U}$ and let $g$ be its smooth vacuum metric on the
comparison development of Proposition [REF], at the
normalized center $0<\mathfrak{a}<1$. Given the branch selected in
Section [REF], our objective is to construct two versions
of one linear perturbation: an oscillatory tensor near a late branch
point and an exterior beam whose data lie on the original bridge.
Their full spacetime jets must agree to prescribed finite accuracy at
the entry cylinder. [...]
We first record the background estimates imported from
[CITE], then locate the branch observation and the rays
returning its entry data to the bridge. Only then do we introduce the
normalized tensor slots used in the wave equation and construct the
packet.

@src https://github.com/openai/math/tree/main/preprints/Pure-Point-Spectrum-for-the-Two-Dimensional-Anderson-Model-at-Every-Positive-Disorder-September-23-2026
@title Pure-Point Spectrum for the Two-Dimensional Anderson Model at Every Positive Disorder
@section Finite volumes and conventions

Throughout the local and multiscale arguments, fix
[EQ]
All constants and auxiliary choices may depend on this pair. Their
dependence on the varying geometric scales, exterior data and masks is
specified in each assertion. [...]
For integer $l\ge0$, put $b_l=3^l$. The global finite volume is the square
torus
[EQ]
with the periodic nearest-neighbor adjacency and independent uniform
potentials on its sites. Its area is $b_N^2$. Distances are shortest
coordinate distances on this torus, using the maximum norm unless a
different norm is displayed. [...]
The physical disorder is always the product law of the true variables
$v_x$. Auxiliary selectors, acceptance uniforms, offsets and thinning
marks will be introduced explicitly. Conditioning on a rare event can
change the law within one cell; it never changes this unconditional
physical law.

@src https://github.com/openai/math/tree/main/preprints/Regular-trajectories-pruning-and-quantum-parity-September-24-2026
@title Regular trajectories, pruning and quantum parity
@section Product tests and regular trajectories — definition

Every reflection layer has at most
$m$ gates, since their supports are nonempty and disjoint.
A test $A$ consists of a subset $J_A\subseteq\{1,\ldots,m\}$ and a specified
unit vector $v_{A,j}$ at each $j\in J_A$. Its excitation count and zero
projection are
[EQ]
Here a subscript $j$ extends a one-site operator by identity at all other
sites, and $\one_{H_A\in E}$ denotes the spectral projection of $H_A$ onto
the set $E\subseteq\mathbb{R}$. The empty test has $H_A=0$ and $P_A=I$.
[...] **Operator degree and excitation shifts**
An operator is supported on $J\subseteq\{1,\ldots,m\}$ if it has the form
$E_J\otimes I_{J^c}$. It has degree at most the nonnegative integer $\ell$
if it is a finite sum of operators each supported on at most $\ell$ sites.
An assertion $\deg E\le x$ for real $x\ge0$ means
$\deg E\le\lfloor x\rfloor$.

@src https://github.com/openai/math/tree/main/preprints/Scale-and-conformal-symmetry-in-four-dimensional-operational-quantum-field-theory-September-26-2026
@title Scale and conformal symmetry in four-dimensional operational quantum field theory
@section Operational framework, vacuum waves, and null cuts — assumption

The physical Hilbert space $\cH$ is generated from a vacuum $\Omega$ by
the original physical fields and their adjoints. The fields, in finite-component
Lorentz multiplets, and their ordered products are operator-valued
Wightman distributions on a common invariant polynomial domain, which we
call the initial realization domain $\mathcal{E}$. They have positive translation spectrum,
Poincar\'e covariance, and locality,
with the usual grading when fermions occur. The vacuum is invariant under
Poincar\'e transformations and continuous dilations; uniqueness of the
invariant vector is not assumed.
Let $\mathcal{D}_{\mathrm{fact}}\subset\mathcal{E}$ be the algebraic span of
$\Omega$ and all finite original vacuum words with compactly supported
factor tests.

@src https://github.com/openai/math/tree/main/preprints/Spacetime-Penrose-inequalities-enclosing-area-charge-and-rigidity-October-5-2026
@title Spacetime Penrose inequalities: enclosing area, charge, and rigidity
@section Three-dimensional exterior data and the mass inequality — definition

An exterior is a connected orientable smooth three-manifold $\Omega$
with nonempty compact smooth boundary, complete as a metric space with
its boundary included, and with exactly one end, which is asymptotically flat.
An enclosing cut is a compact smooth embedded surface in
$\overline\Omega$ separating the entire inner boundary from the
sufficiently distant part of that end. Equivalently, it bounds the side
containing the distant end; the other side is filled up to the inner
obstacle. A cut may have several components and may coincide with the
inner boundary. Its normal points toward the end. [...]
When using perimeter compactness, we take the closure of this class
among filled inner sets and include the area of any frontier coinciding
with the obstacle. Smooth outward approximation gives the same
infimum. Enclosing cuts and minimizing sets are taken with bounded
complementary pockets filled.

@src https://github.com/openai/math/tree/main/preprints/Strongly-rational-unitary-vertex-operator-algebras-and-conformal-nets-September-25-2026
@title Strongly rational unitary vertex operator algebras and conformal nets
@section Algebraic and analytic conventions

Throughout, $V$ has the hypotheses of Theorem [REF]. We collect the algebraic inputs that do not require positivity of all modules, and fix the operator conventions used in the estimates.
**Modules, duality and fusion**
By the regularity theorem of Abe--Buhl--Dong [CITE], every weak $V$-module is an algebraic direct sum of ordinary simple modules. There are finitely many simple isomorphism classes. Their lowest conformal weights are rational [CITE]. These weights are not assumed nonnegative before a positive invariant form is known. In the grading-restricted category, each simple occurs with finite multiplicity: infinitely many copies would give an infinite-dimensional space at its lowest weight. Thus the categories used here have finite length.

@src https://github.com/openai/math/tree/main/preprints/The-Kerr-Newman-Penrose-Inequality-for-Axisymmetric-Electrovacuum-Exteriors-October-5-2026
@title The Kerr--Newman Penrose Inequality for Axisymmetric Electrovacuum Exteriors
@section Geometric setting and main theorem — definition

This is the outermostness condition used below; no condition is
imposed on the inward null expansion.
An enclosing cut $\Gamma$ is the full compact intrinsic boundary of a
connected smooth codimension-zero submanifold $D\subset\Omega$, closed
as a subset of $\Omega$, whose interior lies in
$\operatorname{int}\Omega$ and which contains the entire sufficiently
distant end. The boundary is smooth, embedded and two-sided. All its
components are counted, including any portion coinciding with $S$.
No symmetry or trapping condition is imposed on $\Gamma$.

@src https://github.com/openai/math/tree/main/preprints/The-nonmaximal-anti-de-Sitter-Penrose-Inequality-and-original-data-rigidity-October-5-2026
@title The nonmaximal anti-de Sitter Penrose Inequality and original-data rigidity
@section Flat deformation: equations and floor separation — definition

Their outward leaf normal is $\nu_s=\nabla s/\lvert\nabla s\rvert$.
**Exterior supports and smooth enclosures**
For a closed set $E$, a smooth exterior support at $x\in\partial E$
is a smooth function $\phi$ near $x$ satisfying
$\phi(x)=0$, $\dd\phi(x)\ne0$, and $E\subset\{\phi\le0\}$
locally. With $n=\nabla\phi/\lvert\nabla\phi\rvert$, put
[EQ]
The set has exterior-support expansion at most $c$ if
$\mathcal{E}_Q[\phi](x)\le c$ for every such support at every
frontier point $x$.

## number theory

@src https://github.com/openai/math/tree/main/preprints/A-pointwise-2-converse-for-elliptic-curves-with-rational-two-torsion-October-7-2026
@title A pointwise $2$-converse for elliptic curves with rational two-torsion
@section Arithmetic graphs and simultaneous addressing — definition

In particular, differences commute and
$\Delta_z^2=0$. A witness is a finite graph on which the
symbol is $1$. A graph is partitionable for the symbol if its vertices
can be partitioned into nonempty clusters, each with at most one simple
vertex, with a choice of oriented contraction trees whose contracted graph
is a witness. This definition includes a specified contraction certificate; it makes no
assertion about a Selmer group.

@src https://github.com/openai/math/tree/main/preprints/Constructible-tame-Hecke-eigensheaves-in-positive-characteristic-October-5-2026
@title Constructible tame Hecke eigensheaves in positive characteristic
@section Sheaf conventions and the relative Hecke system

**Sheaf conventions and the relative Hecke system**
The argument will specialize sheaves twice and will use Betti sheaves in the
intermediate characteristic-zero fiber. We first specify the sheaf categories
and the normalization in which these operations will be compared. In
particular, the moving points of a Hecke correspondence contribute no shift to
the eigenvalue identity.
**Local constructibility and flag levels**
Write $E=\overline{\mathbb{Q}}_{\ell}$. For a smooth algebraic stack $\cB$
locally of finite type over an algebraically closed field of characteristic
different from $\ell$, let $D_{\mathrm{lcc}}(\cB,E)$ denote the category of
geometric adic complexes whose pullback to every smooth finite-type scheme
chart is bounded and constructible. The abbreviation ``lcc'' will always
mean locally bounded constructible, not locally constant. Bounds may
depend on the chart. An object $F$ is perverse if
[EQ]  
for every smooth chart $f:D\to\cB$ of constant relative dimension $d$. Charts of nonconstant relative dimension are treated componentwise. This
defines the usual perverse $t$-structure locally and hence its truncations
and perverse cohomology on $D_{\mathrm{lcc}}$.

@src https://github.com/openai/math/tree/main/preprints/Elliptic-Squares-and-Zilber-Pink-for-Curves-in-A2-September-24-2026
@title Elliptic squares and Zilber--Pink for curves in $\mathcal A_2$
@section Heights and integral frames — convention

We first
choose small endomorphisms, then construct integral lattices to control
their finite-place coordinates, and finally compare these lattices and
the archimedean Hodge metrics with fixed rational frames.
**Height conventions and small endomorphisms**
Fix the smooth curve $S$, its smooth projective completion $\overline S$,
the abelian scheme $\A\to S$, and the center $t_0$ supplied by
[REF]

[...]

. Enlarge a fixed number field $K$ to contain
all these data and the finitely many fixed charts, levels and center
endomorphisms. Write
[EQ]  
Here $h_{[t_0]}$ is an absolute logarithmic Weil height. The divisor
$[t_0]$ is ample on $\overline S$, and $c_0$ is a fixed constant. The letters $C$ and $\kappa$ below denote positive constants depending
only on the fixed data; they may be increased in successive estimates. Choose rational frames of $H_{\rm dR}=H_1^{\rm dR}(\A/S)$ and of
$\cP_{\rm dR}$ that are regular and invertible on an affine neighborhood
of $t_0$. Choose a rational parameter $x$ with a simple zero at $t_0$,
and put $a=x(t)$. Throughout, a sufficiently small disk means the
actual branch about $t_0$, not all points with small $|x|$.

@src https://github.com/openai/math/tree/main/preprints/Exact-mass-asymptotics-for-the-two-dimensional-O4-lattice-model-October-5-2026
@title Exact mass asymptotics for the two-dimensional $O(4)$ lattice model
@section An exact comparison of the two regulators — definition

The weights may be complex; this is not an optional
polymer gas and need not be positive term by term. A retained density is an expression
[EQ]  
with the four kinetic coefficients in the bands above and the numerical
energy $\mathcal{E}$ formed from the direct terms [REF]   and
the enabled second-stack squares. If $\mathcal{P}_a$ denotes a canonical
label, including its displayed prefactor in [REF]

[...]

, write
[EQ]  
Here $X_a$ is the declared graph of the complete polynomial label,
including its compensators and paths. Each masked term is defined to
be zero outside its graph domain, so no local continuation is evaluated
there. The errors and covering sum have the stated norms. Each polynomial
slot has a fixed coefficient cap, chosen successively in its displayed
order. The real number $\theta$ is unrestricted.

[...]

Bulk scalars and
[...]

@src https://github.com/openai/math/tree/main/preprints/Failure-of-finite-assembly-for-a-chromatic-overlap-at-the-prime-three-September-25-2026
@title Failure of finite assembly for a chromatic overlap at the prime three
@section Markings, coefficients, and conventions

**Markings, coefficients, and conventions**
The detector in Section [REF]   gives a condition that any finite
construction must satisfy. We now prepare the coefficient calculation that
will violate it. The prime remains $p=3$, and $k$ is the finite field
chosen there, containing $\mathbb{F}_{p^6}$ and enlarged finitely when
needed to fix the constant identifications. Recall the Honda groups
$\Gamma_i$, their division algebras $D_i$, and their stabilizers
$P_i=\mathcal{O}_{D_i}^{\times}$. The Honda forms can be chosen over
$\mathbb{F}_p$, and their endomorphisms are defined over
$\mathbb{F}_{p^i}$. Thus $k$ contains both endomorphism fields needed
in heights two and three. Set
[EQ]  
The actions below are the unextended stabilizer actions: they fix $k$. When Galois descent is involved, it will be handled explicitly rather
than included silently in $P$ or $J$.

[...]

@src https://github.com/openai/math/tree/main/preprints/Fontaine-Mazur-modularity-at-the-prime-2-October-6-2026
@title Fontaine--Mazur modularity at the prime 2
@section Conventions and initial reductions

**Conventions and initial reductions**
We fix the coefficient and automorphic conventions before
introducing deformation spaces. We then remove the virtually
solvable case and specify the trace loci used throughout the
proof. Table [REF]   collects the normalizations that
link deformation theory, completed forms and classicality.
**Coefficients and cyclotomic exponents**
Write $\OO$ for the ring of integers in a sufficiently large
finite extension $E/\mathbb{Q}_2$, $\varpi$ for a uniformizer,
and $k$ for its residue field. Finite coefficient extensions
are allowed. A lattice means a finite free $\OO$-module of
full rank. The cyclotomic character is denoted by $\eps$. We count weights as cyclotomic exponents, so that
$\eps$ has exponent $1$. In the Hodge--Tate convention
$\HT(\eps)=\{-1\}$, exponents are the negatives of
Hodge--Tate weights. We use geometric Frobenius and local reciprocity sending a
uniformizer to geometric Frobenius. Thus, as a character of
$\mathbb{Q}_2^\times$,
[EQ]  
The determinant of a Galois representation is denoted by
$\chi$.

@src https://github.com/openai/math/tree/main/preprints/Frobenius-Structures-on-Tame-Hecke-Eigensheaves-October-5-2026
@title Frobenius Structures on Tame Hecke Eigensheaves
@section Equivariant Hecke systems and specialization — definition

This is ordinary pullback, without a codimension shift. For a $\Gd$-local system $\vartheta$ on $U$, a coherent Hecke
eigenstructure on $F$ consists of isomorphisms
[EQ]  
for all finite $I$, natural in the representations, and compatible with
the unit, successive modifications and convolution, permutations, and
all collision maps [REF]

[...]

, including their iterated
compatibilities. The notation $(V)_\vartheta$ means the lisse sheaf
obtained by evaluating the representation $V$ on $\vartheta$.

@src https://github.com/openai/math/tree/main/preprints/Goldfelds-analytic-density-conjecture-and-the-2-converse-for-elliptic-curves-October-7-2026
@title Goldfeld's analytic density conjecture and the $2$-converse for elliptic curves
@section Selmer ranks and local conventions

**Selmer ranks and local conventions**
We first record the arithmetic implications used to pass between curves
and to interpret the final analytic nonvanishing. They apply to every
elliptic curve over $\Q$. Throughout, we use Mordell--Weil finite generation and the positive
definiteness of the canonical height modulo torsion over number fields
[CITE]. [Ranks and the forward implication]
For an elliptic curve $A/\Q$ there is an exact sequence
[EQ]  
In particular
[EQ]  
If $a(A)\le1$, then $r(A)=a(A)$, the whole group $\Sha(A/\Q)$ is
finite, and $c_2(A)=a(A)$. The finite Kummer exact sequences are
[EQ]  
Their direct limit gives the displayed sequence; taking coranks gives
the identity.

@src https://github.com/openai/math/tree/main/preprints/Natural-Occupation-Measures-for-Critical-Square-Lattice-FK-Interfaces-October-5-2026
@title Natural Occupation Measures for [0.15em] Critical Square-Lattice FK Interfaces
@section Model conventions and inputs

**Model conventions and inputs**
Throughout the proof $q\in[1,4)$ is fixed. Constants may depend on $q$,
on a compact set of charge parameters, and on the stated geometric
separations. No estimate is asserted uniformly as $q\uparrow4$. Write
[EQ]  
We use unit square tiles in the intermediate arguments. Their corners
alternate between primal and dual sites, and the primal edges are tile
diagonals. Thus the primal mesh is $\sqrt2$ times the tile-edge length. Each tile has one of the two noncrossing pairings of its four side
midpoints. An actual primal or dual path uses open edges of that color;
boundary identifications are not path edges. This distinction is essential
when a crossing must reach a wall or separate two arm clusters.

[...]

@src https://github.com/openai/math/tree/main/preprints/Prime-Predecessors-with-an-Even-Number-of-Prime-Factors-September-17-2026
@title Prime Predecessors with an Even Number of Prime Factors
@section Conventions and classical estimates

**Conventions and classical estimates**
Throughout the proof,
[EQ]  
A logarithmic power always has a fixed exponent, chosen before $x$
tends to infinity. The implied constants may depend on all previously
fixed parameters. No effective threshold for $x$ is asserted. The letters $p$ and $q$ in explicitly indicated prime sums range over
primes; general factorization variables are positive integers. We put $P^-(1)=\infty$, where $P^-(n)$ is the least prime factor of
$n>1$, and write $\tau(n)$ for its divisor function. The notation
$n\asymp Y$ restricts $n$ to a fixed constant enlargement of a dyad
$[Y,2Y)$. All such enlargements remain bounded independently of $x$. Dirichlet characters are extended by zero on nonunits. We use the following classical estimates in the forms recorded in
S [CITE]. This explicit list fixes their
uniformity; it does not require any distribution theorem beyond the
stated ranges.

[...]

@src https://github.com/openai/math/tree/main/preprints/The-Poisson-Dirichlet-Law-for-Prime-Predecessors-September-24-2026
@title The Poisson--Dirichlet law for prime predecessors
@section Conventions and analytic inputs

**Conventions and analytic inputs**
Throughout the proof $x$ is a real parameter tending to infinity, and
[EQ]  
A positive integer is rough if none of its prime factors is at
most $W$; we set $P^-(1)=\infty$. Prime variables in explicitly
indicated prime sums range only over primes. The functions $\tau(n)$
and $\tau_j(n)$ count divisors and ordered factorizations into $j$
positive integers, respectively. Dirichlet characters are zero on
nonunits. We use $n\asymp H$ for a fixed bounded enlargement of
$[H,2H]$. Every unspecified exponent of $L$ is fixed before $x$ tends to
infinity. Constants may depend on previously fixed data. Whenever
an exponent must be independent of a marking parameter, this is
stated explicitly. The number of determinant pads in
Sections [REF]

[...]

--[REF]   grows slowly
with $L$; the padding parameter in Section [REF]  
is instead a sufficiently large fixed integer. These are separate
constructions.

[...]

@src https://github.com/openai/math/tree/main/preprints/The-Quasi-Riemann-Hypothesis-October-5-2026
@title The Quasi-Riemann Hypothesis
@section Poisson summation and the dual mean square — definition

**The dual mean squares**
We use the following mean square of the column sums with
coefficients $a_\xi(n)$. The parameters $\mathcal{H}$, $X$, and $F$ are the norm scales of
$k$, $n$, and $f$, respectively.

[...]

Here $k$ ranges over elements of
[...]

@src https://github.com/openai/math/tree/main/preprints/The-Quasi-Riemann-Hypothesis-September-30-2026
@title The Quasi-Riemann Hypothesis [0.5em] A Zero-Free Half-Plane $\Re s>7/8$
@section Analytic estimates for the high expansion — definition

A real box below
means a compact rectangular subset of $\mathbb{R}^3$ for
$(\Re s,\Re w,\Re z)$. Fix real numbers $l_x,l_y>0$ and $\ell\ge0$ such that
[EQ]  
These real numbers are fixed before the target character. For each
primitive finite-order target $\eta$, fix the data $S,\xi,W_0,W_1$ of
Section [REF]

[...]

, independently of $Z$. Data for an exact high
representation consist of the following objects and assertions. First, $\mathscr I_\eta(Z)$ is an independently specified complex-valued
quantity for every sufficiently large real $Z$. In each application it
is given by a finite linear combination, for that $Z$, of the completed
sums in Equation [REF]

[...]

, allowing specified restrictions
on the completed index $A$ and specified rescalings of its three positive
scales. The number of terms and coefficients in this finite combination
may depend on $Z$. Any direct estimate for $\mathscr I_\eta$ refers to
this expression, not to a separately defined high integral.

[...]

@src https://github.com/openai/math/tree/main/preprints/The-two-primary-Birch-Swinnerton-Dyer-formula-in-Selmer-corank-at-most-one-October-6-2026
@title The two-primary Birch--Swinnerton-Dyer formula in Selmer corank at most one
@section A tame horizontal logarithmic comparison — definition

All coefficient tests below use a fixed finite collection
of indices prime to $ND$, with odd $\ell$-valuation, and powers of
one moving prime $r=r_i$. A horizontal sequence consists of primes $r_i$, integers $m_i\to\infty$,
and even surjective residue exponents
[EQ]  
with the following properties. The primes avoid the fixed data,
$r_i\equiv1\pmod{ND}$, $r_i\to1$ dyadically, and $r_i$ splits in
the Hilbert class field of $K$ and in any fixed twisting field in use. The characters kill every prime of $S_f$ and of the fixed smoothing
integers $c,d$, including $2$. We may require them also to kill any
specified finite list, in particular $3$, the primes of $D$, the
tested indices and Hecke operators, and the bad primes of the fixed
models and lifts below. Chosen arithmetic Frobenius lifts converge in
the Tate representation to a determinant-one element with trace
$a_*\ne\pm2$ and with two eigenvalues that are not roots of unity.

[...]

## operator algebras

@src https://github.com/openai/math/tree/main/preprints/A-finite-entropy-separation-of-microstates-and-nonmicrostates-free-entropy-September-25-2026
@title A finite-entropy separation of microstates and nonmicrostates free entropy
@section Conventions and preliminary facts

**Conventions and preliminary facts**
We fix the entropy normalizations and matrix convergence facts used at
both noise scales. The matrix inputs may be random tuples supported on
bounded microstate sets.
All noncommutative variables below belong to tracial von Neumann algebras
with faithful normal tracial state $\tau$. Write $\|a\|_2^2=\tau(a^*a)$.
A standard semicircular family has variance one in each coordinate and
is free. Every noise family is free from the tuple it perturbs.
For a bounded self-adjoint $n$-tuple $X$, let
$\Gamma_R(X;m,d,\varepsilon)$ consist of self-adjoint $d\times d$ matrix
tuples of coordinate operator norms at most $R$ whose normalized traces
of all words of length at most $m$ differ from those of $X$ by less than
$\varepsilon$. With volume taken in the real Euclidean space defined by
unnormalized Hilbert--Schmidt inner product, set
[EQ]
For a tuple $Z$, its conjugate variables $\xi_i\in L^2(W^*(Z),\tau)$
satisfy
[EQ]
where $P$ is a noncommutative polynomial in formal indeterminates
$x_1,\ldots,x_n$, and the difference quotient satisfies
$\partial_i x_j=\delta_{ij}1\otimes1$ and obeys the
Leibniz rule.

@src https://github.com/openai/math/tree/main/preprints/Arithmeticity-of-twisted-finite-correspondences-for-lattices-over-local-fields-September-23-2026
@title Arithmeticity of twisted finite correspondences for lattices over local fields
@section Finite-module realizations and local-field geometry — convention

We use the standard parabolic and root-group structure,
Cartan--Iwasawa decompositions, central-cover facts, root-generated
simplicity, and highest-weight theory
[CITE].
At a complex place the local group is regarded as a real Lie group.
The noncompact property-(T) archimedean factors are the higher-rank
ones and the groups locally isomorphic to $Sp(n,1)$, $n\geq2$, or
$F_{4(-20)}$. At a finite place the factors have relative rank at least
two. For higher-rank property (T), see
[CITE]; the real rank-one
classification and its Kostant attribution are recalled in
[CITE]. Relative rank one
at a finite place gives an unbounded action on the Bruhat--Tits tree
and is incompatible with property (T) [CITE].

@src https://github.com/openai/math/tree/main/preprints/Cuntz-comparison-and-Jiang-Su-absorption-September-23-2026
@title Cuntz comparison and Jiang--Su absorption
@section Joining matrix cones and localizing traces — definition

Taking cuts makes this smallness condition stable under norm-null
changes of representatives; traces with $d_\tau(b)=0$ will require
exact vanishing.
For $b\in A_+$ define $J_b\subseteq A_\omega$ as follows. An element
$z=(z_n)$ belongs to $J_b$ if, for every $s>0$ and $\eta>0$, there is
$E\in\omega$ such that
[EQ]
For $d_\tau(b)=0$ this means exact zero on the left. The set $E$ is
common to the entire indicated trace family. It is enough to test
positive rational $s,\eta$.

@src https://github.com/openai/math/tree/main/preprints/Equivariant-Jiang-Su-Stability-for-Amenable-Actions-in-the-Unital-Stably-Finite-Case-October-5-2026
@title Equivariant Jiang--Su Stability for Amenable Actions in the Unital Stably Finite Case
@section Equivariant uniform property Gamma — definition

The quotient in
Equation [REF] is also the quotient of the norm
ultrapower by its uniform trace-kernel ideal, since norm-null
sequences belong to $I_\omega$.
The action $\alpha$ has equivariant uniform property Gamma
if, for every integer $k\geq2$, there are pairwise orthogonal
projections $p_1,\ldots,p_k\in(A^\omega\cap A')^{\bar\alpha}$ with
[EQ]

@src https://github.com/openai/math/tree/main/preprints/Nuclear-dimension-and-Jiang-Su-stability-without-elementary-subquotients-September-23-2026
@title Nuclear dimension and Jiang--Su stability without elementary subquotients
@section Preliminaries

**Preliminaries**
We collect the approximation, comparison and diagonalization tools for
the dimension bound, including comparison from a uniform rank gap for
all lower semicontinuous extended traces. The central-sequence inputs
for the independent absorption implication are stated in
Section [REF].
All $C^*$-algebras are complex. An unadorned tensor product is spatial;
maximal tensor products are explicitly marked $\otimes_{\max}$.
Representations are nondegenerate. We write $D_+$ for the positive cone of
a $C^*$-algebra $D$, $\widetilde D$ for its unitization, and
[EQ]
For any subset $S\subset D$, let $\Ideal_D(S)$ denote the closed two-sided
ideal generated by $S$; for $x\in D$ we abbreviate
$\Ideal_D(x)=\Ideal_D(\{x\})$. The ambient algebra is omitted when it
is clear. For $\varepsilon>0$,
$(h-\varepsilon)_+$ denotes the usual spectral cut. A full element is
one generating the whole ambient algebra as a closed ideal. A nonzero
$h\in D_+$ is totally full if $f(h)$ is full for every nonzero
$f\in C_0((0,\|h\|])_+$. For a subset $S$ of an ambient algebra,
$S^\perp$ consists of the elements annihilating $S$ on both sides.

@src https://github.com/openai/math/tree/main/preprints/The-Kirchberg-Rordam-character-criterion-September-25-2026
@title The Kirchberg--Rordam character criterion
@section Preliminaries

**Preliminaries**
**Tensor products and positive elements**
All algebras are complex. All tensor products in the construction are
maximal, and we abbreviate $D^{\otimes_{\max}n}$ to $D^{\otimes n}$.
We specify minimal tensor products explicitly. Algebraic tensor products
are denoted by $\odot$ over $\C$ and by $\otimes_{\R}$ over $\R$.
Representations called irreducible are nonzero and nondegenerate, hence
unital when the represented algebra is unital. An element is full
if its generated closed two-sided ideal is the whole algebra. Equivalently,
it is nonzero in every irreducible representation: a proper ideal has a
nonzero irreducible representation of its quotient.
For positive elements in finite matrix algebras over a unital algebra $B$,
write $a\precsim b$ if, after adjoining zero corners as necessary, there
are matrices $x_j$ with $x_j^*b x_j\to a$ in norm. Write $[a]$ for the
resulting Cuntz equivalence class. Thus $[a]\le[b]$ means
$a\precsim b$, and addition is induced by direct sum.

@src https://github.com/openai/math/tree/main/preprints/The-trace-cone-classifies-Razak-Jacelon-stabilizations-September-25-2026
@title The trace cone classifies Razak--Jacelon stabilizations
@section The invariant, its ideals, and matrix conventions

**The invariant, its ideals, and matrix conventions**
The trace cone supplies three inputs to the construction: pointwise
comparison of Cuntz classes in $Q$, a common lattice of ideals for
$P$ and $Q$, and positive elements that control finite collections
of rank estimates inside those ideals. We establish these inputs
before fixing the matrix identifications used in the approximations.
All later comparisons are obtained from the coordinate algebra
$Q$; passage to a sequence algebra will require bounded witnesses.
**Ranks and realification**
For $a\in(C\otimes\K)_+$, extend $\tau\in T(C)$ to matrices by
the unnormalized matrix trace and put
[EQ]
Rescaling an element to be contractive does not change its rank.
The resulting function depends only on its Cuntz class. We write
$d_\tau(x)$ also for the value at $x\in\Cu(C)$.
The basic cut and integration identities are
[EQ]
These identities use extended nonnegative arithmetic and apply to all
the weights in [REF].
We use the following form of the trace and realification theorems.
The assertion about the functional cone is
[CITE]; compactness
is [CITE]. The realification assertions are
[CITE].

@src https://github.com/openai/math/tree/main/preprints/Tracial-projection-methods-and-uniform-property-Gamma-September-23-2026
@title Tracial projection methods and uniform property $\Gamma$
@section Ultrapowers and preliminary inputs

**Ultrapowers and preliminary inputs**
We begin a separate nonunital construction, using the hypotheses of Theorem [REF]. The immediate goal is a unital tracial quotient $D=A^\omega$ with a specified family of limit traces. Compactness of the normalized trace base supplies its unit; the later projection and model constructions take place in this quotient.
Throughout the proof, $A$ satisfies the hypotheses of
Theorem [REF]. Set $T:=T_1(A)$. In particular, every nonzero densely finite trace is
a positive scalar multiple of a unique member of $T$. Simplicity makes
all members of $T$ faithful. Projectionlessness implies that $A$ is
non-elementary and has no nonzero finite-dimensional quotient.
Fix a free ultrafilter $\omega$ on $\N$. For a trace $\sigma$, write
$\|x\|_{2,\sigma}=\sigma(x^*x)^{1/2}$, and use a set of traces in the
subscript to denote the supremum. Set
[EQ]
The tracial inequalities make $I_T$ a closed ideal. Let $\Lambda$ be the family
of limit traces on $D$, namely the traces given by
[EQ]
We regard $A$ as a subalgebra of $D$ through constant sequences.

## partial differential equations

@src https://github.com/openai/math/tree/main/preprints/A-finite-time-singularity-of-Calabi-flow-on-projective-space-September-24-2026
@title A finite-time singularity of Calabi flow on projective space
@section Parabolic norms and uniform local estimates — definition

Let $M$ be either $\R^m$ or the fixed sphere $\Sigma$, let $I$ be a time
interval, and let $s(P)>0$ be a scale on $M\times I$. Fix a sufficiently
small number $a_0>0$. In Euclidean coordinates, or normal coordinates
on $\Sigma$, centered at $P=(z_0,t_0)$, write $s_0=s(P)$ and set
[EQ]
In the Euclidean case the exponential map means translation. The
one-sided endpoints belonging to $I$ are included. For a fixed weight
$p$, define
[EQ]
The derivatives in these formulas are derivatives of the displayed
pullbacks.

[...]

@src https://github.com/openai/math/tree/main/preprints/Hard-sphere-fluctuations-on-the-regular-Boltzmann-lifespan-September-23-2026
@title Hard-sphere fluctuations on the regular Boltzmann lifespan
@section Layered histories and the analytic inputs — definition

**Histories, roots, and normalization**
A history consists of finitely many oriented particle lines and binary
atoms, with an order on the atoms along every line. Each atom has two
incoming and two outgoing half-edges, paired into two serial particle
lines. A C-atom applies elastic scattering, and an O-atom records an
incoming encounter with straight continuation. A line segment between
atoms is a bond. Segments with only one incident atom are ends. A line
with no atom is a single empty end; it is integrated unless its state
is fixed, just like any other end. Atoms belong to specified slabs; the order
along every line must be consistent with those slabs. Lines can begin
or end at slab interfaces. Their beginnings carry one-particle input
functions. Certain top lines, with distinct prescribed labels, are
roots. The remaining particle names are immaterial: histories are
identified under relabelings preserving the roots, the serial pairing,
the C/O types, and the line orders.

[...]

@src https://github.com/openai/math/tree/main/preprints/Nonuniqueness-for-Bounded-Measurable-Scalar-Conductivities-in-Three-Dimensions-September-23-2026
@title Nonuniqueness for Bounded Measurable Scalar Conductivities in Three Dimensions
@section Exact scalarization of two Cauchy pairs — definition

Write $A^{\rm in},u_1^{\rm in},u_2^{\rm in}$
for the data of Theorem [REF], and put
$F_j^{\rm in}=A^{\rm in}\nabla u_j^{\rm in}$.
A subsolution consists of a measurable symmetric matrix $A$, two
potentials $u_1,u_2\in H^1(U)$, and the column matrices
[EQ]
such that $A\in\mathcal{G}$ almost everywhere and, for $j=1,2$,
[EQ]
It must also have an open cover of a full-measure subset of $U$ on
which $A,u_1,u_2$ are smooth and have the local rank property in
Theorem [REF]: on each member one fixed subset of
the potentials has independent gradients, and every remaining potential
is a constant affine combination of those potentials.

@src https://github.com/openai/math/tree/main/preprints/Nonuniqueness-for-the-periodic-hard-sphere-Boltzmann-equation-September-23-2026
@title Nonuniqueness for the periodic hard-sphere Boltzmann equation
@section Equation, admissibility, and notation

**Equation, admissibility, and notation**
The spatial torus $\T^3=\R^3/\mathbb{Z}^3$ has volume one, and
$\Omega=\T^3_x\times\R^3_v$. We write $x=(y,z)$, with two transverse
coordinates $y$ and one axial coordinate $z$, and
$v=(\bar v,v_3)$. In a periodic lift these coordinates range in
$\R^2\times\R$. All spatially rescaled limits below are taken in the lift.
We write $D_t=\partial_t+v\cdot\nabla_x$ for free transport.
For incoming velocities $v,v_*$ and $\omega\in S^2$, set
[EQ]
The surface measure on $S^2$ is its ordinary area measure. We use
[EQ]
Arguments $t,x$, identical in every factor, are suppressed.
The associated symmetric gain is denoted $P(f,g)$, so that
$P(F,F)=Q^+(F,F)$. Its symmetry in the hard-sphere normalization is
included in Lemma [REF]. The loss frequency is
[EQ]

[...]

@src https://github.com/openai/math/tree/main/preprints/Nonuniqueness-with-local-conservation-for-the-hard-sphere-Boltzmann-equation-October-5-2026
@title Nonuniqueness with local conservation for the hard-sphere Boltzmann equation
@section Collision kernels and a velocity majorant — definition

**Sheets and normalized kernel measures**
Fix $L\geq1$. An elementary sheet in $\mathcal{S}_L$ is a product
probability measure
[EQ]
We also allow probability mixtures of elementary sheets. An upper
bound by a sheet with amplitude $A_0$ means domination as measures by
$A_0$ times such a mixture.

@src https://github.com/openai/math/tree/main/preprints/Strict-hot-spots-and-absence-of-interior-critical-points-on-smooth-simply-connected-planar-domains-September-24-2026
@title Strict hot spots and absence of interior critical points on smooth simply connected planar domains
@section Spectral and planar preliminaries

**Spectral and planar preliminaries**
Write $\lambda_D$ for the first Dirichlet eigenvalue of $\Omega$. Both $\mu$ and $\lambda_D$ are positive by the respective Poincar\'e inequalities. Their Rayleigh infima are attained by compactness, and the eigenspaces are finite-dimensional.
The strict separation below is the first-mode case of the Friedlander--Filonov comparison [CITE]. We give the plane-wave argument of Filonov in the form needed here, including the strictness that identifies the equality space of the later vector variational principle.
One has $\mu<\lambda_D$.
Choose a nonzero nonnegative Dirichlet minimizer $\phi$, using absolute values in the Rayleigh quotient. Then $\int_\Omega\phi>0$. Work temporarily over $\C$. For $k\in\R^2$ with $|k|^2=\lambda_D$, put
[EQ]
Each $w_k$ has mean zero. The form $\int(|\grad v|^2-\lambda_D|v|^2)$ vanishes on $e_k$ and $\phi$; its cross term vanishes because $-\Delta e_k=\lambda_De_k$ and $\phi$ has zero trace. Thus every nonzero $w_k$ has Rayleigh quotient $\lambda_D$, proving $\mu\le\lambda_D$.

[...]

@src https://github.com/openai/math/tree/main/preprints/The-Boltzmann-Grad-limit-for-stable-radial-potentials-on-regular-kinetic-intervals-September-23-2026
@title The Boltzmann--Grad limit for stable radial potentials on regular kinetic intervals
@section Centering at the layer cuts — definition

Fix the labels, their order, and an original contact record for each occupied
cell. At the top of a layer give each root label its own owner. Carry
these owners backward through the cells. In a cell form the finite
graph of physical and required virtual contacts of each original
factor's displayed generation diagram, including initial-polymer
edges. Take the disjoint union over tensor factors; contacts with
other factors remain tests and marks below, and are not used to
assign original parents. The selected
original pin edges, together with internal contact trees of its
pinned groups, connect every new label to the old array. For an
internal tree choose the lexicographically first spanning tree of
the finite contact graph.

[...]

## probability and statistical mechanics

@src https://github.com/openai/math/tree/main/preprints/A-Linear-Clock-for-Random-Walk-on-Tree-Weighted-Planar-Maps-October-5-2026
@title A Linear Clock for Random Walk on Tree-Weighted Planar Maps
@section Sewing and local electrical observations — definition

A master block consists of two increment strings on a time interval $[0,\ell_b]$, starting at zero, together with a finite list of internal cuts. A finite package contains finitely many master blocks. For each coordinate $a\in\{L,R\}$ choose a forest on these blocks and record its height differences $o^a_{bd}=s^a_d-s^a_b$. The values $s^a_b$ are thereby determined within each forest component up to one additive constant.
A test chooses finitely many active windows, each between recorded cuts of a master block. Each active window initially has its own copy of the contour vertices. Its starting heights and increment strings are obtained by restriction of its master block. Enable the ordinary sewing inside each active window. The additional cross-window links are specified by the band rules below. [...]

@src https://github.com/openai/math/tree/main/preprints/A-Pivotal-Amplitude-for-Voronoi-Percolation-from-Cardys-Formula-October-5-2026
@title A Pivotal Amplitude for Voronoi Percolation from Cardy's Formula
@section Four-interface transmission in an annulus — definition

A sequence of marked graph annuli $D_n$ has admissible boundary convergence if it lies in a fixed bounded set and satisfies the following conditions. Each boundary is a simple site cycle. With rotations normalized, its uniformization $\phi_n:\mathbb{A}_{p_n}\longrightarrow D_n$ extends continuously to the closed annulus, where $p_n\to p\in(0,\infty)$. After linear identification in logarithmic radial coordinates, these maps converge uniformly on the closed annulus to $\phi$. The map $\phi$ is conformal and one-to-one in $\mathbb{A}_p$, and its boundary traversal specifies the prime-end accesses of $D=\phi(\mathbb{A}_p)$. [...]
The four switches on each component converge in these coordinates to distinct switches. Between them the prescribed run colors alternate. The sites strictly between the two cycles have fresh independent fair colors.

@src https://github.com/openai/math/tree/main/preprints/Buffered-comparison-and-stopping-band-resolution-in-critical-Ising-September-23-2026
@title Buffered comparison and stopping-band resolution in critical Ising
@section Stopped interfaces and signed slit data — definition

A facing datum consists of an oriented Jordan base, finitely many pairwise disjoint simple slits attached to it at distinct roots, the root and tip marks, and signs on the two sides of each slit and on the intervening base arcs. Signs on a slit are opposite. In the prime-boundary traversal the signs change at its tip and continue unchanged through each occurrence of its root. The whole datum lies in the closed band, and its tips lie on the second contour. If there are no slits, the base has one constant side sign. [...]
Within a fixed finite combinatorial type, use the maximum uniform distance modulo increasing parametrizations of the base and slits, respecting root attachments, side labels, and orientation.

@src https://github.com/openai/math/tree/main/preprints/Cardys-formula-for-critical-Poisson-Voronoi-percolation-September-23-2026
@title Cardy's formula for critical Poisson--Voronoi percolation
@section A finite menu of plugs and dense pins — definition

Let $P$ be an oriented rim in a bulk patch. A qualified pin consists of a vertex $p\in P$, a grid center $z$ with $|p-z|\le h$, a placed menu type, its root ranks, and the following data. We describe the black case; interchanging colors gives the white case.
[...]
In the original configuration there are three surrounding gate circuits, in prescribed annuli $[a_kh,b_kh]$, $k=1,2,3$. The first two are the annuli of the plug. The third has $a_3>100b_2$ and isolates an ordered central subarc $\Delta$ through $p$: all visits of $P$ to $B(z,a_3h)$ belong to $\Delta$, and $\diam\Delta\le2b_3h$. [...] In the nominal chart the local ordered traversal of $P$ follows the horizontal midline from before $u=-8$ to after $u=8$, with transverse error and longitudinal backtracking less than $0.1$. [...]

@src https://github.com/openai/math/tree/main/preprints/Conditional-permutations-in-a-revealed-switching-environment-September-26-2026
@title Conditional permutations in a revealed switching environment
@section Preparation and active sweeps

**Preparation and active sweeps**
Now designate $m$ labels as outside cards, leaving $m$ free cards, from any deterministic layout at a sweep boundary. We will bound the expected distance of the free-slot kernel from uniform on $S_m$, conditional on all outside paths. Index the free slots increasingly at each boundary. By Lemma [REF], interval kernels compose by convolution, with later increments on the left, independently of the incoming free-label assignment. Each factor is computed from that interval's outside paths and starting outside layout, even when the entire outside history is revealed.
Partition the time here into chunks, each a preparation interval of $s_0$ sweeps and then an active interval of one sweep. A subprobability is a nonnegative measure of total mass at most one. [...] During the active sweep, we need enough fresh coin constraints that agreement of many endpoints is unlikely.

@src https://github.com/openai/math/tree/main/preprints/Conformal-universality-of-bulk-Ising-correlations-under-weak-interactions-September-23-2026
@title Conformal universality of bulk Ising correlations under weak interactions
@section The critical background and finite-volume comparison

**The critical background and finite-volume comparison**
We now choose the temperature by the decay of the homogeneous background. The interpretation of this branch as critical will follow from the correlations; no property of an interacting critical point is assumed in its construction. All maps in this section use the critical nearest-neighbor conditional kernels of [REF].
[...]
Choose the contraction parameter in [REF] and numbers [EQ] Fix the corresponding sufficiently large block ratio $L$ and initial radius $r_0$, with $r_0$ also larger than the range of the fixed potential. The choices may depend on $J,V$, but not on a domain or on the number of insertions. [...]
Let $\mathcal{H}_j$ be the space of homogeneous, square-symmetric, spin-flip-even background lists at scale $r_j$. [...]

@src https://github.com/openai/math/tree/main/preprints/Directional-transience-implies-ballisticity-September-23-2026
@title Directional transience implies ballisticity
@section Two-walk scales and preliminary comparisons

**Two-walk scales and preliminary comparisons**
We now measure fluctuations in the second coordinate at first hits of successive height layers. Common true levels provide fresh pair continuations and, for independent environments, an iid sequence of symmetric increments. Their truncated variance will determine the fluctuation scale. We first compare all first-hit positions with this sequence, then transfer the comparison between two forms of conditioning. [...]
Common spatial regeneration levels for two walks, reached at possibly different path times, are central to the shared- and independent-environment comparison of Rassoul-Agha and Sepp\"al\"ainen [CITE]. Their invariance principle assumes regeneration-time moments. Here we establish the common-cut identities directly from finite words, using the spatial first moment proved in Section [REF].

@src https://github.com/openai/math/tree/main/preprints/Nonuniqueness-of-percolation-on-nonamenable-quasi-transitive-graphs-September-24-2026
@title Nonuniqueness of percolation on nonamenable quasi-transitive graphs
@section Deformation by pivotal corridors — definition

A raw path is a $k$-step path $w=(w_0,\ldots,w_k)$ of $P$, including possible holding steps. Its base, endpoint, and probability are [EQ] Chronological loop erasure, with holding steps removed, gives a simple path $\gamma_w$ from $u$ to $v$; write $\ell_w$ for its length and $I_w$ for its internal vertices. Retain $w$ as a template precisely when $\ell_w\ge3$. The blockers of a template $w$ are all edges incident to $I_w$ that are not edges of $\gamma_w$; write $b_w$ for their number. Give this template the weight [EQ] Different raw paths remain different templates even if they have the same loop erasure.
For an induced domain $D$, a template is eligible if $\gamma_w\subset D$. Its raw path need not lie in $D$. Its weight is always the full-graph weight $c(w)$ just defined. A blocker absent from the induced graph on $D$ counts as closed.

@src https://github.com/openai/math/tree/main/preprints/Quenched-SLE-Universality-for-Weakly-Disordered-FK-Ising-Interfaces-October-5-2026
@title Quenched SLE Universality for Weakly Disordered FK--Ising Interfaces
@section Partition functions up to a polygon boundary — definition

Let $\mathcal{S}$ be an oriented flat surface with a map $\pi:\mathcal{S}\to\R^2$ whose restriction to each sufficiently small neighborhood is an orientation-preserving isometry. A collared orthogonal polygon is a compact polygonal disk $\mathcal{P}\subset \mathcal{S}$ such that $\pi$ is defined on a neighborhood of $\mathcal{P}$, and each side of $\mathcal{P}$ is horizontal or vertical in these local coordinates. The polygon has finitely many sides; the map $\pi$ need not be injective on $\mathcal{P}$.
Its lattice approximation is obtained by rounding its sides to the lifted square grid of mesh $\delta$ and filling the resulting polygon. Boundary-condition changes are placed in straight side interiors and rounded with the sides. Distinct lifted copies of a physical lattice edge are distinct random-cluster edges with the same environmental sign. [...]

@src https://github.com/openai/math/tree/main/preprints/Randomized-quasipolynomial-time-mean-payoff-games-September-25-2026
@title Randomized quasipolynomial-time mean-payoff games
@section Integer boxes and the winning-set reduction — definition

**Comparison and exact iteration**
For a finite integer box $[a,b]$, a subsolution is a full vector $y\in[a,b]$ satisfying [EQ] A supersolution is a full vector $z\in[a,b]$ satisfying [EQ] We call $S_y$ and $S_z$ their supports, always relative to the specified box. At a collapsed coordinate $a_i=b_i$, neither support contains $i$ and neither inequality is required.
For a vertex set $S$, write [EQ] A subsolution $y$ of $[a,b]$ is admissible if $\alpha(S_y)\le k$. A supersolution $z$ of that box is admissible if $\beta(S_z)\le m$. The supports are relative to $[a,b]$ and have the boundary conventions of Definition [REF].

@src https://github.com/openai/math/tree/main/preprints/Self-dual-random-cluster-interfaces-below-one-September-23-2026
@title Self-dual random-cluster interfaces below one
@section Irregular disks and physical connections — definition

A regular radial collar is a full tile annulus or a union of a bounded number of tile sectors separated by straight coordinate walls. The sector angles belong to the fixed finite list of quadrant, half-plane, three-quadrant, and slit geometries. Distinct banks and distinct corner incidences are kept distinct. Tile-level cuts specify its two radial sections. Designated wire intervals may run along the banks. Name every identified bank class that meets the collar, whether it crosses the whole collar or occupies only a partial bank interval, and suppose their total number is at most a fixed $J$. These classes are the named hubs of the collar; $J$ counts all of them, not just those meeting both radial sections.
Exterior data are permitted if they arise from finite FK graphs with positive odds and have the following planar attachment structure. The graph on either side meets the collar only at its own radial section and the named hubs. It preserves all ordinary collar incidences and designated wire portions, and has no other bank or interior attachment.

@src https://github.com/openai/math/tree/main/preprints/SLE3-universality-for-weak-finite-range-Ising-interactions-September-23-2026
@title $\mathrm{SLE}_3$ universality for weak finite-range Ising interactions
@section Pure critical Ising inputs and contour conventions

**Pure critical Ising inputs and contour conventions**
The comparison and regularity estimates in this section concern only the nearest-neighbor Ising model at coupling $K_0=\beta_0J=\frac12\log(1+\sqrt2)$. Their role is to supply uniform control of bounded spin observables across a free region, and geometric estimates for the contours of the pure model. Section [REF] will derive the uniform transfer theorem from these inputs.
We write $\mu_0$ for the critical full-plane law and $\E_0$ for its expectation. A pin is a prescribed spin. Common pins have the same locations and values in the laws being compared; they may have either sign. A free lattice chart is a region isometric to part of the square lattice in which no spins have been pinned. A collar always includes the edges of that chart, as well as its vertices. [...]

@src https://github.com/openai/math/tree/main/preprints/Strict-convexity-and-differentiability-of-the-planar-exponential-first-passage-limit-shape-September-24-2026
@title Strict convexity and differentiability of the planar exponential first-passage limit shape
@section Calibration and local roads — definition

For $d\in\{A,B\}$, an admissible $d$-road is a measurable oriented two-sided lattice walk together with a continuous nondecreasing nominal parameter on its edge occurrences. The nominal parameter tends to $-\infty$ and $+\infty$ at the two ends. Every compact parameter interval contains finitely many edge occurrences. A point with nominal parameter $t$ satisfies $\|x-td\|_*\le r$.
The construction uses the edge environment and a private product field $U=(U_\iota)_{\iota\in\mathcal{I}}$ independent of it. Each coordinate has a spatial location and, when needed, a road-position or auxiliary type label. For every $z\in\mathcal{G}_n$, the shift $\theta_z$ acts measurably by translating the spatial and road-position indices together and preserves the product law. [...]

@src https://github.com/openai/math/tree/main/preprints/The-entropy-rate-dimension-formula-for-self-similar-measures-on-the-line-September-24-2026
@title The entropy-rate dimension formula for self-similar measures on the line
@section Overlap conventions and dimension of the attractor

**Overlap conventions and dimension of the attractor**
We first reconcile the two usual word-length conventions for an exact overlap. The following observation also appears in [CITE]. The nonzero contraction hypothesis is useful here as well as in the proof of the measure theorem.
For a finite family of maps $x\mapsto r_i x+t_i$ with $0<|r_i|<1$, an equality of maps for two distinct nonempty words of arbitrary lengths implies such an equality for two distinct words of the same length. Suppose $\varphi_u=\varphi_v$ and $u\ne v$. If $u$ were a proper prefix of $v$, writing $v=uw$ and cancelling the invertible map $\varphi_u$ would give $\varphi_w=\mathrm{id}$. This is impossible because a nonempty word has absolute contraction less than one. The same applies with the words interchanged. [...]

@src https://github.com/openai/math/tree/main/preprints/The-free-energy-of-the-Ising-random-perceptron-September-24-2026
@title The free energy of the Ising random perceptron
@section Overlap arrays and probability cascades — definition

Let $B$ be a weakly exchangeable array with values in a compact space, and write $\mu=\mathcal{L}(B_{12})$. We say that $B$ has the Ghirlanda--Guerra property if, for every $n\geq2$, [EQ] Equivalently, for every bounded measurable function $F$ of the first $n\times n$ block and every bounded measurable $\psi$, [EQ] The same definition applies to a joint array, with $B_{\ell m}$ a tuple of entries. By exchangeability the distinguished index $1$ can be replaced by any of the first $n$ indices.
The field functional is $1/2$-Lipschitz on step fields and therefore extends to bounded nonnegative nondecreasing fields; see Proposition [REF]. For $q\in\mathcal{Q}$, define the extended-valued functional [EQ] The field partition is independent of the overlap partition. [...]

@src https://github.com/openai/math/tree/main/preprints/The-free-energy-of-the-spherical-random-perceptron-September-24-2026
@title The free energy of the spherical random perceptron
@section Quantiles and cascade preliminaries

**Quantiles and cascade preliminaries**
The upper comparison and the cavity argument both evaluate the effect of a fresh Gaussian pattern on a limiting Gibbs measure. We first encode its overlap law by a quantile and a finite cascade. The marked-cascade calculation then specifies exactly what is shared by replicas and what must be sampled afresh at each visit.
[...]
Up to changes irrelevant to the functionals, a trial $m$ is the cumulative distribution function, restricted to $[0,1)$, of a probability $\mu$ on $[0,1]$ (put any remaining mass at 1). Let $q$ be a nondecreasing quantile function, viewed modulo null sets on $(0,1)$. We will use $V(q)$ and $S(q)$ for the value and entropy defined above in this parametrization; [...]

@src https://github.com/openai/math/tree/main/preprints/The-joint-scaling-limit-of-critical-Ashkin-Teller-currents-October-6-2026
@title The joint scaling limit of critical Ashkin--Teller currents
@section The model and the limiting objects — definition

For a zero-boundary GFF $f$ in a Jordan domain $O$, define $\mathcal{F}_a(f,O)$ recursively as follows. Expose $\TVS{2\lambda}{2\lambda}(f)$. In every complementary component $V$, write its label as $\xi\,2\lambda$, $\xi\in\{-1,1\}$, and let $f_V$ be the zero-boundary remainder. If $\xi=1$, retain $\TVS{2\lambda}{2a-2\lambda}(f_V)$ as one cluster. If $\xi=-1$, retain $\TVS{(2a-2\lambda)}{2\lambda}(f_V)$. The retained set includes its outer boundary $\partial V$. In each complementary component of the retained set, subtract its conditional harmonic value and repeat the procedure with the zero-boundary remainder. Keep all retained clusters from all recursive generations. The $\CLE_4$ set exposed in the first step is not itself retained.

@src https://github.com/openai/math/tree/main/preprints/The-Sharp-Terminal-Leave-in-Random-Triangle-Removal-September-25-2026
@title The sharp terminal leave in random triangle removal
@section A uniform early prefix — definition

A template $(H,I)$ consists of a graph $H$ and an independent set $I\subseteq V(H)$ of distinguished vertices. For an injection $\psi:I\to[n]$, let $X_{H,I,\psi}(G)$ count its edge-preserving injective extensions to $V(H)$ in $G$. Its scaling at density $p$ is [EQ] A subtemplate with the same distinguished set is any subgraph $H'\subseteq H$ whose vertex set contains $I$, distinguished by $I$. When $v(H)>|I|$, the rooted density is $e(H)/(v(H)-|I|)$; it is zero when there are no free vertices. The template is balanced if every same-root subtemplate has rooted density at most that of $(H,I)$.

@src https://github.com/openai/math/tree/main/preprints/Thermal-FK-Ising-interfaces-and-massive-SLE-October-5-2026
@title Thermal FK--Ising interfaces and massive SLE
@section The model and the limiting law — definition

A positive-mass interface law in $(\Omega,a,b)$ is a law of an oriented continuous curve in the prime-end compactification, from $a$ to $b$, with the following properties. In the chart $\phi$ it is the Loewner trace for the entire evolution [REF], parametrized by half-plane capacity $2t$, $0\le t<\infty$, and completed continuously at $b$ in disc coordinates. Its driving function is a weak solution of [EQ] where $B$ is Brownian motion in a filtration to which the driver is adapted. The actual integral in Equation [REF] is finite almost everywhere and, for every finite $T$, [EQ] The trace requirement includes the full parametrized evolution; one cannot append curve pieces inside already swallowed hulls.

## real and complex analysis

@src https://github.com/openai/math/tree/main/preprints/A-uniform-Hilbert-transform-estimate-for-Lipschitz-directions-September-25-2026
@title A uniform Hilbert transform estimate for Lipschitz directions
@section Short transforms and band reduction — definition

Constants in this definition are fixed throughout.
A tile $s$ has a length $\ell_s\in\mathcal{L}$, a bounded
slope $\theta_s$, a center $z_s=(x_s,y_s)$, and precision
$d_s=w/\ell_s$. Its box is
[EQ]
A $t$-box is defined by the same formula with slope $t$.
The nominal horizontal length need not be the Euclidean long side
when $W>\ell_s$.
At a fixed scale, slope labels have bounded multiplicity on every
interval of length $d_s$. For each scale and label, the centers
lie in one translated box lattice
[EQ]
The lattice and center of a tile are common to every bin component.
An admissible collection is any finite subcollection of such lattices.

[...]

@src https://github.com/openai/math/tree/main/preprints/Almost-everywhere-Fourier-convergence-in-L-log-L-September-23-2026
@title Almost-everywhere Fourier convergence in $L\log L$
@section Conventions and probability notation

**Conventions and probability notation**
After stating [REF], we use unit-period coordinates
$y=x/(2\pi)$ and normalized length $dy$ on $\mathbb{R}/\mathbb{Z}$.
Characters are
[EQ]
For real $u$ the same exponential notation is used on real intervals;
only integer frequencies are regarded as characters of the circle.
Periodic functions are extended to the real line when restricted to
spatial intervals. All conclusions are unchanged by modifications on
null sets.
All logarithms are natural. Write
$\log^-t=\max\{0,-\log t\}$ for $t>0$. The parameter $d$ is sufficiently
large; its lower threshold may depend on fixed auxiliary constants
chosen earlier.

[...]

@src https://github.com/openai/math/tree/main/preprints/An-L3-bound-for-the-trilinear-Hilbert-transform-October-5-2026
@title An $L^3$ bound for the trilinear Hilbert transform
@section Quadratic charts and local detection — definition

We use Euclidean norms for real vectors and the associated matrix norms;
changing between these norms and coordinate maximum norms only changes
the quantitative constants.
A quadratic chart atom is a function
[EQ]
Here $\theta\in\R^d$, $\lambda,\beta\in\R$, $C$ is a rational
$d$-by-$d$ matrix, and $\chi$ is smooth and compactly supported.
The case $d=0$ includes ordinary quadratic phases. An overall
unimodular constant factor is allowed. Every non-unimodular scalar
multiplying an atom is either absorbed into $\chi$, and is then
subject to its stated complexity bounds, or is written as an external
coefficient.

[...]

@src https://github.com/openai/math/tree/main/preprints/Elliptic-capacity-propagation-and-Fourier-restriction-to-the-sphere-September-24-2026
@title Elliptic capacity propagation and Fourier restriction to the sphere
@section Propagation of oscillatory packets — definition

In particular, support
restrictions imposed on the input are inherited by all atoms.
**Uniform exponents and composition**
An admissible family has $m\to\infty$, with $m,N$ dyadic and
$m\le N\le m^B$ for a fixed finite $B$. Its arrays have finite
supports, all their position labels have size at most $m^B$, and all
frequency labels lie in a fixed bounded set. Enlarging $B$ is allowed;
it must remain fixed along each family. Constants controlling the
phase and windows are fixed as well. The same convention applies to
diagrams with a fixed finite number of scales.

@src https://github.com/openai/math/tree/main/preprints/Every-four-dimensional-Kakeya-set-has-full-Hausdorff-dimension-September-24-2026
@title Every Four-Dimensional Kakeya Set Has Full Hausdorff Dimension
@section Weighted models and the reduction from arbitrary Kakeya sets — definition

We impose the following finiteness convention.
The numbers of worlds, specified parameter ranges and coefficients,
and $B,B^{-1}$, are polynomially bounded. In the full trajectory
coefficient coordinates, each prior has piecewise constant Lebesgue
density, polynomially bounded on polynomially many semialgebraic
pieces. Trajectory and incidence predicates use polynomially many
polynomial conditions of bounded individual degree, with arbitrary
Boolean combinations. The number of variables in each geometric
test is bounded. Real constants in these conditions have no height
restriction.
Exact-level selections, labels, cells, and frames obey such uniform
bounds.

[...]

@src https://github.com/openai/math/tree/main/preprints/Koebes-Circle-Domain-Conjecture-September-23-2026
@title Koebe's Circle-Domain Conjecture
@section The quotient sphere and compatible coordinates — definition

\]
A nonnegative $\ell^2(B)$ function has countable positive support.
A coordinate $u_i$ comes with a closed set $M_i\subset X$, called its
mask, and has one of the following forms.
[label= ( )]
A bounded smooth real function on $G$, with mask $M_i=X$.
A coordinate with additive period one, with mask
$M_i=\overline U$ for a dust disk $U$ and singular point
$p_i\in B\cap U$. On the cyclic universal cover of
$\overline U\setminus\{p_i\}$, it is a smooth real function over
$G\cap M_i$, smooth up to the boundary curve, satisfying
[EQ]
for the positive deck transformation $T$.

[...]

@src https://github.com/openai/math/tree/main/preprints/Removable-Boundaries-and-Rigidity-of-Circle-Domains-September-23-2026
@title Removable Boundaries and Rigidity of Circle Domains
@section Models retaining finitely many scalar tests — definition

For a normalized univalent map $h$ on $G$,
Lemma [REF] gives a continuous collapse map
$\pi_h:\Chat\to\Chat$: it equals $h^{-1}$ on $h(G)$ and sends the
complementary component corresponding to $b\in B$ to $b$.
Let $u_1,\ldots,u_m$ be bounded continuous real functions on $\Chat$
whose restrictions to $G$ belong to $W^{1,2}(G)$. A model for
this list is a univalent conformal map
[EQ]
such that its nonpoint complementary components form a finite or
countable null family of closed Jordan disks, and
[EQ]
A family is null if only finitely many members have diameter greater
than any prescribed positive number.

@src https://github.com/openai/math/tree/main/preprints/Riesz-transforms-and-uniform-rectifiability-in-higher-codimension-September-24-2026
@title Riesz transforms and uniform rectifiability in higher codimension
@section Conventions for the bilateral criterion

**Conventions for the bilateral criterion**
We justify the precise version of Theorem [REF], including
positive image mass and bounded supports. The argument first transfers
our open-ball packing estimate to the metric coefficient used by
Bate, Hyde and Schul, and then turns one of their bi-Lipschitz pieces
into a Lipschitz image of the full parameter ball.
[Proof of Theorem [REF]]
The formulation of Bate, Hyde and Schul uses closed balls and maps
defined on all of $\R^n$ [CITE].
If $\overline b_E$ denotes its closed-ball bilateral coefficient, then
[EQ]
Indeed, both closed-ball suprema at radius $t$ are bounded by the
open-ball suprema at radius $2t$ for the same plane.

[...]

@src https://github.com/openai/math/tree/main/preprints/The-Falconer-distance-conjecture-in-all-dimensions-September-23-2026
@title The Falconer distance conjecture in all dimensions
@section Single-profile state reductions — definition

We suppress the cells in $\mathsf D_i(a,t)$ when
they are fixed or are varied in a stated maximum.
Let $\mathcal{B}=[a_0,t_0]\subseteq[0,N]$ be an integer interval, called
the retained base, and let $[a,v]$ be the current interval, with
[EQ]
Write
[EQ]
A recursive angular state consists of these intervals, an index
$i\in\{0,\ldots,J_0-1\}$, two occupied depth-$a$ cells $X,Y$ of
$\rho$, and two admissible endpoint symbols. No separation of the cells
is required. Each symbol's descriptor list consists of exactly one occurrence of each descriptor in
$\mathcal{M}_{>a}(\mathcal{B})$, at the common index $i$.

[...]

## theoretical computer science

@src https://github.com/openai/math/tree/main/preprints/A-Direct-Proof-of-Optimal-Max-Cut-Hardness-September-23-2026
@title A Direct Proof of Optimal Max-Cut Hardness
@section Preliminaries

The proof uses two Fourier expansions. Characters of affine rows encode
candidate labels, whereas characters of Boolean table entries detect the
influences to which Majority Is Stablest applies. We introduce both
conventions, then state the exact affine-game input.
All vector spaces over $\F$ are finite dimensional. All expectations on a
finite vector space or Boolean cube use the uniform probability measure,
unless another distribution is specified. All Fourier coefficients use
this probability normalization.
[...]
**Affine rows and labels**
Let $\mathcal{A}$ be a nonempty affine space over $\F$, with a fixed affine
coordinate system, and set
[EQ]
This is a vector space, containing the constant form $\one$.
For $q\in H^*$ define $\chi_q(h)=(-1)^{q(h)}$.
Evaluation identifies $\mathcal{A}$ with
[EQ]
Indeed, if $h(a)=h_0+\sum_i h_i a_i$, a functional taking value one on
$\one$ has the unique form $q(h)=h_0+\sum_i h_i a_i$.

@src https://github.com/openai/math/tree/main/preprints/A-Fully-Polynomial-Randomized-Approximation-Scheme-for-Perfect-Matchings-in-General-Graphs-September-23-2026
@title A Fully Polynomial Randomized Approximation Scheme for Perfect Matchings in General Graphs
@section Preliminaries

Logarithms are natural unless a base is indicated.
**Weighted matchings and holes**
We allow parallel edges distinguished by colors. A matching specifies
the actual colored edges it uses. For positive rational activities
$a=(a_e)$, put
[EQ]
where $H$ is the underlying graph and $\calM(H-U)$ is its set of perfect
matchings after deleting $U$. The empty graph has one perfect matching,
of weight one. Whenever $Z_a>0$, define
[EQ]
These weighted colored graphs are intermediate spaces constructed from
the simple input graph. Their representation is explicit: vertices,
colored edges, and rational activities are stored individually. The
main theorem retains the finite simple undirected input model; it does
not assert a counting algorithm for compressed edge multiplicities or
for singleton-covering loops.

@src https://github.com/openai/math/tree/main/preprints/A-polynomial-time-algorithm-for-three-machine-unit-job-scheduling-September-24-2026
@title A Polynomial-Time Algorithm for Three-Machine Unit-Job Scheduling
@section The algorithm and its structural certificate — definition

A bounded-description hierarchy for a feasible $J$ has the whole
schedule as its root interval. At a nonempty node $W$, one may first
replace its schedule by a full schedule of the same job set. One then
marks at least one actual slot; the nonempty open gaps between successive
marks and the two boundaries become its children. Different children may
be developed with separate copies of their witnessing exterior schedules.
The following descriptions are required:
[label=( )]

@src https://github.com/openai/math/tree/main/preprints/A-polynomial-time-algorithm-for-three-machine-unit-job-scheduling-September-24-2026
@title A Polynomial-Time Algorithm for Three-Machine Unit-Job Scheduling
@section Separators with a shared cutoff — definition

Given an ideal $S$ of low jobs in a domain, a slot $z$ is a
separator at cutoff $S$ if
[label=( )]
every domain job before $z$ that is outside $S$ belongs to $P_z$;
every domain job after $z$ that belongs to $S$ belongs to $D_z$.

@src https://github.com/openai/math/tree/main/preprints/An-FPRAS-for-Common-Integer-Polymatroid-Bases-with-Binary-Capacities-October-5-2026
@title An FPRAS for Common Integer Polymatroid Bases with Binary Capacities
@section Integer signatures and difference counts — definition

Weights on $\mathcal{B}(m,r)$ are extended by zero outside this slice.
A strictly positive weight $F$ on all of $\mathcal{B}(m,r)$ has the
removal signature if, for every box-valid display $z$ of total
$r+2$, the matrix
[EQ]
It has the addition signature if, for every box-valid display
$z$ of total $r-2$, the same conclusion holds for
[EQ]
Diagonal entries represent two changes in the same coordinate.

@src https://github.com/openai/math/tree/main/preprints/Beyond-the-Square-Root-Exponent-for-Depth-Three-Boolean-Circuits-September-23-2026
@title Beyond the Square-Root Exponent for Depth-Three Boolean Circuits
@section One explicit language and its hard slices — definition

For an input of length $n$, put $d=\floor{n/5}$ and reject if $d<64$.
Otherwise define
[EQ]
Reject if fewer than $2d+(t+2)r-1$ input bits are available.
Otherwise parse the input into the following consecutive blocks:
$d$ data bits $x=(x_1,\ldots,x_d)$;
$d+r-1$ hash bits $u_1,\ldots,u_{d+r-1}$;
$r$ bits $p_0,\ldots,p_{r-1}$, encoding the monic polynomial
[EQ]
$t$ blocks of $r$ bits, encoding elements $\beta_0,\ldots,\beta_{t-1}$ of
the quotient ring $R_P=\F_2[Z]/(P)$, in the basis represented by
$1,Z,\ldots,Z^{r-1}$.
Unused bits are ignored. Form
[EQ]
Let $\lambda:R_P\to\F_2$ take the degree-zero coefficient of the unique
representative of degree less than $r$. The input belongs to $L$ exactly
when
[EQ]

@src https://github.com/openai/math/tree/main/preprints/Constant-factor-hardness-of-directed-feedback-vertex-set-September-23-2026
@title Constant-factor hardness of directed feedback vertex set
@section The weighted reduction — definition

**The three test families**
Add the following families of test vertices to the rank graph. In each
family, independently draw $\psi$ from the fixed rank distribution. Each
outcome is a separate vertex with cost equal to its probability multiplied
by the stated total mass. Distinct outcomes remain separate even if they
produce the same incident arcs.
[label= .,leftmargin=*]
Full-prefix tests, of total mass $H$.
Draw prefix data at length $T$ and use the wildcard vertex in tuple
$\mathbf{s}$ with those $2^T$ cells. Its star set is
[EQ]
Single-label tests, with one family on each side.
The big-side family has total mass $\abs{X}$, and the small-side family
has total mass $\abs{Y}$. Choose $t$ uniformly from
$\{0,\ldots,T-1\}$ and draw prefix data at length $t$. Independently
draw $w$ from the endpoint marginal on the chosen side, a uniformly
random label $j_0\in\Lambda_w$, and a uniformly random permutation
$(\sigma(1),\ldots,\sigma(m_w))$ of $\Lambda_w$. Use a wildcard vertex
in tuple $\mathbf{s} w$. Its cells, in order, are
[EQ]

@src https://github.com/openai/math/tree/main/preprints/Constant-factor-hardness-of-Min-UnCut-September-23-2026
@title Constant-factor hardness of Min-UnCut
@section Preliminaries and unconditional starting theorems

All finite-set averages and Fourier transforms use probability normalization.
Every affine space in the paper is a finite nonempty affine space over $\F_2$.
Constants described as fixed are independent of the input instance; their
dependence on the requested approximation factor is allowed.
**Affine alphabets and odd characters**
For an affine space $A$, let $D(A)$ be the vector space of affine functions
$A\to\F_2$, including constants. If $A$ has dimension $r$, then $D(A)$ has
dimension $r+1$. Write $1\in D(A)$ for the constant-one function. A frequency
is an element $\alpha$ of the linear dual $D(A)^*$, with character
$\chi_\alpha(b)=(-1)^{\alpha(b)}$. Call $\alpha$ odd if $\alpha(1)=1$.
[Odd frequencies are labels]
The map $a\mapsto\operatorname{ev}_a$, where
$\operatorname{ev}_a(b)=b(a)$, is a bijection from $A$ onto the odd frequencies
of $D(A)$. If $\pi:A\to A'$ is affine and
$\pi^*:D(A')\to D(A)$ is pullback, then its dual sends
$\operatorname{ev}_a$ to $\operatorname{ev}_{\pi(a)}$.

@src https://github.com/openai/math/tree/main/preprints/Entropy-and-Face-Dimension-of-the-Perfect-Matching-Polytope-September-23-2026
@title Entropy and Face Dimension of the Perfect-Matching Polytope
@section A convention allowing singleton loops

Suppose a loop is allowed to cover its single incident vertex.
Let $\ell_i$ be the number of distinguished loop choices at vertex
$i$, and retain the multiplicities $k_{\{i,j\}}$ for pairs of
distinct vertices. All these integers are given in binary.
A matching under this convention covers every vertex exactly once by
either a chosen loop or an ordinary pair.
Write $N_j$ for the number of such matchings using exactly $j$
loops, and $N_{\mathrm{loop}}=\sum_{j=0}^n N_j$.
There is one deterministic algorithm which, given a graph on $n$
vertices with nonnegative binary integer pair and singleton-loop
multiplicities, returns a nonnegative rational number
$A_{\mathrm{loop}}$ such that
[EQ]
It returns zero exactly when $N_{\mathrm{loop}}=0$.
Its running time and output length are polynomial in the input bit
length, including when the input gives $n$ in binary and lists only
the positive pair and loop records.

@src https://github.com/openai/math/tree/main/preprints/Existential-universal-real-sentences-in-the-counting-hierarchy-October-4-2026
@title Existential--universal real sentences in the counting hierarchy
@section Counting and controlled polynomial families — definition

For an integer polynomial $V$,
write $\norm{V}$ for the sum of the absolute values of all its
coefficients, in all its indeterminates.
A family $V_w\in\Z[X_1,\ldots,X_{n(w)}]$ is controlled if the
following conditions hold.
The number $n(w)$ is polynomially bounded and computable in
polynomial time.
Nonnegative short integers $d(w),b(w),\lambda(w)$ are computable
in polynomial time and satisfy
[EQ]
The zero polynomial is permitted and satisfies every nonnegative degree
bound.
For some fixed $a$, evaluation
[EQ]
is in $\Flevel{a}$ on prime inputs $p>\lambda(w)$. Field elements are
given by their least nonnegative binary representatives.

@src https://github.com/openai/math/tree/main/preprints/Finite-Monoid-Computations-and-a-Uniform-Generalized-Star-Height-Bound-September-25-2026
@title Finite Monoid Computations and a Uniform Generalized Star-Height Bound
@section Local markers and episode ends — definition

Fix a positive integer $B_{\rm tail}$. With all required bounded data
present, the anchor at origin $t$ is defined as follows:
[label= ( )]
if $\eta(t)\ne\bot$, the anchor is $q=\eta(t)$;
if $\eta(t)=\bot$, the anchor is the first letter position
$q\ge z_\bullet(t)+K_\bullet$ whose letter differs from $\pi_t(q)$.
If no such letter is present, no anchor has yet been found.
An episode beginning at $s$ ends exactly at $q+B_{\rm tail}$.

@src https://github.com/openai/math/tree/main/preprints/Generalized-Star-Height-at-Most-Four-September-25-2026
@title Generalized Star Height at Most Four
@section Episodes and exact end detection — definition

Let $E$ consist of the nonempty words starting at $s$ for which the
required data are available, the anchor rule defines $q$, and the word
ends exactly at $q+b_{\rm tail}$. The rule is interpreted using the
placement just fixed. Since all tests translate with the letters, it
does not depend on an ambient coordinate origin.

@src https://github.com/openai/math/tree/main/preprints/Generalized-Star-Height-at-Most-Four-September-25-2026
@title Generalized Star Height at Most Four
@section Markers and several scales of cuts — definition

A scale $r$ is usable at the origin $t$ if, at each of its $Z$
centers $z_j$, the following conditions hold:
[label=( )]
The value $u(z_j+h)$ equals $u(z_j)$ for every integer $h$ with
$|h|\leq R_r$, including agreement on absence.
If $u(z_j)=\bot$, then either $\sigma\leq S_r$, or the inclusive
interval $[z_j-R_r,z_j+R_r]$ contains no point of
$x+\sigma\mathbb{Z}$.

@src https://github.com/openai/math/tree/main/preprints/Hardness-of-finding-large-independent-sets-in-three-colorable-graphs-September-24-2026
@title Hardness of finding large independent sets in three-colorable graphs
@section Aligning the lists on a sampled set of layers — definition

A pair consisting of a chain and a set $B\in\binom{[r]}s$ is
aligned if there is a map $a:M_r\to B$ such that
$a(A_I)\subseteq I$ for every nonempty $I\subseteq B$.

@src https://github.com/openai/math/tree/main/preprints/Hellinger-contraction-with-arbitrary-Boolean-output-bias-September-24-2026
@title Hellinger contraction with arbitrary Boolean output bias
@section Exact arithmetic conventions

All constants in the certificates are rational; a terminating decimal denotes the corresponding rational number exactly.
This appendix explains the common sign-certification rules.
The individual polynomials, parameter maps, and subdivision orders are specified where they are used.
**Bernstein coefficients**
We use the standard enclosure supplied by the Bernstein form of a
polynomial; see Cargo and Shisha [CITE] for
the univariate coefficient identity and range bound. We include the
tensor-product formula and its proof to make the rational checks explicit.
Let $P(x,y)=\sum_{k=0}^N\sum_{\ell=0}^K a_{k\ell}x^ky^\ell$.
On the unit square its Bernstein expansion is
[EQ]
where
[EQ]
Indeed,
[EQ]
by the binomial theorem after factoring out $x^k$; multiplying two such identities proves the formula.
The basis functions in Equation [REF] are nonnegative and sum to one.
Therefore
[EQ]
The univariate version is obtained by omitting $y$.

@src https://github.com/openai/math/tree/main/preprints/Memory-and-precision-in-noiseless-Gaussian-regression-September-27-2026
@title Memory and precision in noiseless Gaussian regression
@section Exact observations and finite memory — definition

Fix integers $d\ge2$, $M\ge0$, and $T\ge0$. A data-independent
shared seed may choose the learner's rules; the descriptions of its
transitions and output below are conditional on that seed. A signal
$s\in S^{d-1}$ is chosen before sampling. At sample index
$t\in\{1,\ldots,T\}$, the observation is
[EQ]
where the rows $x_1,\ldots,x_T$ are independent. A learner reads the
pairs once, in order. After each number of samples its persistent state
belongs to a prescribed set of at most $2^M$ elements. The initial
state and shared seed are jointly independent of the signal and all
rows, but may depend on each other. Conditional on the seed and state,
a transition may use the entire current pair and fresh
randomness, with unrestricted computation, but only the next finite
state is retained.

@src https://github.com/openai/math/tree/main/preprints/Perfect-completeness-for-2-to-1-games-September-23-2026
@title Perfect completeness for 2-to-1 games
@section The tree of function spaces and the one-bit test — definition

For any such tuple $Q$ of clause and variable questions, define finite
vector spaces over $\F$ recursively. At a leaf $C$, set
$H_C(Q)=\F^{\Omega_C(Q)}$, the space of all functions from its answer domain
to $\F$. For every node $C$, set
[EQ]
At a nonleaf node $D$, put
[EQ]

@src https://github.com/openai/math/tree/main/preprints/Posterior-replicas-and-conditional-information-in-Gaussian-regression-September-27-2026
@title Posterior replicas and conditional information in Gaussian regression
@section Finite states and the information required at the endpoint — definition

**Finite-state learners**
An unknown unit vector $s\in S^{d-1}$ is fixed before sampling. At index
$j\ge1$ the learner receives
[EQ]
where the $X_j$ are independent. It cannot choose a row or revisit an earlier
one. At each index its persistent state has at most $2^M$ values. Its
transition and stopping rule may be any measurable randomized kernel of
the current state and the entire current pair $(X_j,Y_j)$. Computation
within a transition is unrestricted, and every piece of information retained
for later indices must be in the finite state.
The learner stops at an index $\tau\in\{0,\ldots,T\}$, where the integer
$T$ is a prescribed deterministic horizon. Its unit-vector output is drawn
using only the terminal state, the rule at index $\tau$, and fresh randomness.

@src https://github.com/openai/math/tree/main/preprints/Single-Exponential-Recovery-and-Bounded-Price-Strictness-for-Metric-k-Median-September-24-2026
@title Single-exponential recovery and bounded-price strictness for metric $k$-median
@section Conventions and reduction to bounded integral distances

For a nonempty set $H\subseteq F$, write
[EQ]
We use $n=|D|$ and $N=n+|F|$. We use $\log(N+2)$ for logarithmic
factors in the instance size. Constants may depend on fixed accuracy
parameters, but not on the input. The expression $\exp(O(m))$ always
has an input-independent constant in the exponent.
[...]
Fix nearest assignments whenever a solution is considered. For a
comparison solution $O$ of size $h$, its cluster at $i\in O$ is denoted
$C_i$, and
[EQ]

@src https://github.com/openai/math/tree/main/preprints/Strong-diffeomorphic-approximation-in-three-dimensions-for-1-le-p-le-2-September-24-2026
@title Strong diffeomorphic approximation in three dimensions for $1\le p\le2$
@section Parametrization, topology, and trace budgets for the low exponents — definition

Let $D$ be a compact polygonal disk or a convex polyhedral cell and let
$v:D\to\R^d$ be Lipschitz. We say that $v$ has essential tangential
compatibility if the following properties hold.
At almost every interior point $x$, the a.e. derivative of $v$ has
essential limit $Dv(x)$ as its argument tends to $x$.
In radial coordinates based at an interior point, at almost every
boundary parameter the derivatives in boundary directions have essential
limits, from the interior as well, equal to the derivatives of the
boundary restriction.

@src https://github.com/openai/math/tree/main/preprints/Strong-diffeomorphic-approximation-in-three-dimensions-for-p-gt-2-September-24-2026
@title Strong diffeomorphic approximation in three dimensions for $p>2$
@section Wall routing, guard barriers, and realization — definition

Let $M_x,M_y$ be the source and target exteriors and let
$h_*:M_x\to M_y$ be the fixed reference homeomorphism. A pre-stack
system consists of a locally finite, countable, two-colour family of
compact collars
[EQ]
whose central sampled wall is the level $u_j=w_j/2$, subject to the
following conditions.
Each $\mathcal{E}_j$ is a bi-Lipschitz homeomorphism onto its image.
For colour $A$, $\Sigma_j$ is an annulus whose core is essential in
$M_x$; for colour $B$, $\Sigma_j$ is a disk.
Each level is properly embedded, and
$C_j\cap\partial M_x=\mathcal{E}_j(\partial\Sigma_j\times[0,w_j])$.
The collars of a single colour are disjoint, including their boundaries.
The family of closed collars is locally finite.

@src https://github.com/openai/math/tree/main/preprints/Subpolynomial-query-complexity-for-well-conditioned-log-concave-sampling-September-26-2026
@title Subpolynomial query complexity for well-conditioned log-concave sampling
@section Dimension bounds for material derivatives — definition

A tensor expression is a finite formula built by the following rules.
For each integer $q\ge1$, $U_q/L$ is an expression with $q+1$
free slots and weight $q-1$.
A permutation of the free slots preserves the weight.
Two expressions may be contracted on one chosen slot each,
provided each factor retains at least one free slot. The
resulting weight is the sum of their weights.
An adjoint divergence on a chosen free slot is allowed when
at least two free slots remain. It increases the weight by one.

@src https://github.com/openai/math/tree/main/preprints/The-Approximation-Threshold-for-Metric-k-Median-September-24-2026
@title The approximation threshold for metric $k$-median
@section Preliminaries and the reduction

We use the client set $J$, candidate set $F$, connection cost
$\cost$, and optimum $\OPT_k$ defined in the introduction.
Polynomial time includes the binary encodings of all distances.
We henceforth assume $J\ne\varnothing$ and $1\le k\le |F|$.
This section fixes the fractional representation and states the external
reduction that will remove the final constant additive surplus.
**The fractional solution**
We use the standard relaxation
[EQ]
Its rational optimum can be found in polynomial time. For fixed openings
$y_i$, assign each client to its nearest unit of opening mass, using a fixed
order to break ties. If $h_j(t)$ is the distance needed to accumulate mass
$t$, put
[EQ]
Then $L=\sum_jV_j\le\OPT_k$ for an optimal solution of [REF].

@src https://github.com/openai/math/tree/main/preprints/The-Unique-Games-Theorem-September-23-2026
@title The Unique Games Theorem
@section Conventions

**Weighted games.**
Intermediate instances may have loops, repeated constraint occurrences,
and positive rational weights summing to one. Their value is the maximum
total weight satisfied by a labeling. Occurrences retain separate IDs
even if their constraints coincide. All rational numbers are encoded by
binary numerators and denominators.
A bipartite projection game has a question for each vertex on
either side, finite answer sets, and a map from left answers to right
answers on each constraint. A strategy chooses one answer to each
question. Answer sets that depend on the question can be identified
with fixed alphabets of the same size; we use this for the four
satisfying triples of a parity equation. Each prover uses only its own
question. Private or shared randomness independent of the questions
gives a mixture of deterministic strategies and cannot increase value.

@src https://github.com/openai/math/tree/main/preprints/Unconditional-time-lower-bounds-for-Weisfeiler-Leman-equivalence-September-25-2026
@title Unconditional time lower bounds for Weisfeiler--Leman equivalence
@section Weisfeiler--Leman conventions and the bijective game

The joint refinement and its $(k+1)$-pair characterization are standard;
see Kiefer and Neuen [CITE].
We prove the correspondence here, including the separate convention,
to fix both the parameter shift and the order of the game moves.
Graphs in this section are finite, simple, and nonempty. They may carry
vertex colors from a common palette; isomorphisms must preserve these
colors. The uncolored case uses a single vertex color. For an ordered
$k$-tuple $\bar v$ and a vertex $z$, write $\bar v[i\leftarrow z]$ for
replacement of coordinate $i$ by $z$.
[The two refinement conventions]
Let $k\geq 2$. The initial color $\chi_0^X(\bar v)$ records the atomic
type of $\bar v$ in $X$: all coordinate equalities, adjacencies, and vertex
colors. The joint convention updates by
[EQ]
The separate convention instead records the ordered list
[EQ]

## topology

@src https://github.com/openai/math/tree/main/preprints/A-marked-tensor-obstruction-to-four-dimensional-disk-embedding-September-24-2026
@title A marked tensor obstruction to four-dimensional disk embedding
@section The geometric reduction — assumption

The marked boundary words and their based paths
are chosen as part of the initial disk problem. Let $M$ be a compact connected oriented smooth four-manifold with boundary. Suppose that a finite collection of proper generic immersions
[EQ]  
has pairwise disjoint embedded boundary circles, and admits generically immersed
framed spheres $g_1,\ldots,g_k$ such that
[EQ]  
Here intersections are counted in $\mathbb{Z}[\pi_1M]$, with fixed whiskers,
the diagonal equations are included, and
[EQ]  
uses the additive quotient. Then the $f_i$ can be replaced by pairwise disjoint
locally flat embedded disks with the same boundary maps and the same induced
normal framings on those boundary circles.

@src https://github.com/openai/math/tree/main/preprints/Filtered-products-and-boundary-preserving-compression-in-complex-cobordism-September-25-2026
@title Filtered products and boundary-preserving compression in complex cobordism
@section Point tests and controlled avoidance — definition

Its relative support is essential
for the later control on displacement. Recall $c=1/32$. Let $P$ be a finite polyhedron, let
$f:P\to C(t,n)$ be PL, and let $Z\subseteq T(t,n)$ be a subpolyhedron. Define
[EQ]  
For $0<\rho<c$, take the oriented collapse
$\kappa_\rho:\R^M\to S^M$ of the complement of
$(-\rho,\rho)^M$. The point test is the based map
[EQ]  
Its stable class is denoted by
[EQ]  
Composing with the unit $\mathbb{S}\to MU$ gives
$\omega_{MU}(f,Z)\in\widetilde{MU}^{M}(Q_c(f,Z))$.

@src https://github.com/openai/math/tree/main/preprints/Finite-generation-for-the-Kn-local-sphere-September-24-2026
@title Finite generation for the $K(n)$-local sphere
@section Continuous coefficients and full-group duality — definition

In this section $\kk$ is a
finite field of characteristic $p$, and $G$ is a compact $p$-adic
analytic group. [definition]def:cts-steps
A coefficient module with complete steps is a vector space
$M=\bigcup_{a\geq 0}M_a$, where the $M_a$ are complete Hausdorff linearly
topologized $\kk$-spaces and the inclusions are continuous injections. The inclusions need not induce the topology on the smaller space. An
action of $G$ is required to have the following property: for every $a$
there is a $b$ for which $G M_a\subset M_b$ and
$G\times M_a\longrightarrow M_b$ is continuous. Morphisms satisfy the
analogous condition with no group variable. We use the bounded-step
continuous cochains
[EQ]  
with the usual inhomogeneous differential. Their cohomology is denoted
$H^j(G,M)$. The same convention applies to continuous functions on any
compact profinite parameter space $\mathcal{D}$: its complete steps are
$C_{\cts}(\mathcal{D},M_a)$ with the topology of uniform convergence.

@src https://github.com/openai/math/tree/main/preprints/Nonhomeomorphic-closed-aspherical-four-manifolds-with-the-same-homotopy-type-October-4-2026
@title Nonhomeomorphic closed aspherical four-manifolds with the same homotopy type
@section Marked chambers and the even cover — definition

The three-cell attachments and the
orientation lift, giving the asserted pair. A marked filling of $S_d$ is a compact oriented topological
four-manifold $D'_d$, an orientation-preserving identification
$\partial D'_d=S_d$, and a homotopy equivalence
$D'_d\to BH_d$ whose boundary restriction is homotopic to
the marking $S_d\to P_d\simeq BH_d$.

@src https://github.com/openai/math/tree/main/preprints/Rational-homology-and-Quillens-conjecture-September-24-2026
@title Rational homology and Quillen's conjecture
@section Conventions and the reduction theorems

**Conventions and the reduction theorems**
We first specify the homological statement used in induction and the
classical groups to which the known reductions apply. Unless coefficients
are specified otherwise, homology groups and chains have coefficients in $\Q$.
**Posets, chains, and elementary rank**
For a finite poset $P$, let $\Delta(P)$ be its order complex and write
$\widetilde H_*(P)$ for its reduced homology. We use the augmented chain complex:
there is a one-dimensional group in degree $-1$, generated by the empty
simplex, and the boundary of each vertex is that generator. Consequently
$\widetilde H_{-1}(\varnothing)=\Q$. For a nonempty finite complex,
nonvanishing in degree $-1$ is impossible. A full flag in an elementary abelian group $E$ of rank $r$ is a
chain
[EQ]  
We also call such a flag saturated. A coefficient at a full flag always
means its coefficient as an oriented simplex, with the displayed
increasing order. Write
[EQ]  
allowing $E=1$ in this maximum. The order complex of $\Ap(G)$ has
dimension $m_p(G)-1$, including the empty case.

[TRUNCATED]

@src https://github.com/openai/math/tree/main/preprints/The-Grothendieck-homotopy-hypothesis-via-elementary-expansions-September-24-2026
@title The Grothendieck homotopy hypothesis via elementary expansions
@section Globular models and the weak-equivalence test — definition

The language of
globular theories and their pasting arities goes back to
Berger [CITE]. A globular theory is a category under $\Theta_0$, with the same
objects and preserving the designated globular sums. A
Grothendieck coherator $\mathcal{C}$ is such a theory with the
following two properties. It admits a defining tower
$\mathcal{C}_0=\Theta_0\to\mathcal{C}_1\to\cdots$ with
$\mathcal{C}\cong\colim_{r\ge0}\mathcal{C}_r$. At stage $r+1$, one
freely adjoins a filler for each pair in a chosen set of parallel pairs
$d_{j-1}\rightrightarrows S$ in $\mathcal{C}_r$ satisfying
$j>0$ and $\dim(S)\le j$. The new arrow $d_j\to S$ has that pair
as its source and target. Every parallel pair $d_{j-1}\rightrightarrows S$ with
$\dim(S)\le j$ has a filler $d_j\to S$. Here freeness includes globular completion: the designated sums continue
to be sums after the new arrows have been adjoined.

@src https://github.com/openai/math/tree/main/preprints/The-Hilbert-Smith-conjecture-in-every-finite-dimension-September-23-2026
@title The Hilbert--Smith conjecture in every finite dimension
@section Compact-source sheaf categories and homotopy invariance — definition

All tensor products are derived tensor
products over $\R$; tensoring sheaves is exact over this field. Let $\Tzero(X)$ be the smallest full replete triangulated subcategory of
$\mathsf D(X)$ containing
[EQ]  
where $f$ is any continuous map. Let $\T(X)$ be its closure under direct
summands in $\mathsf D(X)$. When $X$ has a specified semialgebraic model, define $\Pzero(X)$ and
$\Pcat(X)$ in the same manner, requiring $B$ to be a compact polyhedron in
a Euclidean space and $f$ to be continuous semialgebraic in the specified
models. For an arbitrary open subset $U$ of a semialgebraic model, the
condition on $f:B\to U$ is that its composite into that model be
semialgebraic. The open subset itself need not be semialgebraic. An allowed map for $\T$ is a continuous map of test spaces. For $\Pcat$ we
use continuous semialgebraic maps in the models, their restrictions to the
open subsets under consideration, and inclusions of such open subsets. The condition on a map used in the arguments below is
that composition carry every allowed compact-source generator to an
allowed compact-source generator. Homotopies for $\Pcat$ satisfy this
condition in their two variables;

[TRUNCATED]

## uncatalogued

@src https://github.com/openai/math/tree/main/preprints/A-typical-start-upper-bound-for-low-temperature-SK-Glauber-dynamics-September-24-2026
@title A typical-start upper bound for low-temperature SK Glauber dynamics
@section Notation and Gaussian completion

**Notation and Gaussian completion**
Fix a finite $\beta>1$. Constants may depend on this fixed parameter;
when that dependence matters we write $C_\beta$ or $O_\beta(\cdot)$.
All logarithms are natural. For probability measures $\mu\ll\nu$, set
[EQ]
On the spin cube, total variation is one half of the $\ell^1$ distance.
For vectors in $\mathbb{R}^n$ write
$\langle v,w\rangle_n=v\cdot w/n$ and
$|v|_n^2=\langle v,v\rangle_n$. The notation $\|\cdot\|$ refers to
the ordinary Euclidean norm, or to the operator norm of a matrix.
The orthogonal queries will use a Gaussian orthogonal ensemble (GOE)
matrix.

[...]

@src https://github.com/openai/math/tree/main/preprints/An-asymptotic-formula-for-the-number-of-totients-September-25-2026
@title An asymptotic formula for the number of totients
@section Extracting a long prime prefix — definition

Write $\Omega(n,U,T)$ for the number of prime factors of $n$
belonging to $(U,T]$, counted with multiplicity, and put
$\Omega(n)=\Omega(n,1,n)$, including $\Omega(1)=0$.
For $S\ge\e^\e$, a prime $p$ is $S$-normal if
[EQ]
and, for every $S\le U<T\le p-1$,
[EQ]

@src https://github.com/openai/math/tree/main/preprints/An-unconditional-first-moment-for-cubic-Gauss-sums-September-25-2026
@title An unconditional first moment for cubic Gauss sums
@section Arithmetic and analytic preliminaries

**Arithmetic and analytic preliminaries**
Write $K=\mathbb{Q}(\omega)$, $\mathcal{O}=\mathbb{Z}[\omega]$, and
$\lambda=\sqrt{-3}$, where $\omega=e^{2\pi i/3}$.
An element is primary if it is congruent to $1$ modulo $3$.
Every nonzero ideal prime to $3$ has a unique primary generator.
Unless specified otherwise, sums over $a,b,c,d,r,u$ and their divisors
are over these generators. In contrast, Poisson frequencies range over
the full lattice indicated in the formula. We use
[EQ]
The functions $\mu$, $\tau$, and $\varphi$ are the ideal Mobius, divisor,
and Euler functions; thus $\varphi(r)=\#(\mathcal{O}/(r))^\times$.

[...]

@src https://github.com/openai/math/tree/main/preprints/Bochner-Riesz-Multipliers-in-Three-Dimensions-September-24-2026
@title Bochner--Riesz multipliers in three dimensions
@section Finite packet composition and the uncertainty boundary — definition

The coefficient
tests at $r=0$ are bounded by the canonical root tests, so the last
assertion follows as well.
**What saturation permits one to select**
After normalizing duration to one, a saturation array consists of
rows indexed by $j$, with small parameters $\eps_{j,n}\downarrow0$
within each row. Row $j$ obeys one fixed collection of analytic,
domain, and depth bounds $\mathcal{B}_j$, and, for numbers
$\Delta_j\downarrow0$,
[EQ]
The corresponding lower limit is nonnegative by the universal bound
for that row. Bounds $\mathcal{B}_j$ may grow with $j$; the outer
array is not asserted to be one admissible small-parameter sequence.

[...]

@src https://github.com/openai/math/tree/main/preprints/Brennans-conjecture-and-sharp-inverse-square-integral-means-September-24-2026
@title Brennan's conjecture and sharp inverse-square integral means
@section Critical points and an equivariant pairing — definition

At a critical point,
$\operatorname{Hess}V^F_\xi=V^F_\xi\operatorname{Hess}\ell$, so these
classifications apply to $V^F_\xi$ as well.
A pair $(F,\xi)\in\KK\times\CC$ is good if every closed positive
superlevel of $V^F_\xi$ is compact in $\HH$, and $\xi$ is a regular value
of $G_F$. Thus every solution $G_F(z)=\xi$ must satisfy $J_F(z)\ne0$;
a target with no such solution is regular. Write $\mathcal{G}$ for the
set of good pairs.

@src https://github.com/openai/math/tree/main/preprints/Complex-Matrix-Multiplication-Below-2.258-and-Rectangular-Bounds-September-24-2026
@title Complex Matrix Multiplication Below $2.258$ and Rectangular Bounds
@section Banked constructions and attainable values — definition

It does not assert that all such
families arise as independent products.
A strong realization consists of a finite auxiliary tensor $\mathcal{A}$, a
finite degeneration by three local maps, a set $\Lambda$ of direct labels,
and positive integers $a,b,c$, with the following properties.
[label= ( )]
Every $\lambda\in\Lambda$ designates an original word $w(\lambda)$,
and $\lambda\mapsto w(\lambda)$ is injective. All these words have
the same exact canonical law in each orientation bank.
For every family of unresolved tensors $P=(P_w)$ the same maps give
[EQ]
In this display the original local coordinates of $w(\lambda)$ are
retained as well; only their fixed basis factors are suppressed.

[...]

@src https://github.com/openai/math/tree/main/preprints/Critical-Center-Magnetization-in-the-Planar-XY-Model-October-5-2026
@title Critical Center Magnetization in the Planar XY Model
@section Height conventions and local map inputs

**Height conventions and local map inputs**
The proof combines three inputs: the critical height coefficient from
[CITE], the local integration maps of [CITE], and the identical-nest
comparison of [CITE]. We first fix their common
normalization. We then specify the analytic spaces in which the local
maps operate. These inputs include finite-graph inequalities, scaling
limits, and local activity maps. The entry construction for the critical
XY model is supplied below.
**Dual heights and finite comparisons**
For a graph $G$ consisting of retained nearest-neighbor edges, choose
one orientation of each edge and write $\partial v$ for the oriented
gradient.

[...]

@src https://github.com/openai/math/tree/main/preprints/Critical-slowing-down-in-the-Sherrington-Kirkpatrick-model-September-24-2026
@title Critical slowing down in the Sherrington--Kirkpatrick model
@section Model, clocks, and conventions

**Model, clocks, and conventions**
This section fixes the normalization shared by the static and dynamical
arguments. In particular, adding a GOE diagonal will provide spectral
test vectors without changing any quantity intrinsic to the spin law.
Throughout, $n\to\infty$; arguments using three distinguished coordinates
are applied for $n\ge3$. Constants $c,C>0$ are independent of $n$, may
change from line to line, and have only the additional dependencies
explicitly indicated. Vector norms are Euclidean and matrix norms are
operator norms. We write $O_{\Prob}(1)$ for a sequence whose laws are
tight.

[...]

@src https://github.com/openai/math/tree/main/preprints/Cutoff-throughout-the-high-temperature-Sherrington-Kirkpatrick-phase-September-24-2026
@title Cutoff throughout the high-temperature Sherrington--Kirkpatrick phase
@section Exact gradient evolution and finite path comparisons — definition

The following definition keeps each
new branch attached at a single endpoint.
A stationary path tree has finitely many edges of fixed finite lengths.
Choose a root state with law $\mu$ and run independent ordinary
heat-bath paths outwards along the edges. Reversibility permits an
edge to be read in either direction. A nonstationary tree is obtained
from a forward path whose initial density $h$ satisfies
$\log\norm h_\infty=o(n)$, and by making finitely many conditional
copies of portions at a shared single endpoint, using their
actual conditional laws. No new branch is conditioned on both of its
endpoints.
A test has a fixed finite list of times and a fixed polynomial bound
$n^M$.

[...]

@src https://github.com/openai/math/tree/main/preprints/Deterministic-quasipolynomial-time-mean-payoff-games-September-25-2026
@title Deterministic quasipolynomial-time mean-payoff games
@section From potential comparisons to a labelling problem — definition

The positive rational vectors $a,b$ are called masses.
A Max witness for $(A,D,a,b)$ is a subsolution
$x\in[A,u]$ with support $S_x=\{i:x_i>A_i\}$ and
$a(S_x)\le1$. It claims each $i$ with $x_i\ge u_i-P$.
A Min witness is a supersolution $y\in[A,u]$ with support
$S_y=\{i:y_i<u_i\}$ and $b(S_y)\le1$. It claims each $i$
with $y_i\le A_i+P$. A witness is relevant when it claims
at least one index.

@src https://github.com/openai/math/tree/main/preprints/Incompressible-Box-Transport-and-Finite-Computation-September-27-2026
@title Incompressible Box Transport and Finite Computation
@section History conventions and branch subdivision

**History conventions and branch subdivision**
The general box motions now let us choose a recorder and an observer
separately. We begin with the two frontier recorders in
Section [REF], which retain history in the
sense of Bennett [CITE]. Later we retain the distinct
neighboring-cell guards and persistent-mark tables needed by other
realizations. A full-domain inverse, not merely agreement along an
initialized run, is the criterion for sharing a compiler.
For these applications let $A$ be the work alphabet with distinguished
blank, $Q$ the states, $q_0$ the initial state, and $H\subseteq Q$
the halting states.

[...]

@src https://github.com/openai/math/tree/main/preprints/Integer-multiplication-below-n-log-n-September-23-2026
@title Integer multiplication below $n\log n$
@section Packed additions on grouped rectangles — definition

The only additional work is reading the group
descriptors and passing consecutive groups through the same local tapes.
Let $M,R\ge1$, $K\ge6$, $f\ge1$, $L=fK$, and $0\le\rho<K$.
Fix an ordered template of $t\ge3$ two-bit tags: $\mathtt{00}$ denotes
a spectator field, and $\mathtt{01},\mathtt{10},\mathtt{11}$ denote
$x,y,z$, respectively. Each chunk tag occurs exactly once. The template
is common to all $J\ge1$ groups of this input, but its length may vary
between inputs. Group $\nu$ has a positive row count $n_\nu$ and a
positive length $a_{\nu,h}$ at each spectator tag $h$; at a chunk tag
put $a_{\nu,h}=2^L$. Define
[EQ]
and require $M=\sum_{\nu=1}^J M_\nu$.

[...]

@src https://github.com/openai/math/tree/main/preprints/Maximal-Multipoint-Seshadri-Constants-in-Higher-Dimensions-October-5-2026
@title Maximal Multipoint Seshadri Constants in Higher Dimensions
@section Monomial spaces and finite jets — definition

Our aim is to obtain such surjections for $W=H^0(X,kL)$ with $m/k$
approaching $(V/r)^{1/n}$.
A graded support family in $\Z^n$ is a sequence of finite sets
$(S_k)_{k\geq1}$ such that
[EQ]
Empty sets are allowed. Equivalently,
$\M(S_k)\M(S_l)\subset\M(S_{k+l})$, where a product of spaces denotes the
span of their pairwise products.

@src https://github.com/openai/math/tree/main/preprints/Maximal-multipoint-Seshadri-constants-in-positive-characteristic-October-5-2026
@title Maximal multipoint Seshadri constants in positive characteristic
@section Leading terms and transfer of jets — definition

\]
Here and below, auxiliary existence statements about points on a torus
refer to $k$-points.
A family of finite sets $(S_N)_{N\geq1}$ in $\Z^d$ is graded if
[EQ]
A transformation $(S_N)\mapsto(T_N)$ has backward jet transfer
if, for every $N,r\geq1$ and $m\geq0$, separation of jets through order
$m$ by $M(T_N)$ at some $r$ distinct torus points implies the same
assertion for $M(S_N)$, possibly at a different tuple.

@src https://github.com/openai/math/tree/main/preprints/Ordinary-two-point-correlations-of-multiplicative-functions-September-24-2026
@title Ordinary two-point correlations of multiplicative functions
@section Forbidden paths and arithmetic savings — definition

At each $B$, all residue expectations below are on the finite product
probability space of [REF].
**The deleted vertices**
A specification consists of a path with distinct integer offsets
$z_0=0,z_1,\ldots,z_m$, where $1\le m\le L$ and
[EQ]
an extra prime $p\in\mathcal{S}$ dividing none of the $e_i$, and an
index $i_0\in\{1,\ldots,m\}$ such that
$p\mid z_m-z_{i_0-1}$. It qualifies at $x$ when
[EQ]
Its prime support $\Pi$ is the union of $\{p\}$ and the prime factors
of all its edge labels. Its cylinder is the set of starting
integers $x$ satisfying these qualification conditions.

[...]

@src https://github.com/openai/math/tree/main/preprints/Parity-lifts-and-bounded-treewidth-witnesses-for-Weisfeiler-Leman-equivalence-September-25-2026
@title Parity lifts and bounded-treewidth witnesses for Weisfeiler--Leman equivalence
@section WL refinement and homomorphism tests — definition

Write $\hom(F,X)$ for the number of homomorphisms from $F$ to $X$,
that is, vertex maps preserving adjacency.
The template $T=T_t$ has main vertices $[t]$ forming a clique.
For each $i<j$ and $\ell\in[t]\setminus\{i,j\}$, it has a helper
$h_{ij;\ell}$ adjacent precisely to $i,j,\ell$.

@src https://github.com/openai/math/tree/main/preprints/Parity-lifts-and-bounded-treewidth-witnesses-for-Weisfeiler-Leman-equivalence-September-25-2026
@title Parity lifts and bounded-treewidth witnesses for Weisfeiler--Leman equivalence
@section Choices and parity lifts — definition

Each labeled point denotes an arbitrary vertex of
its fiber, so an edge is present only when its indicated condition holds.
Write $\FF$ for the field with two elements.
For $b\in\FF^{V(T)}$, the graph $X_b$ has vertices
[EQ]
Vertices $(u,z)$ and $(v,w)$ are adjacent precisely when
$uv\in E(G)$ and $z(\tau(v))=w(\tau(u))$.
We compare $X_0$ and $X_\star:=X_{e_1}$, where
$e_1(a)=\ind{a=1}$.

@src https://github.com/openai/math/tree/main/preprints/Polynomial-vacuum-representations-and-bridge-mass-for-honeycomb-walks-September-26-2026
@title Polynomial vacuum representations and bridge mass for honeycomb walks
@section Planar and cylindrical setup

**Planar and cylindrical setup**
We begin with the positive path bounds that justify all later limits of finite cylinders. The same flux identity also verifies the critical normalization of the vertex weight.
Use the honeycomb lattice dual to the equilateral triangle tiling of side 1. Paths can begin/end at mid-edges ("ports"). A triangle visited has weight
[EQ]
Otherwise its weight is 1. Edges to/from terminal midpoints are traversed halfway; the paths counted are simple (in particular they cannot reverse immediately along an edge, nor repeat a lattice vertex (triangle)). Absolute SAW weights in what follows are products, without dividing out any partition function unless specified.

[...]

@src https://github.com/openai/math/tree/main/preprints/Power-law-violations-of-Yaus-nodal-upper-bound-September-23-2026
@title Power-law violations of Yau's nodal upper bound
@section Framework and the quantitative step — definition

Euclidean balls centered in $V$ with radii tending uniformly to
zero are consequently contained in $\Omega$.
A sign certificate for a continuous real function $u$ in
$\Omega$ is a finite family of pairs $(D_i^-,D_i^+)$ of congruent
closed parallel three-dimensional Euclidean disks such that:
[label= ( )]
each pair is the two ends of a straight closed cylinder
compactly contained in a Euclidean coordinate ball;
these coordinate balls are pairwise disjoint;
$u$ has strictly opposite signs on $D_i^-$ and $D_i^+$.
The size of the certificate is
$\sum_i\Hh_{\mathrm{Euc}}^3(D_i^+)$.

@src https://github.com/openai/math/tree/main/preprints/Quantitative-Superexponential-Bounds-for-van-der-Waerden-Numbers-September-23-2026
@title Quantitative Superexponential Bounds for van der Waerden Numbers
@section Counting global words and anchored local patterns — definition

[REF] will verify membership for every actual full
block with $h>h_0$ containing a position whose full label occurs more
than $k/M$ times in the whole progression.
Choose $x,y\in\T^D$ and $u,v\in\R^D$, and form
[EQ]
A position $z$ is regular if
$\rho(Y_{z,i})\ge\eta$ in every rotating coordinate; if there are
no rotating coordinates, every position is regular. Record
$L(X_z,Y_z)$ at a regular position and a dummy symbol $*$ otherwise.
The resulting word in $(\cL\cup\{*\})^h$ is eligible for
$h,t$ if it admits a realization satisfying all of the following:
[label= ( )]
At least $h/2$ positions are regular, and the full labels at
those positions are pairwise distinct.

[...]

@src https://github.com/openai/math/tree/main/preprints/Rationality-of-the-Canonical-Unramified-Arthur-Filtration-September-24-2026
@title Rationality of the Canonical Unramified Arthur Filtration
@section Geometric inputs and Frobenius conventions

**Geometric inputs and Frobenius conventions**
We use the constructible $\ell$-adic geometric Langlands framework. The
results recalled here apply under Assumption [REF]:
its first three conditions are those of [CITE], and its
fourth is the additional condition of [CITE].
All categories are $\E$-linear. A compact object means an object whose
Hom functor commutes with filtered colimits; compactness is stronger than
constructibility on an algebraic stack.

[...]

@src https://github.com/openai/math/tree/main/preprints/Sharp-mass-bounds-for-the-two-dimensional-O4-model-September-23-2026
@title Sharp mass bounds for the two-dimensional O(4) model
@section Relative comparison of the retained densities — definition

In the application,
[EQ]
with the fixed exponent $P_0$ chosen in the renormalization construction.
A label $\lambda$ consists of a finite site support $P_\lambda$, a
load $s_\lambda\ge1$, and a fixed nonempty inventory $J_\lambda$ of
bonds whose endpoints belong to $P_\lambda$. Its weight
$k_\lambda(q)$ is a bounded measurable function of $q|_{P_\lambda}$;
every eligibility indicator is included in this function. In
particular $k_\lambda(q)=0$ unless $J_\lambda\subset D(q)$.
The support contains every spin read by the function or by an
eligibility test, including a test asserting the absence of a flag.
A family is compatible when its supports are pairwise disjoint.

[...]

@src https://github.com/openai/math/tree/main/preprints/Sharp-mass-bounds-for-the-two-dimensional-O4-model-September-23-2026
@title Sharp mass bounds for the two-dimensional O(4) model
@section Preliminary mixing

**Preliminary mixing**
We first prove a lattice estimate whose length scale is less precise than the
natural continuum scale, but whose uniformity under weakening bonds will be
needed later. Spins take values in the unit sphere $S^3\subset\R^4$, identified
with the unit quaternions. The a priori measure is normalized Haar measure.

[TRUNCATED]

@src https://github.com/openai/math/tree/main/preprints/Symmetry-of-semialgebraic-bounded-domains-with-compact-quotient-September-24-2026
@title Symmetry of semialgebraic bounded domains with compact quotient
@section Boundary preparation and independent supports

**Boundary preparation and independent supports**
We now work in the setting furnished by Proposition [REF]:
$V\subset\C^N$ is irreducible of complex dimension $n\geq1$, and
$U\subset V_{\mathrm{reg}}$ is a domain. The purpose of this section is
to choose a boundary point with two simultaneous properties. Its normal
fibers have limits uniform in the tangential parameters, and it admits
enough global holomorphic supports to control all complex-normal directions.
Neither property is asserted for an arbitrary supported boundary point.
We use the elementary semialgebraic facts of cell decomposition, selection,
and generic real analyticity.

[...]

@src https://github.com/openai/math/tree/main/preprints/The-canonical-massive-continuum-limit-of-the-two-dimensional-O3-model-October-4-2026
@title The canonical massive continuum limit of the two-dimensional $O(3)$ model
@section A preliminary correlation length

**A preliminary correlation length**
The first input is a mixing estimate that is uniform when bonds are
weakened or deleted. Its exponential scale need not be sharp. The strict
inequality in the exponent below is, however, essential to the later
comparison of effective densities. We adapt the pinned-cell argument of
[CITE], retaining its current estimates and modifying the
rotation algebra for spins on $S^2$.
For a bounded local Lipschitz observable $F$ with finite support $A$, set
[EQ]
where the individual Lipschitz constant uses round distance on $S^2$.
Distances between supports are measured in the maximum norm, with the
periodic distance on a torus.

[...]

@src https://github.com/openai/math/tree/main/preprints/The-joint-Dickman-law-for-consecutive-integers-September-24-2026
@title The joint Dickman law for consecutive integers
@section Arithmetic preliminaries at an auxiliary log scale

**Arithmetic preliminaries at an auxiliary log scale**
This section supplies local asymptotic formulae and upper bounds for the
coefficient and residue weights used in the amplification. All limits in this
section are as $B\to\infty$. Constants may depend on explicitly fixed compact
scale ranges, on the finitely many smooth norms indicated below, and later on
the fixed regularity grid and its tolerance. They are uniform in the integer
variables and moduli in the stated ranges. The parameter $B$ will always be
held fixed when an inner limit in $x$ is taken elsewhere in the proof.
We use the notation $e(t)=\exp(2\pi i t)$.

[...]

@src https://github.com/openai/math/tree/main/preprints/The-joint-scaling-limit-of-critical-Ashkin-Teller-currents-September-25-2026
@title The joint scaling limit of critical Ashkin--Teller currents
@section The model and the limiting objects — definition

In particular the complementary loops of
$\TVS{2\lambda}{2\lambda}$ have law $\CLE_4$.
For a zero-boundary GFF $f$ in a Jordan domain $O$, define
$\mathcal{F}_a(f,O)$ recursively as follows.
Expose $\TVS{2\lambda}{2\lambda}(f)$. In every complementary
component $V$, write its label as $\xi\,2\lambda$,
$\xi\in\{-1,1\}$, and let $f_V$ be the zero-boundary remainder.
If $\xi=1$, retain
$\TVS{2\lambda}{2a-2\lambda}(f_V)$ as one cluster. If $\xi=-1$,
retain $\TVS{(2a-2\lambda)}{2\lambda}(f_V)$.
The retained set includes its outer boundary $\partial V$.

[...]

@src https://github.com/openai/math/tree/main/preprints/The-joint-scaling-limit-of-critical-Ashkin-Teller-currents-September-25-2026
@title The joint scaling limit of critical Ashkin--Teller currents
@section Conventions and elementary corrections in the inputs

**Conventions and elementary corrections in the inputs**
The proof uses the versioned statements of [CITE] specified
in the text. We record elementary corrections needed when reading their
proofs literally, and give the conformal estimate used in
[REF]. These are our reconciliations of the indicated
formulas, not an author-issued erratum.

[TRUNCATED]

@src https://github.com/openai/math/tree/main/preprints/The-Kakeya-maximal-conjecture-in-three-dimensions-September-23-2026
@title The Kakeya maximal conjecture in three dimensions
@section Weighted configurations and critical exponents — convention

Under a
polynomial restriction the cutoff must lie below that smaller fraction,
and its polynomial loss in the active-weight bound must be retained,
as in [REF].
Each argument is first made for a finite list of scales, widths, partitions
and strictly positive tolerances. Subsequences may be selected so that its
bounded logarithmic parameters converge. Only after its fixed-parameter
estimates are established are the test lists increased or tolerances sent
to zero, with the resolution chosen large enough for every earlier error.
If a selection is defined by perturbing a parameter, its error tolerance is
sent to zero faster than that fixed perturbation before the latter is
allowed to shrink.

[...]

@src https://github.com/openai/math/tree/main/preprints/The-Kakeya-maximal-conjecture-in-three-dimensions-September-23-2026
@title The Kakeya maximal conjecture in three dimensions
@section Weighted configurations and critical exponents — convention

Both the old and
new support grids admit bounded-overlap coverings by the other grid, and
plank tests transfer after bounded enlargement and a fixed finite covering.
For positive quantities on a sequence with $N\to\infty$, write
[EQ]
A factor $N^{o(1)}$ has logarithm $o(\log N)$, uniformly over the objects
being compared in that statement. Subsequence selection is allowed.

[TRUNCATED]

@src https://github.com/openai/math/tree/main/preprints/The-low-temperature-Sherrington-Kirkpatrick-fluctuation-scale-September-24-2026
@title The low-temperature Sherrington--Kirkpatrick fluctuation scale
@section The one-site comparison and susceptibility calibration — definition

Coincident-label contributions retain
the terminal and diagonal conventions of [REF].
A test of degree at most $N$ is a finite linear combination of
products of centered boundary overlaps and their conditional
projections, with these specifications. Increase $N$, if necessary,
so that it also bounds the number of leaves after the fresh-replica
representation of the projections. All low splits are $*$,
except for at most one initial edge at a cut $i$.
The distinguished target $a$ is unique in its block among the
observed test leaves. Its dependence is a power of
[EQ]
times at most one incoming boundary edge from an outside leaf.
Other factors do not involve $a$.

[...]

@src https://github.com/openai/math/tree/main/preprints/The-PCP-for-PPAD-conjecture-a-quasilinear-reduction-September-25-2026
@title The PCP-for-PPAD conjecture: a quasilinear reduction
@section Encoded paths and finite local displacement procedures — definition

Any scalar-quantization offset may also be fixed throughout the following
contract and accuracy analysis.
An oracle access implementation satisfies parts (a)--(c) below
and the following operational condition. At its declared oracle level,
each supplied bit or decision routine uses a bounded tree of completed
Boolean answers, apart from public index computations. Every input,
including an input outside a correctness promise, gives Boolean answers
or public defaults. After its requested accuracies are fixed, the
oracle tree and its symbolic query roles are bounded independently of
$m$ and remain fixed under refinement of threshold-offset grids.

[...]

@src https://github.com/openai/math/tree/main/preprints/Tree-Constructions-for-the-l1-Distortion-of-Binary-Edit-Distance-September-27-2026
@title Tree Constructions for the $\ell_1$ Distortion of Binary Edit Distance
@section A tree of circle phases — definition

\]
Call a shift $t$ eligible if $|t|_{\T}\geq\epsilon$.
At a leaf, $t\in\T$ is good if $|t|_{\T}\geq\epsilon$.
At an internal node $v$, it is good if, for every integer $a$ modulo
$P_v$, at least $\delta m$ children $vi$ have
$t+a c_{vi}/P_v$ good at $vi$.

@src https://github.com/openai/math/tree/main/preprints/Universality-of-critical-quench-autocorrelations-in-the-Sherrington-Kirkpatrick-model-October-5-2026
@title Universality of critical quench autocorrelations in the Sherrington--Kirkpatrick model
@section Smooth truncation of clock histories — definition

Its law on a time
interval $I$ from $x$ is denoted by $\mathsf P_x^I$.
A checked history is one of the following subprobabilities, with initial
probability either $\mu$ or the uniform cube probability:
[(i)] an entire query path with every survival factor in its legs;
[(ii)] the prefix through a specified first failing check $F$, with all
preceding survival factors and the factor $1-w_F$ at that check.
The check order is the one following [REF]; the
choice of $F$ and all tree shapes is fixed independently of the path and
of $e$.

[...]
