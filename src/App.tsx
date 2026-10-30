import { Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Home from '@/pages/Home/Home'
import { Help, Privacy } from '@/routes'

/**
 * 路由切换后的滚动位置管理：带 hash 时滚动到锚点（跨路由跳转要等新页面挂载完锚点才存在，
 * 所以用 requestAnimationFrame 延后一帧）；不带 hash 时回到页面顶部，避免从首页滚到一半
 * 跳去 /help、/privacy 时还停在原来的滚动位置。
 */
function ScrollRestoration() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const raf = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
      return () => cancelAnimationFrame(raf)
    }
    window.scrollTo({ top: 0, left: 0 })
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollRestoration />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
