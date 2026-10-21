import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface HashLinkProps {
  href: string
  className?: string
  children: ReactNode
}

/**
 * 导航里 `#anchor` 形式的链接：不在首页时先带上 `/` 前缀跳回首页再定位锚点，
 * 已在首页时只更新 hash。实际滚动统一交给 App 里的 ScrollToHash 处理，
 * 因为跨路由跳转时目标元素要等首页挂载后才存在。
 */
export function HashLink({ href, className, children }: HashLinkProps) {
  const { pathname } = useLocation()
  const to = href.startsWith('#') && pathname !== '/' ? `/${href}` : href

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}
