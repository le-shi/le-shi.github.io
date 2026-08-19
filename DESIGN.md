---
name: Le Shi System Guide / OINK
description: "基于 OINK v0.4.1 的原生 Hugo 工程文档系统。"
colors:
  canvas-light: "#f1f4f8"
  paper-light: "#ffffff"
  ink-light: "#16222e"
  soft-light: "#3d4e61"
  line-light: "rgba(48, 74, 105, 0.14)"
  blue-light: "#245f94"
  copper-light: "#b4762e"
  canvas-dark: "#0b1119"
  paper-dark: "#121c29"
  ink-dark: "#e8eef6"
  soft-dark: "#b6c2d2"
  line-dark: "rgba(148, 176, 210, 0.16)"
  blue-dark: "#5da2dd"
  copper-dark: "#e0a35c"
  action-blue: "#2f6793"
  action-blue-hover: "#275a82"
  terminal: "#0a0f16"
  terminal-ink: "#c9d6e8"
  logo-charcoal: "#17191f"
  logo-orange: "#f09a38"
typography:
  display:
    fontFamily: "Chakra Petch, -apple-system, BlinkMacSystemFont, PingFang SC, Microsoft YaHei, Segoe UI, sans-serif"
    fontSize: "clamp(2.7rem, 5.4vw, 4.8rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "0"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, PingFang SC, Microsoft YaHei, Segoe UI, sans-serif"
    fontSize: "clamp(1.9rem, 3.8vw, 2.85rem)"
    fontWeight: 900
    lineHeight: 1.16
    letterSpacing: "0"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, PingFang SC, Microsoft YaHei, Segoe UI, sans-serif"
    fontSize: "1.18rem"
    fontWeight: 800
    lineHeight: 1.3
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Segoe UI, Roboto, Noto Sans SC, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  meta:
    fontFamily: "IBM Plex Mono, Cascadia Code, Noto Sans Mono CJK SC, monospace"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.16em"
  code:
    fontFamily: "IBM Plex Mono, Cascadia Code, Noto Sans Mono CJK SC, monospace"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.9
rounded:
  sm: "8px"
  nav: "10px"
  md: "12px"
  feature: "18px"
  pill: "50rem"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  section: "clamp(64px, 7vw, 104px)"
components:
  button-primary:
    backgroundColor: "{colors.action-blue}"
    textColor: "{colors.paper-light}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    height: "44px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-light}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    height: "44px"
  landing-card:
    backgroundColor: "{colors.paper-light}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.md}"
    padding: "clamp(22px, 3vw, 30px)"
  search-trigger:
    backgroundColor: "transparent"
    textColor: "{colors.soft-light}"
    rounded: "{rounded.sm}"
    padding: "0 8px 0 10px"
    width: "190px"
    height: "34px"
  sidebar-item:
    backgroundColor: "transparent"
    textColor: "{colors.soft-light}"
    rounded: "{rounded.nav}"
    padding: "8px"
  page-action:
    backgroundColor: "{colors.paper-light}"
    textColor: "{colors.soft-light}"
    rounded: "0.5rem"
    padding: "0.3rem 0.6rem"
  code-block:
    backgroundColor: "{colors.terminal}"
    textColor: "{colors.terminal-ink}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
    padding: "clamp(20px, 4vw, 34px)"
---

# Design System: Le Shi System Guide / OINK

## Overview

**Creative North Star: "原生工程手册"**

本站是 OINK `v0.4.1` 原生技术文档系统在 Le Shi 知识库上的实际落地：Hugo 负责静态生成，OINK 负责首页区块、文档壳层、离线搜索、主题切换、页面操作、打印和响应式阅读。视觉权威只来自 OINK 模块的 `technical` 排版预设、编译后的主题 CSS、当前 Hugo 配置与渲染结果。

整体像一份经过整理的工程现场手册：浅色模式以冷蓝灰纸面和细网格营造精密感，钢蓝承担交互与链接，铜色标记来源、分类和技术元数据；深色模式把同一语义映射到深海军蓝表面。首页允许更强的品牌表达，文档页则退回稳定、清晰、可长时间阅读的三栏工作区。

**Key Characteristics:**

- OINK 原生首页区块与技术文档壳层，不维护平行的自定义 UI 系统。
- 冷蓝灰背景、钢蓝交互、铜色元数据组成稳定的双主题品牌语法。
- Chakra Petch 只承担品牌展示，系统无衬线字体负责中文正文，IBM Plex Mono 负责代码与元数据。
- 8-18px 的克制圆角、细边框与轻量阴影建立层次。
- 桌面三栏阅读、可折叠侧栏、页内目录、离线搜索与移动端抽屉共同服务长文档。

## Colors

颜色系统以工程蓝为主、铜色为识别点，并通过成对的浅色与深色语义变量保持主题一致性。

### Primary

- **Steel Documentation Blue:** 用于链接、当前导航、图标、焦点与主要交互；首页主按钮采用更实的 action blue 以保证白字对比。

### Secondary

- **Instrument Copper:** 用于品牌字标渐变、区块眉题、元数据、焦点轮廓和细小状态标记。它是稀疏的技术标注色，不是大面积背景色。

### Neutral

- **Blueprint Canvas / Paper:** 浅色主题以冷灰蓝画布承托白色卡片和浮层；深色主题以海军蓝画布承托略亮的抬升表面。
- **Technical Ink / Soft Copy:** 高对比文字与次级说明保持明确层级，正文不依赖纯黑纯白制造生硬反差。
- **Quiet Line:** 低透明度蓝灰边框定义卡片、搜索、侧栏和代码容器。
- **Terminal Plane:** 代码和命令示例固定使用近黑蓝底与冷白蓝文字，在两种主题中保持终端语义。

**The Blue Does Work Rule.** 钢蓝只用于可操作、可跳转、当前状态或信息图标；普通装饰不抢占交互颜色。

**The Copper Annotates Rule.** 铜色负责品牌与技术注释，不与主按钮争夺行动优先级。

**The Paired Theme Rule.** 新增颜色必须同时考虑浅色和深色语义，不得只在一个主题中成立。

## Typography

- **Display Font:** Chakra Petch，回退到站点系统无衬线栈。
- **Body Font:** 系统 UI 无衬线栈，优先适配 `PingFang SC`、`Microsoft YaHei` 与 `Noto Sans SC`。
- **Meta / Code Font:** IBM Plex Mono，回退到 Cascadia Code 与中文等宽字体。

**Character:** 展示字体提供精密、略带工业感的技术品牌气质；正文使用熟悉的系统字体保证中文密集阅读；等宽字体把代码、区块眉题、文件名与操作状态从正文中清晰分离。

### Hierarchy

- **Display:** 首页主标题与品牌字标，宽屏可到 `4.8rem`，保持紧凑但不压缩字距。
- **Headline:** 首页区块标题与主要内容分区，粗重、直接、保持中文可读性。
- **Title:** 首页卡片与原则项标题，以 `1.18rem` 和高字重形成紧凑信息块。
- **Body:** 默认 `1rem / 1.7`，服务 README 转换后的长文本、列表和说明。
- **Meta:** 小号等宽大写文本承担分类、文件、技术标签与操作提示。
- **Code:** 等宽字体配合更宽松行高，优先保证命令复制和多语言代码扫描。

**The Three-Voice Rule.** Chakra Petch 用于品牌展示，系统无衬线用于内容，IBM Plex Mono 用于机器语义；不要把三种声音混在同一文本层级。

## Layout

首页内容容器最大宽度为 `1280px`，桌面左右内边距 `28px`，移动端降为 `14px`。Hero 文案宽度约 `660px`，各区块使用 `clamp(64px, 7vw, 104px)` 的纵向节奏；卡片网格在桌面为三列，`900px` 以下转为两列，`560px` 以下单列。当前首页没有独立媒体图，重点始终是标题、说明、主行动和分段内容。

文档页采用 OINK 原生三栏壳层：桌面左侧导航默认约 `286px`，中间正文由 `reading_width: wide` 放宽，右侧保留页内目录。侧栏可折叠和拖动；移动端隐藏两侧栏，顶部保留品牌、搜索、主题、GitHub 与菜单入口，正文恢复单列。布局扩展应使用 Hugo 菜单、首页数据区块和 OINK 配置，而不是复制一套独立导航。

## Elevation & Depth

系统采用轻量混合层次：大部分结构由画布、纸面和细边框建立，阴影只强化悬浮卡片、下拉菜单、搜索面板和移动抽屉。首页还使用低透明网格与克制的径向光晕增加空间感，但正文区域保持安静。

### Shadow Vocabulary

- **Brand Low:** `0 2px 10px rgba(23, 42, 66, 0.08)`，用于滚动后的顶部栏等轻微分离。
- **Brand Medium:** `0 12px 34px rgba(23, 42, 66, 0.12)`，用于卡片悬浮和菜单；深色主题替换为更深的环境阴影。
- **Landing Feature:** `0 26px 70px rgba(1, 6, 14, 0.26)`，仅用于首页强展示容器；深色主题提高不透明度。
- **Code Low:** `0 1px 2px rgba(0, 0, 0, 0.06)`，让代码容器从正文纸面轻微抬起。

**The Layer Before Lift Rule.** 先用语义表面和边框建立层次，只有可悬浮、可展开或需从页面分离的组件才增加阴影。

## Shapes

OINK 的形状语言是温和的工程圆角。主按钮、搜索和图标控件使用 `8px`；导航行常用 `10px`；卡片、代码与内容容器使用 `12px`；首页重点展示面板可到 `18px`。胶囊形仅用于真正的状态、筛选或短标签。静态 Logo 使用 `14px` 圆角的深色方形底，并以白色 L 形和橙色竖线构成识别符号；横向字标保持单色线性结构。

**The Radius Has Rank Rule.** 控件小圆角、内容中圆角、重点容器大圆角；不要随意混用，也不要把所有元素改成胶囊。

## Components

### Buttons

- **Primary:** `44px` 最小高度、`12px 24px` 内边距、`8px` 圆角，实心钢蓝底和白字；悬停上移 `2px` 并加深背景与阴影。
- **Ghost:** 同尺寸与字重，透明底配强边框；悬停时边框和文字转为链接蓝。
- **Focus:** 首页使用铜色 `2px` 轮廓，文档控件使用主题主色轮廓，始终保留明确偏移。

### Cards / Containers

- **Landing Card:** 白色或深色抬升纸面、`12px` 圆角、细蓝灰边框；悬停上移 `3px`，边框转铜色并启用中等阴影。
- **Principle Card:** 与 landing card 共用形状和表面，但不默认悬浮，保持信息稳定。
- **Feature Board:** 仅首页重点可使用 `18px` 圆角、网格或渐变和更强阴影。

### Inputs / Fields

- **Header Search:** 桌面为 `190px × 34px` 的紧凑搜索触发器，包含搜索图标、提示文字和 `/` 快捷键；移动端收缩为图标入口。
- **Search Panel:** OINK 离线搜索使用原生对话面板、分组结果和键盘操作，不创建第二套搜索弹窗。
- **Focus:** 边框加深、表面抬升，并保持键盘焦点轮廓。

### Navigation

顶部栏固定为 `56px` 高、半透明模糊背景；品牌由站点 Logo、渐变技术字标和主导航组成。文档左侧树形导航以 `10px` 圆角行、柔和 hover wash 和蓝色 active wash 标记状态；右侧页内目录保持低对比。移动端通过 OINK 抽屉和菜单按钮接管导航。

### Page Actions

复制 Markdown 与上下文菜单组成紧凑分段控件：纸面背景、细边框、`0.5rem` 圆角和 `13px` 字号。菜单项提供 AI 阅读、源码、历史、编辑与议题入口；扩展时沿用 OINK action registry，而不是直接硬编码新按钮组。

### Code Blocks

正文代码块使用近黑蓝终端面、`12px` 圆角、独立 header、语言标签和复制按钮。首页命令示例沿用三色窗口点、等宽标签和语义化注释/提示符颜色。代码容器允许横向滚动，并在可折叠时保留原生展开行为。

### Brand Marks

导航优先使用方形图标，宽空间可使用横向 `SYSTEM GUIDE` 字标。不得重新绘制成旧版三条斜杆，也不要把 Logo 的橙色竖线替换成平台专属色。

## Do's and Don'ts

### Do:

- **Do** 把 OINK `v0.4.1` 模块、`hugo.yaml`、首页数据和静态 Logo 视为当前设计权威。
- **Do** 通过 OINK/Hugo 的配置、数据区块、菜单和官方覆盖点扩展界面。
- **Do** 保持钢蓝交互、铜色注释、蓝灰双主题与技术排版预设的一致语义。
- **Do** 保留离线搜索、主题切换、页面操作、可折叠侧栏、页内目录、打印和移动抽屉。
- **Do** 让首页承担品牌表达，让文档正文优先可读、可扫描、可复制。

### Don't:

- **Don't** 用已废弃实现的视觉词汇解释当前站点；当前系统就是 OINK 原生技术文档。
- **Don't** 引入与 OINK 主题变量、导航或响应式壳层并行的第二套视觉语法。
- **Don't** 在仓库中复制 OINK 组件形成平行设计系统；必要覆盖应小而明确。
- **Don't** 用 Chakra Petch 或 IBM Plex Mono 排长篇中文正文。
- **Don't** 添加破坏浅色、深色、窄屏、键盘和打印体验的单主题装饰。
