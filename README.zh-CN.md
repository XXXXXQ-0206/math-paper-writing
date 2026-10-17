# math-paper-writing

给 AI 代理用的数学论文写作用 skill。技能本体是一份按写作模块分簇的语料：取自 [openai/math](https://github.com/openai/math) 的 **729 篇手稿**，覆盖仓库全部 **17 个数学分支**，抽取 LaTeX 源码正文，去掉图表、公式、引用与参考文献，再经逐条精选、合并与精简后按写作模块归堆。

数学论文与实验学科的写作重心不同：**主定理的精确陈述与假设完整性是第一位的**，文献评述写在 Introduction 内，没有独立的 Related Work 章节。

## 内容

```
math-paper-writing/
├── SKILL.md                 # 生成流程 + 检索协议 + 硬规则
├── agents/openai.yaml       # Codex 桌面端界面元数据
├── references/              # 六个写作模块的语料（2.1 MB / 2686 片段）
│   ├── 01-abstract.md
│   ├── 02-introduction.md
│   ├── 03-preliminaries.md
│   ├── 04-statements.md
│   ├── 05-proof.md
│   └── 06-conclusion.md
├── papers.tsv               # 729 篇选目：分支、结果编号、标题、目录
└── scripts/                 # 可复现流水线 + 校验工具
```

语料片段带浅标签，便于检索定位：

```
@src https://github.com/openai/math/tree/main/preprints/<dir>
@title Quenched $\mathrm{SLE}_3$ limits for general weak random-bond Ising models
@section Uniform bounds for planar polynomial limit cycles — theorem
```

正文中 `[EQ]` 表示被省略的独立公式，`[CITE]` 表示引用，`[REF]` 表示交叉引用，`[...]` 表示该片段中省略了一段原文；行内公式保留 LaTeX 原样。`@section` 结尾的 `— theorem` / `— definition` 标出该片段陈述的结果类型。

## 安装

把整个目录放进技能根目录，目录名与技能名保持一致：

```
~/.codex/skills/math-paper-writing/        # Codex
~/.dsh/skills/math-paper-writing/          # DSH（DeepSeek Harness）
```

## 选目范围

729 篇，覆盖仓库 17 个分支：

代数与复几何（102）、概率与统计力学（69）、数学物理（59）、数论（57）、理论计算机科学（52）、代数（41）、组合（38）、微分几何（38）、凸与度量几何（31）、偏微分方程（29）、群论（24）、拓扑（21）、算子代数（20）、动力系统与遍历论（18）、泛函分析（12）、实与复分析（11）、数理逻辑（8）。

仓库共 746 个手稿目录；未收录的 17 个均为同一结果族的早期草稿，其更新版本已在语料中。

## 语料是怎么做出来的

分四步，全部脚本在 `scripts/`：

1. **机械抽取**（`select_all.cjs` → `build_full.cjs`）：从每篇手稿的根文件递归展开 `\input`，去掉图表与参考文献环境，把独立公式替换为 `[EQ]`、引用为 `[CITE]`、交叉引用为 `[REF]`，行内公式原样保留。得到 34.2 MB 原始语料。
2. **机械初筛**（`condense.cjs` → `curate.cjs`）：去掉跨手稿重复的样板段落、完全重复与近似重复片段，并按每篇手稿每模块的预算排序取优。得到 4.8 MB。
3. **人工精选**（子智能体队伍，规范见 `scripts/CURATOR-GUIDE.md`）：按分支分工，逐条判断——哪些片段值得作为写作范例、哪些应合并成一段、哪些内部内容该删。得到 2.1 MB。
4. **校验与装配**（`validate.cjs`、`verify_provenance.cjs`、`assemble.cjs`）。

最终保留率约 6%（34.2 MB → 2.1 MB），每一步的取舍都以"是否有助于写出一篇数学论文"为准。

## 校验

- `validate.cjs`：标签格式、片段长度、分支覆盖率、模块预算。
- `verify_provenance.cjs`：**逐段核对**——把每个片段按 `[...]` 切开，确认每一段都是其 `@src` 所指手稿原文的连续子串。这能查出 `validate.cjs` 看不见的"编造文本"与"张冠李戴"。当前结果：2686 个片段、3696 个文本段，**0 段无法溯源**。
- 覆盖率：729/746 手稿，缺的 17 篇均有同族更新版本在语料中。

## 重建语料

前置：仓库源码放在 `_repo/preprints/`，目录概览 `overview.tex` 放在仓库根目录。

```bash
# 1. 稀疏拉取（只需 LaTeX 源码，约 145 MB）
git clone --filter=blob:none --no-checkout --depth 1 https://github.com/openai/math.git _repo
cd _repo && git sparse-checkout init --no-cone
git sparse-checkout set 'preprints/**/*.tex' 'preprints/**/*.bib' 'preprints/**/*.md' \
                        'preprints/**/*.json' 'preprints/**/*.py' 'preprints/**/*.txt'
git checkout
cd ..
curl -sSL -o overview.tex https://raw.githubusercontent.com/openai/math/main/overview.tex

# 2. 抽取
node scripts/select_all.cjs && node scripts/classify_uncatalogued.cjs && node scripts/build_full.cjs
node scripts/split_shards.cjs && node scripts/run_pipeline.cjs
# 3. 人工精选（按 scripts/CURATOR-GUIDE.md 分工进行）
# 4. 校验与装配
node scripts/validate.cjs final/<分支> curated/<分支>
node scripts/verify_provenance.cjs
node scripts/assemble.cjs final references
```

第 1、2、4 步是确定性的；第 3 步是人工判断，不可复现为脚本。


## 相关仓库

与本语料所描述规范配套的 LaTeX 模板：[math-paper-templates](https://github.com/XXXXXQ-0206/math-paper-templates)。

## 来源与许可

本仓库是 [openai/math](https://github.com/openai/math) 的**衍生作品**。`references/` 下的正文取自该仓库手稿的 LaTeX 源码，做了如下修改：去除 LaTeX 标记，把公式压缩为行内数学、`[EQ]`、`[CITE]`、`[REF]`，删除图表与参考文献，按手稿精选、合并、精简，并按写作模块与数学分支重排。

上游以 **Apache License 2.0** 授权，本仓库因此同样以 Apache-2.0 发布，并保留署名——详见 [LICENSE](LICENSE) 与 [NOTICE](NOTICE)。每个片段的 `@src` 标签与 `papers.tsv` 均可追溯到上游手稿。

## 语言

- 中文：本文件
- English: README.md
