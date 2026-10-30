import { lazy } from 'react'

/**
 * 首页之外的页面按路由拆包，首页 JS 里不带帮助中心和隐私政策的正文。
 * 首页保持同步引入：它是落地页，又是预渲染页面，懒加载会在 React 接管时先闪一下 Suspense 的空白。
 */
const loaders = {
  '/privacy': () => import('@/pages/Privacy/Privacy'),
  '/help': () => import('@/pages/Help/Help'),
}

export const Privacy = lazy(loaders['/privacy'])
export const Help = lazy(loaders['/help'])

/** 直接打开 /privacy、/help 时先把对应的包加载好再渲染，避免预渲染内容被 Suspense 空白替换 */
export function preloadRoute(pathname: string): Promise<unknown> {
  const path = pathname.replace(/\/+$/, '') as keyof typeof loaders
  return loaders[path]?.() ?? Promise.resolve()
}
