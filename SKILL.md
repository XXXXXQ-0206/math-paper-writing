---
name: math-paper-writing
description: "写纯数学与应用数学论文时使用。"
whenToUse: "写数学论文（数论、代数几何、分析、PDE、组合、概率、逻辑、拓扑、算子代数等）时"
---

# 数学论文写作

正文按模块生成：Abstract、Introduction、Preliminaries、Statements、Proof、Conclusion。数学论文的重心与实验学科相反——**主定理的精确陈述是第一位的**，文献评述写在 Introduction 内，没有独立的 Related Work 章节。

## 语料怎么取用

语料按模块放在 `references/`，取自 729 篇手稿、覆盖 17 个数学分支，并按分支分组。每个片段前面有三行浅标签：

```
@src https://github.com/openai/math/tree/main/preprints/<dir>
@title Quenched $\mathrm{SLE}_3$ limits for general weak random-bond Ising models
@section Uniform bounds for planar polynomial limit cycles — theorem
```

正文中 `[EQ]` 是被省略的独立公式，`[CITE]` 是引用，`[REF]` 是交叉引用，`[...]` 表示该片段中省略了一段原文；行内公式保留 LaTeX 原样（`$E/\Q$`、`$\operatorname{GL}_2(\mathbb{F}_2)$`）。`@section` 结尾的 `— theorem` / `— definition` / `— proposition` 标出该片段陈述的是哪类结果。

**先检索定位，再读局部，不要整文件读入。** 下表检索式已按实际命中量校准：

| 目标 | 模块 | 检索式（括号内为命中数） |
|---|---|---|
| 摘要句式 | 01-abstract | `^We prove`(231) `^We give\|^We construct\|^We establish\|^We show`(72) |
| 文献定位与问题 | 02-introduction | `conjecture`(284) `question`(149) `generaliz\|extends\|In contrast\|Unlike`(31) |
| 约定与记号 | 03-preliminaries | `Throughout\|We write\|We denote\|Convention`(64) `^Let \|^For a `(61) |
| 定理陈述范式 | 04-statements | `Let .* be`(266) `such that`(191) `Suppose`(126) `Assume`(45) |
| 证明过渡与结构 | 05-proof | `We first\|We now\|It remains\|Combining`(222) |
| 推论与未决问题 | 06-conclusion | `Corollary\|Consequently`(11) `In particular`(7) |

命中后读该处前后 5–8 行；必要时用 `@src` 回原文核对上下文。语料按 `## <分支名>` 分组，可先按分支缩小范围再检索。

## 生成顺序

1. **事实清点**：向用户取五类输入——主定理及其**精确假设**、证明策略与关键引理、**与已有工作的关系**、目标（预印本 / 期刊 / 篇幅）、依赖的既有结果。假设与文献缺失时先追问；不要用"推广了已有结果"这类空话填充。其余缺失信息留 `[PROOF]` / `[GAP]` / `[CITE: 主题]` 占位，不得编造。
2. **主定理定稿**：把定理连同全部假设、记号约定写成可独立阅读的一段，作为后续所有章节的基准。这是数学论文的锚点，先定它。
3. **Preliminaries**：只列后文真正用到的定义、记号与惯例；同时判定是否需要单列。
4. **Statements**：定理、命题、引理按"先陈述后证明"编排，关键引理标注用途。
5. **Proof**：按证明的真实结构分节，每节开头说明该节要证什么、用哪些前置结果。
6. **Introduction**：回填主定理陈述、证明策略概览、与文献的差异。
7. **Conclusion**：推论、限制与未决问题。
8. **Abstract** 最后生成，只做全文提炼。

## 硬规则

- Abstract 必须最后生成，不引入正文之外的新信息；不写引用与交叉引用。
- **主定理的假设必须完整**：每一条都要写出，不能靠"在通常假设下"含混带过；定理中出现的每个记号都必须在 Preliminaries 或定理内定义。
- **不编造**定理、假设、常数、估计、引用。缺失即留占位并标注，不得用貌似合理的数值或"标准结果"填充。
- 证明不得用 `it is easy to see` / `clearly` / `standard` 掩盖真实缺口；写不出的一步留 `[PROOF]` 并说明需要什么。
- 不生成参考文献条目、图表、致谢；引用写 `[CITE: 主题]`，公式写 `[EQ]`，交叉引用写 `[REF]`。
- 记号全文一致：同一对象不换符号，同一符号不指两物；首次出现即定义。
- Preliminaries 仅在存在新记号、新定义或非标准约定时单列，否则并入正文首节。
- 目标与篇幅：用户未声明时由你自行决定，并在文首注明假设（类型、正文页数、目标字数）。
- 数学论文通常无独立 Conclusion；若用户需要则写推论与未决问题，不重复摘要。
