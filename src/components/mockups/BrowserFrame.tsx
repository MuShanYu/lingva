import type { ReactNode } from 'react'

interface BrowserFrameProps {
  url?: string
  children: ReactNode
  className?: string
  noPadding?: boolean
}

export default function BrowserFrame({
  url = 'example.com',
  children,
  className = '',
  noPadding = false,
}: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-300/40 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
        </div>
        <div className="ml-3 flex-1 truncate rounded-full bg-white px-3 py-1 text-center text-xs text-gray-400 ring-1 ring-gray-200">
          {url}
        </div>
      </div>
      <div className={noPadding ? '' : 'p-6'}>{children}</div>
    </div>
  )
}
