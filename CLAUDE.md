# CLAUDE.md

本文件为 Claude Code 在 lingva-web 仓库中工作的指导说明。
Communicate language use Chinese Simplified.

LingVa 官网是纯前端的营销/功能介绍站点，不涉及后端与用户数据，无需担心"破坏性变更"。

## Commands

```bash
npm run dev        # Vite 开发服务器
npm run build      # tsc -b && vite build
npm run lint        # oxlint
npm run preview
```

代码修改或 bug 修复后运行 `npm run lint` 与 `npm run build`。

## 架构

- `src/App.tsx` — `react-router-dom` 路由入口，包一层全局 `Header`/`Footer`
- `src/pages/Home/Home.tsx` — 首页，由 `sections/` 下的 `Hero` `Overview` `Learning` `Engines` `Compare` `Video` `Reading` `Usage` `Trust` `Cta` 拼装（叙事顺序：Hero → 六合一总览 → 生词学习闭环 → 引擎选择 → 多引擎对比 → 视频字幕 → PDF/文档阅读 → 用量仪表盘 → 隐私 → 深色 CTA 带）
- `src/data/overview.ts` — Overview 六宫格总览的文案 + 缩略图数据
- `src/assets/img/` — 首页用的真实产品截图（中文命名，如 `划词翻译弹窗（带词典卡片）.png`），各 section 优先直接使用这些真实截图，而不是手绘示意图
- `src/assets/svg/` — `simple-icons` 没收录的品牌 logo（Microsoft、Grok、智谱 GLM），用户提供的官方 SVG 素材
- `src/components/mockups/` — 首页的辅助展示组件：`BrowserFrame`（浅色浏览器外框，包裹真实截图用）、`ScreenshotCard`（无外框截图卡片）、`ProcessSteps`（横向步骤条）、`EngineList`（引擎列表，品牌 logo 优先用 `simple-icons` 的官方色 SVG path，`simple-icons` 没收录的品牌直接用 `src/assets/svg/` 里的 SVG 素材，LingVa 自己的内置引擎用站点自身 favicon）、`PlatformList`（视频平台小标签，同样用 `simple-icons` 官方色）、`SettingsCardMock`（静态字幕设置卡片，无对应真实截图）、`MountainBand`（Cta 暗色带背景）。Usage 仪表盘那节已改回直接展示 `用量-1.png`/`用量-2.png` 两张真实截图（早期版本用过手绘 SVG 图表，现已废弃删除）
- `src/components/icons/` — 图标集合，基于 `lucide-react` 按需引入并用语义化名字重新导出（`IconFree` `IconOpenSource` 等），GitHub 品牌图标 `IconGithub` 是手写 SVG（lucide 不含品牌 logo）
- `src/pages/Privacy/Privacy.tsx` — Chrome Web Store 上架所需的隐私政策页
- `src/components/layout/` — 全站通用的 `Header`、`Footer`
- `src/components/react-bits/` — 从 [react-bits](https://reactbits.dev) 引入的动效组件，通过 `npx shadcn@latest add @react-bits/<Name>-TS-TW` 安装（见 README）。这些文件是第三方生成代码，不必套用仓库自身的代码规范，也不要手动大改，需要改动时优先重新生成

## 样式

Tailwind CSS v4，通过 `@theme` 在 `src/index.css` 里定义了 `--color-brand`（#1677ff，与 LingVa 扩展本体的 antd 主题色保持一致）与 `--color-accent-purple`（#7c3aed，蓝→紫渐变强调色，用于 Hero 大标题、CTA 按钮等主视觉位置）。整站是浅色主题（白底），不做深浅色切换；唯一的深色区域是 Footer 上方那条"Built to the open" CTA 暗色带（`#0b0d12`），与 Footer 视觉连成一体。

路径别名 `@` 指向 `src/`（同时在根 `tsconfig.json` 与 `tsconfig.app.json` 中配置了 `paths`，shadcn CLI 依赖根 tsconfig 里的别名解析）。
