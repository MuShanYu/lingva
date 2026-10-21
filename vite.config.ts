import { readFile, writeFile } from 'node:fs/promises'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { createServer, defineConfig, type Plugin } from 'vite'

/**
 * GitHub Pages 没有 SPA 回退，/privacy 这类深链实际返回的是 404.html（HTTP 404 + JS 跳转），
 * Chrome 应用商店审核抓取隐私政策链接时会判定"无法访问"。
 * 构建后为隐私政策生成独立的 privacy.html（GitHub Pages 会把 /privacy 直接映射到它，返回 200），
 * 并把英文正文预渲染进 #root，不执行 JS 也能读到完整内容；页面加载后照常由 React 接管。
 * help.html 同理，只是不预渲染内容。
 */
function staticRoutes(): Plugin {
  return {
    name: 'lingva-static-routes',
    apply: 'build',
    async closeBundle() {
      const html = await readFile('dist/index.html', 'utf-8')

      const server = await createServer({
        configFile: false,
        logLevel: 'error',
        appType: 'custom',
        server: { middlewareMode: true },
        resolve: { alias: { '@': '/src' } },
      })
      try {
        const { renderToStaticMarkup } = await import('react-dom/server')
        const { createElement } = await import('react')
        const { default: PrivacyEn } = await server.ssrLoadModule('/src/pages/Privacy/PrivacyEn.tsx')
        const body = renderToStaticMarkup(createElement(PrivacyEn))
        const privacy = html
          .replace(/<title>.*?<\/title>/, '<title>LingVa Privacy Policy</title>')
          .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
        await writeFile('dist/privacy.html', privacy)
      } finally {
        await server.close()
      }

      await writeFile('dist/help.html', html)
    },
  }
}

// https://vite.dev/config/
// 站点部署在自定义域名 lingva.mushanyu.xyz 的根路径下
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), staticRoutes()],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
