# LingVa 官网

LingVa Chrome 扩展的功能介绍官网。

## 技术栈

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- react-router-dom
- [react-bits](https://reactbits.dev)（通过 shadcn CLI 注册表安装的动效组件，见 `src/components/react-bits/`）

## 命令

```bash
npm run dev      # 启动开发服务器
npm run build    # 类型检查 + 构建
npm run lint     # oxlint 检查
npm run preview  # 预览构建产物
```

## 新增 react-bits 组件

```bash
npx shadcn@latest add @react-bits/<ComponentName>-TS-TW
```

组件会被写入 `src/components/`，建议手动挪到 `src/components/react-bits/` 保持与站点自身组件分离。
