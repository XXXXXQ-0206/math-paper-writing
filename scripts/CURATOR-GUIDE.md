# Curator's guide

You are curating one slice of a style corpus for the `math-paper-writing` skill.
The corpus teaches an agent how mathematicians actually write; it is not a
reading list and not a literature database.

## Your input

```
curated/<discipline>/0X-*.md      mechanical first pass (dedup + per-manuscript budget)
```

Every fragment looks like this:

```
@src https://github.com/openai/math/tree/main/preprints/<dir>
@title Exact mass asymptotics for the two-dimensional O(4) model
@section Local behaviour — theorem

<prose, with $inline math$ preserved, [EQ] for a display equation,
 [CITE] for a citation, [REF] for a cross-reference>
```

The `— theorem` / `— definition` / `— lemma` suffix on `@section` says what kind of
result the fragment states. Fragments without such a suffix are prose
from the body of an argument.

## Your output

```
final/<discipline>/01-abstract.md ... 06-conclusion.md
```

Same six module files, same three-line label format, same fragment
syntax. Nothing else. Do not create other files, do not touch other
disciplines' directories.

## What to do — the four judgements

The mechanical pass already removed boilerplate and exact duplicates.
What it cannot do is judge mathematical writing. That is your job.

**1. SELECT.** Keep a fragment only if it would help someone write a
paper. Drop:
- fragments that are unreadable out of context — a paragraph that opens
  "By the previous lemma we obtain" and never says what was obtained;
- fragments that are mostly `[EQ]` and `[REF]` with little prose;
- fragments that state a result but never name the objects in it;
- near-identical fragments from sibling manuscripts of the same result
  family — keep the clearest one.

**2. MERGE.** Several fragments from the same manuscript often belong
together: the setup sentence, then the theorem, then a remark. Emit them
as one fragment with one label. Use the section label of the most
specific part. This is where most of the size reduction comes from, and
it produces a *better* exemplar than the pieces separately.

**3. CONDENSE.** Within a kept fragment, cut:
- enumeration of cases that the reader cannot follow without the rest of
  the paper;
- repeated restatements of the same hypothesis;
- a proof's bookkeeping once the idea has been conveyed.
Keep the opening sentence, the statement, and the transition sentences —
those are what the corpus is for. Mark a deliberate cut with `[...]`.

**4. LABEL.** Fix any label that is vague. `@section Statement of results`
is more useful than `@section Section 2`. Keep the `— theorem` suffix
convention. Never leave LaTeX in a label: write `Kahler`, not
`K\"ahler`.

## Budget

Aim for **35–50 % of your input size**. Do not go below 30 %: the corpus
must still show how a full paper reads. Do not exceed 55 %: the point is
to cut.

Roughly, per manuscript per module, one well-chosen fragment of 400–900
bytes is right. A manuscript that contributes nothing worth keeping in a
module is fine — coverage matters across the discipline, not in every
single file.

## Hard rules

- **Never invent text.** Every sentence you emit must come from the
  input. You may cut, merge and reorder; you may not write new prose.
- **Keep the math.** Do not rewrite `$...$`, `[EQ]`, `[CITE]` or `[REF]`.
  They are placeholders the reader of the corpus understands.
- **Keep the labels truthful.** `@src` and `@title` must still name the
  manuscript the text came from.
- **Coverage.** Every manuscript that appears in your input should still
  appear somewhere in your output unless it contributed nothing usable.
  Coverage is checked.

## Check your work

```
node tools/validate.cjs final/<discipline> curated/<discipline> --budget=<KB>
```

It reports fragment count, manuscript count, size, and any problem:
LaTeX left in a label, a body under 80 bytes, a missing `@src`, or a
manuscript that disappeared. Fix everything it reports before you finish.

Report back: per discipline, input KB → output KB, fragments in → out,
and the manuscripts you dropped with a one-line reason.
