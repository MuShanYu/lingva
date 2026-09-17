interface ScreenshotCardProps {
  src: string
  alt: string
  className?: string
}

export default function ScreenshotCard({ src, alt, className = '' }: ScreenshotCardProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full rounded-2xl border border-gray-200 shadow-2xl shadow-gray-300/40 ${className}`}
    />
  )
}
