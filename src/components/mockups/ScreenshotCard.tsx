interface ScreenshotCardProps {
  src: string
  alt: string
  className?: string
  /** 首屏图片传 true：立即加载并提高优先级，其余截图默认懒加载 */
  priority?: boolean
  width?: number
  height?: number
}

export default function ScreenshotCard({
  src,
  alt,
  className = '',
  priority = false,
  width,
  height,
}: ScreenshotCardProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      className={`w-full rounded-2xl border border-gray-200 shadow-2xl shadow-gray-300/40 ${className}`}
    />
  )
}
