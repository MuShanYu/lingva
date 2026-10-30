import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * 进入视口时淡入上移。只用 IntersectionObserver + CSS 过渡（样式见 index.css 的 [data-reveal]），
 * 不引入动画库，首页主包里因此不带 motion。
 * 隐藏的初始状态只在 <html class="js"> 下生效：不执行 JS 的爬虫读到的预渲染 HTML 内容是可见的。
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      data-reveal={shown ? 'shown' : ''}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}
