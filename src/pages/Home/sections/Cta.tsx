import MountainBand from '@/components/mockups/MountainBand'
import {
  IconOpenSource,
  IconNoAds,
  IconNoBackend,
  IconNoTracking,
  IconByoa,
} from '@/components/icons'

const badges = [
  { icon: IconOpenSource, label: '开源' },
  { icon: IconNoAds, label: '无广告' },
  { icon: IconNoBackend, label: '无后端' },
  { icon: IconNoTracking, label: '不追踪' },
  { icon: IconByoa, label: '自带 API' },
]

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-[#0b0d12] px-6 py-24 text-center">
      <MountainBand />

      <div className="relative mx-auto max-w-2xl">
        <span className="text-xs font-medium tracking-wide text-brand uppercase">Open source</span>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">开放地构建</h2>
        <p className="mt-4 text-white/60">
          安装 LingVa，让翻译真正属于你。不追踪、可自带 API，代码完全开源。
        </p>

        <div className="mt-8">
          <a
            href="#"
            className="rounded-full bg-gradient-to-r from-brand to-accent-purple px-8 py-3 text-sm font-medium text-white shadow-lg shadow-brand/30 transition hover:opacity-90"
          >
            添加到 Chrome
          </a>
        </div>
        <p className="mt-3 text-xs text-white/40">免费 · 开源 · 无广告</p>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-xs text-white/50">
              <badge.icon className="h-4 w-4" />
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
