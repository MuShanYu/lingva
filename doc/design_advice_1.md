我已经看完你补充的《LingVa 功能手册 v1.0.0》。这次可以更准确地给你建议了。

我先给你一个非常明确的判断：

> **LingVa 现在的产品能力已经明显超过一个普通的“翻译插件”，但你现在的官网如果只是按“翻译插件”来介绍，会严重低估这个产品。**

从手册来看，LingVa 实际上是：

**网页翻译 + AI 多引擎 + 词典/生词本 + SRS 学习 + 视频双语字幕 + PDF/文档双语阅读 + AI 用量管理 + 本地优先隐私**

而且这些不是规划中的功能，而是 v1.0.0 已经具备的能力。比如六个入口实际上共享同一套引擎调度体系。

所以我建议你这次不要“小修小补”现在的官网，而是**重新定义官网的信息架构和产品叙事**。

------

# 一、首先重新定义 LingVa

我认为现在最值得调整的是：

### 不要把 LingVa 定位成

> AI 翻译 Chrome 插件

这个太普通。

### 我更建议定位成

> **AI-powered reading & translation companion for Chrome**

中文：

> **让翻译成为阅读的一部分。**

或者更产品化一点：

> **翻译，不应该打断你的阅读。**

因为你的功能实际上围绕的是一个非常完整的行为链：

```text
阅读网页
   ↓
遇到陌生内容
   ↓
划词翻译
   ↓
发现生词
   ↓
加入生词本
   ↓
视频继续学习
   ↓
PDF / 文档继续阅读
   ↓
不同 AI 模型进行比较
   ↓
统计自己的 AI 使用
```

这已经不是“Translation Tool”。

它更接近：

> **Reading + Translation + Learning + AI**

这个定位会让官网的层次一下提升。

------

# 二、我建议官网采用一个新的核心叙事

整个首页只围绕一句话：

# **Translate less. Understand more.**

副标题：

> LingVa is an open-source AI translation extension for Chrome.
> Translate selected text, web pages, videos, PDFs and documents — with the AI engines you choose.

然后：

**[ Add to Chrome ]**

**[ View on GitHub ]**

下面直接放产品真实 UI。

------

# 三、Hero 我建议这样重新设计

这是我认为你现在最值得投入设计时间的区域。

```text
                       LingVa

             Translate less.
             Understand more.

     An open-source AI translation companion
                 for Chrome.

      [ Add to Chrome ]   [ View on GitHub ]

              ┌───────────────────────┐
              │                       │
              │   Browser Screenshot  │
              │                       │
              │   selected text       │
              │        ↓              │
              │   ┌───────────────┐   │
              │   │ Translation   │   │
              │   │ 人工智能      │   │
              │   │ /ˌɑː.../      │   │
              │   └───────────────┘   │
              │                       │
              └───────────────────────┘

       Free · Open Source · No Ads · Local-first
```

这里最后这一行特别重要。

因为你的手册明确说明：

- 没有自建后端
- API Key 存本地
- 翻译文本直接发往用户配置的服务商
- 历史、生词本、用量统计本地存储
- 不上传使用行为

这些都可以成为官网非常强的卖点。

------

# 四、Hero 下面不要马上放 Feature Grid

这里我反而建议你做一个非常有冲击力的东西：

# **One extension. Six ways to understand.**

因为手册已经给出了非常清晰的六类入口。

直接做成：

```text
┌──────────┬──────────┬──────────┐
│  ✦       │  ✦       │  ✦       │
│ 划词翻译 │ 整页翻译 │ 双语字幕 │
│          │          │          │
├──────────┼──────────┼──────────┤
│  ✦       │  ✦       │  ✦       │
│ PDF阅读  │ 文档翻译 │ 多引擎   │
└──────────┴──────────┴──────────┘
```

但不要只放图标。

**每一个卡片都应该放真实产品截图。**

------

# 五、第一大 Feature：划词翻译

这是 LingVa 最应该展示的核心交互。

标题：

# **Select. Translate. Keep reading.**

副标题：

> Select a word or sentence anywhere on the web. LingVa translates it without taking you away from the page.

然后截图：

```text
文章
────────────────────────────

The rapid development of
artificial intelligence...

        ↑ 选中

┌─────────────────────────────┐
│ artificial intelligence     │
│ 人工智能                    │
│                             │
│ /ˌɑːrtɪˈfɪʃəl/             │
│ noun                        │
│                             │
│ the development of ...      │
│                             │
│ 🔊   ⭐   Copy              │
└─────────────────────────────┘
```

这里特别应该展示**词典 + 生词本**。

因为你的划词不是单纯 API 翻译。

手册明确写了：

> 单词 / 短语优先查询词典 → 音标 → 词性 → 释义 → 例句 → 加入生词本。

这是很好的产品故事。

------

# 六、然后马上展示「从翻译到学习」

这是我认为你产品一个非常容易被官网忽略、但实际上非常有特色的能力。

标题：

# **Turn translations into knowledge.**

流程：

```text
          Select
             ↓
        Understand
             ↓
          Save ⭐
             ↓
        Review later
             ↓
          Remember
```

然后展示生词本：

```text
My Vocabulary

┌─────────────────────────────┐
│ artificial intelligence     │
│ /ˌɑː.../                    │
│ 人工智能                    │
│ noun                        │
│                             │
│ ● Learning                  │
└─────────────────────────────┘

          Review 12 words
```

再介绍：

> Built-in vocabulary review uses a lightweight spaced-repetition system to help you retain what you learn.

你的手册里已经有完整的 SM-2 简化算法、复习状态和每日 20 条队列等实现，因此这不是营销概念，而是实际功能。

**但官网千万不要展示“SM-2 2.5 / 1.3 / 2.8”这些技术细节。**

那属于 Docs。

官网只需要讲：

> **Read → Save → Review → Remember**

------

# 七、第二个超级重要的 Feature：AI Engine

这一块我建议做成整个官网的视觉高潮之一。

标题：

# **Your text. Your model. Your choice.**

下面展示一个非常漂亮的 Engine Selector：

```text
Translation Engine

Traditional
────────────────
Google
DeepL
Microsoft
Built-in

AI
────────────────
OpenRouter
DeepSeek
Gemini
Grok
GLM
Qwen

Custom
────────────────
+ Add custom endpoint
```

你的手册里已经明确支持：

- 4 个传统翻译引擎
- OpenRouter
- DeepSeek
- Gemini
- Grok
- GLM
- Qwen
- 任意 OpenAI Compatible Endpoint



这个能力非常值得强调。

尤其是：

> **Bring your own model.**

这是开发者用户会非常喜欢的卖点。

------

# 八、多引擎对比功能应该单独做一块

这个功能很有意思，而且我觉得**很多用户第一眼会觉得很酷**。

手册里提到：

> 同时调用多个引擎，并以标签切换结果，对每条译文和基准译文做差异高亮。

官网可以做成：

# **One sentence. Multiple answers.**

```text
Original

The model struggles with ambiguous context.

────────────────────────────

OpenAI
模型难以处理含糊的上下文。

Claude
该模型在理解模棱两可的语境时存在困难。

Gemini
模型难以应对具有歧义的上下文。
```

然后：

> Compare translations from different AI models side by side.

这个比“支持多模型”更容易让用户理解价值。

------

# 九、视频字幕一定要作为一级功能

这个功能实际上很适合做官网大图。

标题：

# **Learn from the videos you already watch.**

下面：

```text
┌────────────────────────────────────┐
│                                    │
│             VIDEO                  │
│                                    │
│       Artificial intelligence      │
│       正在改变我们的生活方式。      │
│                                    │
│                                    │
└────────────────────────────────────┘
```

下面四个平台：

**YouTube · TED · Bilibili · Coursera**

这四个平台你的手册明确有适配。

这个场景其实非常强：

> 看 YouTube → 双语字幕 → 遇到生词 → 划词 → 生词本

这直接把：

**翻译 + 学习**

串起来了。

------

# 十、PDF / Document 应该成为另一个核心 Hero Feature

这个功能我甚至建议比普通“网页翻译”更大。

标题：

# **Read documents side by side.**

副标题：

> Translate PDFs and documents without leaving your reading workflow.

视觉：

```text
┌──────────────────────┬──────────────────────┐
│                      │                      │
│     ORIGINAL         │     TRANSLATION      │
│                      │                      │
│ Introduction        │ 简介                 │
│                      │                      │
│ Artificial           │ 人工智能             │
│ Intelligence...      │ ……                   │
│                      │                      │
│ ┌───────────────┐    │ ┌───────────────┐    │
│ │   TABLE       │    │ │    表格       │    │
│ └───────────────┘    │ └───────────────┘    │
│                      │                      │
└──────────────────────┴──────────────────────┘
```

你的 PDF 已经具备：

- 原文 / 译文双栏
- 单页译文模式
- 标题识别
- 列表
- 代码
- 表格
- 图片
- 扫描件检测



所以官网可以大胆展示一个**复杂 PDF 页面**，这样用户会觉得：

> “这不是一个小型翻译 Popup。”

------

# 十一、文档格式不要单独做五张卡

手册实际上支持：

**PDF / Markdown / TXT / SRT / HTML**



官网可以做成：

```text
PDF       DOCX*
Markdown  TXT
SRT       HTML
```

但这里我提醒你一个很重要的问题：

**你前面告诉我的产品进度是 PDF 已经实现，Word 正在规划。**

而这份 v1.0.0 手册明确写的是：

> “同一个阅读器页面承载五种文档格式”

但后面列出的五种实际上是 **PDF、Markdown、TXT、SRT、HTML**，并没有 DOCX。

所以官网现阶段**不要写 DOCX 已支持**，除非你的产品现在已经完成了 DOCX。

这是一个官网必须保持一致的地方。

------

# 十二、Usage Dashboard 不要放前面

你之前花了很多精力设计：

> AI 消费趋势
> 模型使用情况
> Token
> Cost

我建议：

**这个功能不要进入前 50% 页面。**

它是一个很好的“高级能力”，但不是用户安装 LingVa 的第一原因。

放在后面：

# **Understand your AI usage.**

展示：

```text
AI Usage

Requests       1,284
Tokens         842K
Cost           $2.31

      ╭──────────╮
      │          │
      ╰──────────╯

OpenAI     42%
Claude     31%
Gemini     17%
Other      10%
```

然后一句：

> Track requests, tokens, costs, models and translation scenarios locally.

手册里确实有完整的用量仪表盘，包括消费趋势、模型、场景、引擎和服务商额度。

这会成为一个非常漂亮的“产品深度”展示。

------

# 十三、Privacy 应该是官网倒数第二个大模块

我会非常建议你做：

# **Your translations stay yours.**

然后四个指标：

```text
          Local-first

       ┌─────────────┐
       │   Browser   │
       │   Storage   │
       └─────────────┘

       No LingVa Server
```

下面：

### 🔐 API Keys

Stored locally.

### 📄 Translation Content

Sent directly to your selected provider.

### 📚 History & Vocabulary

Stored locally.

### 📊 Usage Analytics

No telemetry. Calculated locally.

这些内容都有手册依据。

这一块我认为会极大增加产品可信度。

------

# 十四、最后才讲 Open Source

这里不要写：

> We are an open source project.

太弱。

可以写：

# **Built in the open.**

然后：

```text
Open Source
No Ads
No Backend
No Tracking
Bring Your Own API
```

CTA：

**View source on GitHub**

------

# 十五、最终官网的信息架构，我建议这样

这是我现在根据你的**真实 v1.0 功能**重新整理后的最终结构：

```text
01 Hero
   ↓
   Translate less. Understand more.

02 Quick Demo
   ↓
   Select → Translate → Keep reading

03 Six ways to translate
   ↓
   Selection
   Page
   Video
   PDF
   Documents
   Multi-engine

04 Vocabulary & Learning
   ↓
   Translation → Save → Review

05 AI Translation Engines
   ↓
   Google / DeepL / Microsoft
   OpenRouter
   DeepSeek / Gemini / Grok / GLM / Qwen
   Custom OpenAI-compatible

06 Multi-model comparison
   ↓
   One sentence. Multiple answers.

07 Video subtitles
   ↓
   YouTube / TED / Bilibili / Coursera

08 PDF & Documents
   ↓
   Side-by-side reading

09 Usage Dashboard
   ↓
   Requests / Tokens / Cost / Models

10 Privacy
   ↓
   Local-first

11 Open Source
   ↓
   GitHub

12 Final CTA
   ↓
   Add to Chrome
```

------

# 十六、但是有一个地方我会特别调整：不要把 12 个 Section 全做成一样

这是很多开发者官网最后容易出现的问题：

```text
标题
截图
标题
截图
标题
截图
标题
截图
```

会非常长。

我建议采用：

**大 / 小 / 大 / 小交替节奏。**

例如：

```text
HERO
████████████████

DEMO
████████████████

FEATURE
████████
        ████████

FEATURE
        ████████
████████

ENGINE
████████████████

COMPARISON
████████████████

VIDEO
████████
        ████████

PDF
        ████████
████████

USAGE
████████████████

PRIVACY
████████████████

CTA
████████████████
```

这样页面会有明显的视觉节奏。

------

# 十七、还有一个我非常建议你做的东西：产品 GIF / Video

你的产品特别适合做 **10~15 秒无声 Demo**。

例如：

```text
0s     打开英文网页
 ↓
2s     鼠标选中一句话
 ↓
3s     LingVa Popup 出现
 ↓
5s     翻译结果出现
 ↓
7s     点击生词本
 ↓
9s     打开 PDF
 ↓
11s    双栏翻译
 ↓
13s    切换 AI Model
 ↓
15s    LingVa Logo
```

然后 Hero 上直接播放。

这比静态截图强很多。

------

# 十八、官网应该区分「营销层」和「产品文档层」

你这份功能手册其实非常详细。

比如：

> ```
> max_tokens = 字符数 ÷ 2.5 + ...
> ```

> 60 秒 timeout

> 二分重试

> 150ms throttle

> SM-2 易记因子

> IndexedDB 表结构

这些东西**千万不要全部搬到官网首页**。

建议：

### 官网

回答：

> **Why should I use LingVa?**

### Docs

回答：

> **How does LingVa work?**

### GitHub

回答：

> **How is LingVa built?**

这样整个产品体系就非常清晰。

------

# 十九、我甚至建议你的官网增加一个独立 Docs

Header：

```text
LingVa

Features
Engines
Docs
Privacy

GitHub

                 [ Add to Chrome ]
```

Docs 里面再放：

```text
Getting Started
───────────────
Installation
First Translation
Engine Setup

Features
───────────────
Selection
Web Translation
Video Subtitles
PDF Translation
Vocabulary

Engines
───────────────
Google
DeepL
OpenRouter
OpenAI Compatible

Privacy
───────────────
Data Storage
API Keys
Permissions
```

这时候你这份 Feature Manual 就有地方去了。

------

# 二十、最重要的：Chrome Store 页面和官网必须形成一套语言

官网不要自己说一套：

> AI Translation Assistant

Chrome Store 又写：

> Free Translation Extension

GitHub 又写：

> easy-translate

这样品牌会散掉。

我建议统一：

### Product Name

**LingVa**

### Short Description

> **AI translation companion for Chrome.**

### One-liner

> **Translate less. Understand more.**

### Core positioning

> **Open-source AI translation for web pages, videos, PDFs and documents.**

### Values

> **Free · Open Source · Local-first · No Ads**

------

## 最后，我对你现在这个项目的判断

看完功能手册以后，我反而比刚才更确定：

**你现在不应该把官网重点放在“LingVa 是一个翻译插件”。**

因为 v1.0 已经有很明显的产品组合：

```text
                       LingVa
                          │
       ┌──────────────────┼──────────────────┐
       ↓                  ↓                  ↓
   TRANSLATE           LEARN              READ
       │                  │                  │
   划词/整页           生词本/SRS         PDF/文档
       │                  │                  │
   AI 多引擎             复习             视频字幕
       │                  │                  │
       └──────────────────┼──────────────────┘
                          ↓
                    UNDERSTAND
```

**“Understand”才是最终价值。**

所以如果让我给 LingVa 官网重新定一个核心方向，我会选：

# **LingVa**

## **Translate less. Understand more.**

> Your AI-powered reading companion for Chrome.

然后整个官网都围绕：

**阅读 → 翻译 → 理解 → 学习**

展开。

这会比现在单纯做一个“功能介绍型官网”高级很多，也更符合你目前实际已经完成的产品能力。

如果你愿意继续往下做，我建议下一步就不要再停留在“建议”层面了——**我可以直接根据这份手册，给你输出一版 LingVa 官网 V1.0 的完整页面原型：从 Header、Hero 到 Footer，每个区块具体怎么排、放什么截图、标题/副标题写什么、按钮叫什么，以及桌面端 1440px 下的具体布局。**这样你可以直接照着改现在的 `mushanyu.github.io/lingva/`。