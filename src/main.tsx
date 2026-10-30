import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import AppProviders from '@/AppProviders'
import { preloadRoute } from '@/routes'

// #root 里是构建时预渲染的 HTML（见 scripts/prerender.mjs），这里不做 hydrate，直接用客户端渲染替换：
// 用户切换过语言时客户端内容和预渲染的英文不一致，hydrate 会报不匹配。
preloadRoute(window.location.pathname).finally(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AppProviders>
          <App />
        </AppProviders>
      </BrowserRouter>
    </StrictMode>,
  )
})
