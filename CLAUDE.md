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
- `src/pages/Home/Home.tsx` — 首页，由 `sections/` 下的 `Hero` `Features` `Stats` `Workflow` `Cta` 拼装
- `src/pages/Privacy/Privacy.tsx` — Chrome Web Store 上架所需的隐私政策页
- `src/components/layout/` — 全站通用的 `Header`、`Footer`
- `src/components/react-bits/` — 从 [react-bits](https://reactbits.dev) 引入的动效组件，通过 `npx shadcn@latest add @react-bits/<Name>-TS-TW` 安装（见 README）。这些文件是第三方生成代码，不必套用仓库自身的代码规范，也不要手动大改，需要改动时优先重新生成
- `src/data/features.ts` — 首页功能卡片的文案数据

## 样式

Tailwind CSS v4，通过 `@theme` 在 `src/index.css` 里定义了 `--color-brand`（#1677ff，与 LingVa 扩展本体的 antd 主题色保持一致）。当前整站是深色背景（`#0b0d12`），暂未做浅色模式适配。

路径别名 `@` 指向 `src/`（同时在根 `tsconfig.json` 与 `tsconfig.app.json` 中配置了 `paths`，shadcn CLI 依赖根 tsconfig 里的别名解析）。
