import { StrictMode } from 'react'
import { prerender } from 'react-dom/static'
import { StaticRouter } from 'react-router'
import App from './App.tsx'
import AppProviders from '@/AppProviders'

export { pageMeta } from '@/i18n/pageMeta'

/**
 * 构建时预渲染入口（`vite build --ssr` 打包，由 scripts/prerender.mjs 调用）。
 * 用 prerender 而不是 renderToString：它会等懒加载的路由（帮助、隐私）加载完再输出完整 HTML。
 */
export async function render(url: string): Promise<string> {
  const { prelude } = await prerender(
    <StrictMode>
      <StaticRouter location={url}>
        <AppProviders>
          <App />
        </AppProviders>
      </StaticRouter>
    </StrictMode>,
  )
  return new Response(prelude).text()
}
