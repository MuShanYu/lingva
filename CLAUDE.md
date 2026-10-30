# CLAUDE.md

本文件为 Claude Code 在 lingva-web 仓库中工作的指导说明。
Communicate language use Chinese Simplified.

LingVa 官网是纯前端的营销/功能介绍站点，不涉及后端与用户数据，无需担心"破坏性变更"。

## Commands

```bash
npm run dev        # Vite 开发服务器
npm run build      # tsc -b && vite build，再 SSR 打包 src/entry-prerender.tsx 并运行 scripts/prerender.mjs 预渲染
npm run lint        # oxlint
npm run preview
```

代码修改或 bug 修复后运行 `npm run lint` 与 `npm run build`。

## 架构

- `index.html` — 站点入口，`<head>` 里有 Google Analytics（gtag，`G-S9Q4656GG4`），隐私政策第 1 条已写明官网使用 GA；`public/404.html` 只负责跳转，不要加统计代码，否则会重复计数。`<head>` 里还有 canonical、Open Graph、Twitter Card 标签（分享图 `public/og-image.png`，1200 × 630），这些标签由预渲染脚本按页面改写
- 预渲染：`npm run build` 最后一步把 `/`、`/help`、`/privacy` 渲染成英文静态 HTML（`dist/index.html`、`help.html`、`privacy.html`），并写入各页的 title、description、canonical、OG 标签。入口是 `src/entry-prerender.tsx`（`react-dom/static` 的 `prerender`，会等懒加载路由），脚本是 `scripts/prerender.mjs`，新增页面时要改这个脚本的页面列表、`src/i18n/pageMeta.ts` 和 `public/sitemap.xml`。GitHub Pages 没有 SPA 回退，`/privacy` 必须有独立的 `privacy.html` 才能返回 200（Chrome 应用商店审核会抓这个链接）。客户端 `src/main.tsx` 不做 hydrate，直接用 `createRoot` 替换预渲染内容；预渲染时没有 `window`/`localStorage`，组件渲染阶段不能直接访问它们
- `src/App.tsx` — `react-router-dom` 路由入口，包一层全局 `Header`/`Footer`。首页同步引入，帮助、隐私按路由拆包（`src/routes.ts`，直接打开这两页时 `main.tsx` 先预加载对应的包再渲染）。全局 Provider 在 `src/AppProviders.tsx`，客户端和预渲染共用
- 首页主包控制在 100KB（gzip）以内：Hero 里的 `Aurora`（ogl）、`SplitText`（gsap）、`BlurText`（motion）都用 `lazy` 异步加载，加载前显示同样排版的静态文字；各节渐入用的 `src/components/Reveal.tsx` 是 IntersectionObserver + CSS（`index.css` 的 `[data-reveal]`），不依赖动画库。隐藏的初始状态只在 `<html class="js">` 下生效，系统开启"减少动态效果"时不做动画
- `src/pages/Home/Home.tsx` — 首页，由 `sections/` 下的 `Hero` `Overview` `Manga` `Reading` `Video` `Learning` `Compare` `Engines` `Usage` `Trust` `Cta` 拼装（叙事顺序：Hero → 七合一总览 → 漫画翻译 → PDF/文档阅读 → 视频字幕 → 生词学习闭环 → 多引擎对比 → 引擎选择 → 用量仪表盘 → 隐私 → 深色 CTA 带）。各节背景白色与 `#F8FAFC` 交替
- `src/data/overview.ts` — Overview 总览的文案 + 缩略图数据；没有 `image` 的条目（漫画翻译）整行展示、不放图
- `src/assets/img/` — 首页用的真实产品截图（中文命名，WebP 格式，如 `划词翻译弹窗（带词典卡片）.webp`），各 section 优先直接使用这些真实截图，而不是手绘示意图。各块图片的尺寸、比例和截图要求见 `doc/首页图片规范.md`，换图前先看
- `src/assets/svg/` — `simple-icons` 没收录的品牌 logo（Microsoft、Grok、智谱 GLM），用户提供的官方 SVG 素材
- `src/components/mockups/` — 首页的辅助展示组件：`ScreenshotCard`（截图卡片，首页所有真实截图都用它直接展示，不再套浏览器外框；默认懒加载，首屏图片传 `priority`；早期的 `BrowserFrame` 已删除）、`ProcessSteps`（横向步骤条）、`EngineList`（引擎列表，品牌 logo 优先用 `simple-icons` 的官方色 SVG path，`simple-icons` 没收录的品牌直接用 `src/assets/svg/` 里的 SVG 素材，LingVa 自己的内置引擎用站点自身 favicon）、`PlatformList`（视频平台小标签，同样用 `simple-icons` 官方色）、`SettingsCardMock`（静态字幕设置卡片，无对应真实截图）、`MountainBand`（Cta 暗色带背景）。漫画翻译那节用的是真实截图 `漫画翻译.webp`（早期手绘的 `MangaPanelMock` 已删除）。Usage 仪表盘那节直接展示真实截图 `用量-1.webp`（早期版本用过手绘 SVG 图表，现已废弃删除）
- `src/components/icons/` — 图标集合，基于 `lucide-react` 按需引入并用语义化名字重新导出（`IconFree` `IconOpenSource` 等），GitHub 品牌图标 `IconGithub` 是手写 SVG（lucide 不含品牌 logo）
- `src/pages/Privacy/Privacy.tsx` — Chrome Web Store 上架所需的隐私政策页：要点速览表 + 12 条条款，覆盖扩展本身与官方图片识别服务。中英文各一份完整正文（`PrivacyZh.tsx` / `PrivacyEn.tsx`）；扩展或服务端处理方式变化时两份一起改。注意不要往 `public/` 放 `index.html`，会在构建时覆盖站点入口
- `src/pages/Help/Help.tsx` — 帮助中心，按功能分组的常见问题
- `src/components/layout/` — 全站通用的 `Header`、`Footer`
- `src/i18n/` — 中英双语（zh / en，英文以中文为准翻译）。不引第三方 i18n 库：`LocaleProvider` 管当前语言（默认 en，用户手动切换后存 localStorage）并同步 `<html lang>`、title、description（各页面的中英文标题与描述在 `src/i18n/pageMeta.ts`，随路由和语言切换，预渲染脚本也从这里取英文版）；`LocaleSwitch` 是 Header 右上角的切换按钮。各组件把文案就近写成 `const content = { zh: {...}, en: {...} }` 再用 `useContent(content)` 取，**改中文文案时必须同步改英文**。帮助页 FAQ 在 `src/pages/Help/faq.tsx`；隐私政策按语言各一份完整正文（`PrivacyZh.tsx` / `PrivacyEn.tsx`，共用 `parts.tsx` 排版组件）
- `src/components/react-bits/` — 从 [react-bits](https://reactbits.dev) 引入的动效组件，通过 `npx shadcn@latest add @react-bits/<Name>-TS-TW` 安装（见 README）。这些文件是第三方生成代码，不必套用仓库自身的代码规范，也不要手动大改，需要改动时优先重新生成

## 样式

Tailwind CSS v4，通过 `@theme` 在 `src/index.css` 里定义了 `--color-brand`（#1677ff，与 LingVa 扩展本体的 antd 主题色保持一致）与 `--color-accent-purple`（#7c3aed，蓝→紫渐变强调色，用于 Hero 大标题、CTA 按钮等主视觉位置）。整站是浅色主题（白底），不做深浅色切换；唯一的深色区域是 Footer 上方那条"Built to the open" CTA 暗色带（`#0b0d12`），与 Footer 视觉连成一体。

路径别名 `@` 指向 `src/`（同时在根 `tsconfig.json` 与 `tsconfig.app.json` 中配置了 `paths`，shadcn CLI 依赖根 tsconfig 里的别名解析）。
