import { siYoutube, siTed, siBilibili, siCoursera } from 'simple-icons'
import type { SimpleIcon } from 'simple-icons'

const platforms: { name: string; icon: SimpleIcon }[] = [
  { name: 'YouTube', icon: siYoutube },
  { name: 'TED', icon: siTed },
  { name: 'Bilibili', icon: siBilibili },
  { name: 'Coursera', icon: siCoursera },
]

export default function PlatformList() {
  return (
    <div className="flex flex-wrap gap-2">
      {platforms.map((p) => (
        <span
          key={p.name}
          className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-600"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" fill={`#${p.icon.hex}`} aria-hidden>
            <path d={p.icon.path} />
          </svg>
          {p.name}
        </span>
      ))}
    </div>
  )
}
