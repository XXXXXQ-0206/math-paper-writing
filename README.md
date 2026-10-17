# math-paper-writing

An agent skill for writing mathematics papers. The skill body is a corpus
clustered by writing module, drawn from **729 manuscripts** in
[openai/math](https://github.com/openai/math) covering all **17 mathematical
disciplines** in that collection. The LaTeX source is extracted, figures,
equations, citations and the bibliography are stripped, and the prose is
then selected, merged and condensed by hand before being grouped by module.

Mathematics papers weight things differently from experimental fields:
**the precise statement of the main theorem, with every hypothesis spelled
out, comes first**; the literature review lives inside the Introduction; and
there is no separate Related Work section.

## Contents

```
math-paper-writing/
├── SKILL.md                 # generation order + retrieval protocol + hard rules
├── agents/openai.yaml       # Codex desktop UI metadata
├── references/              # six writing modules (2.1 MB / 2686 fragments)
│   ├── 01-abstract.md
│   ├── 02-introduction.md
│   ├── 03-preliminaries.md
│   ├── 04-statements.md
│   ├── 05-proof.md
│   └── 06-conclusion.md
├── papers.tsv               # the 729 selections: discipline, result, title, directory
└── scripts/                 # reproducible pipeline + validators
```

Fragments carry shallow labels:

```
@src https://github.com/openai/math/tree/main/preprints/<dir>
@title Quenched $\mathrm{SLE}_3$ limits for general weak random-bond Ising models
@section Uniform bounds for planar polynomial limit cycles — theorem
```

`[EQ]` marks an elided display equation, `[CITE]` a citation, `[REF]` a
cross-reference, and `[...]` a passage cut from within the fragment. Inline math is
preserved verbatim. The suffix on `@section` (`— theorem`,
`— definition`, ...) says what kind of result the fragment states.

## Install

Drop the whole directory into a skill root, keeping the directory name
equal to the skill name:

```
~/.codex/skills/math-paper-writing/        # Codex
~/.dsh/skills/math-paper-writing/          # DSH (DeepSeek Harness)
```

## Selection

729 manuscripts across all 17 disciplines: algebraic and complex geometry
(102), probability and statistical mechanics (69), mathematical physics
(59), number theory (57), theoretical computer science (52), algebra (41),
combinatorics (38), differential geometry (38), convex and metric geometry
(31), partial differential equations (29), group theory (24), topology (21),
operator algebras (20), dynamical systems and ergodic theory (18),
functional analysis (12), real and complex analysis (11), mathematical
logic (8).

The repository holds 746 manuscript directories. The 17 not represented are
all earlier drafts of the same result family whose updated version is in
the corpus.

## How the corpus was built

Four stages, all scripts under `scripts/`:

1. **Mechanical extraction** (`select_all.cjs` to `build_full.cjs`):
   expand each manuscript's root file through its `\input` chain, drop
   figure and bibliography environments, replace display equations with
   `[EQ]`, citations with `[CITE]`, cross-references with `[REF]`,
   preserving inline math. Yields 34.2 MB.
2. **Mechanical pre-pass** (`condense.cjs` to `curate.cjs`): drop
   boilerplate repeated across manuscripts, exact and near duplicates, then
   rank each manuscript's fragments against a per-module budget. Yields 4.8 MB.
3. **Hand curation** (a team of curators; spec in `scripts/CURATOR-GUIDE.md`):
   per discipline, decide fragment by fragment what is worth keeping, what
   should be merged into one exemplar, and what should be cut. Yields 2.1 MB.
4. **Validation and assembly** (`validate.cjs`, `verify_provenance.cjs`,
   `assemble.cjs`).

Overall retention is about 6% (34.2 MB to 2.1 MB); every cut was judged by
whether the passage helps someone write a mathematics paper.

## Verification

- `validate.cjs` - label format, fragment length, discipline coverage,
  module budgets.
- `verify_provenance.cjs` - **per-segment provenance**. Each fragment is split
  on `[...]` and every resulting segment must be a contiguous substring of
  the manuscript named in its `@src`. This catches invented prose and
  mislabelled bodies, which `validate.cjs` cannot see. Current result: 2686
  fragments, 3696 segments, **0 unverifiable**.
- Coverage: 729/746 manuscripts; all 17 absent ones have a superseding
  version in the corpus.

## Rebuilding the corpus

Prerequisites: the repository sources at `_repo/preprints/` and the
catalogue `overview.tex` at the repository root.

```bash
# 1. sparse fetch (LaTeX sources only, ~145 MB)
git clone --filter=blob:none --no-checkout --depth 1 https://github.com/openai/math.git _repo
cd _repo && git sparse-checkout init --no-cone
git sparse-checkout set 'preprints/**/*.tex' 'preprints/**/*.bib' 'preprints/**/*.md' \
                        'preprints/**/*.json' 'preprints/**/*.py' 'preprints/**/*.txt'
git checkout
cd ..
curl -sSL -o overview.tex https://raw.githubusercontent.com/openai/math/main/overview.tex

# 2. extract
node scripts/select_all.cjs && node scripts/classify_uncatalogued.cjs && node scripts/build_full.cjs
node scripts/split_shards.cjs && node scripts/run_pipeline.cjs
# 3. hand curation (see scripts/CURATOR-GUIDE.md)
# 4. validate and assemble
node scripts/validate.cjs final/<discipline> curated/<discipline>
node scripts/verify_provenance.cjs
node scripts/assemble.cjs final references
```

Stages 1, 2 and 4 are deterministic. Stage 3 is human judgement and is not
reproducible as a script.


## See also

Ready-to-use LaTeX templates for the conventions this corpus describes: [math-paper-templates](https://github.com/XXXXXXQ-0206/math-paper-templates).

## Provenance and licence

This repository is a **derivative work** of [openai/math](https://github.com/openai/math).
The prose under `references/` is taken from the LaTeX sources of that
repository's manuscripts and modified as follows: LaTeX markup removed,
mathematics reduced to inline math, `[EQ]`, `[CITE]` and `[REF]`,
figures and bibliographies dropped, and the prose selected, merged and
condensed per manuscript, then regrouped by writing module and discipline.

The upstream repository is licensed under the **Apache License 2.0**, so this
repository is released under the same licence, with attribution preserved —
see [LICENSE](LICENSE) and [NOTICE](NOTICE). The `@src` label on every
fragment and `papers.tsv` give the upstream manuscript for each piece of text.

## Language

- English: this file
- 中文: README.zh-CN.md
