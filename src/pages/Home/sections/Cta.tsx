import MountainBand from '@/components/mockups/MountainBand'
import {
  IconFree,
  IconNoAds,
  IconNoBackend,
  IconNoTracking,
  IconByoa,
} from '@/components/icons'
import Reveal from '@/components/Reveal'
import { useContent } from '@/i18n/context'

const content = {
  zh: {
    title: '现在开始，专注阅读',
    desc: '安装 LingVa，让翻译真正属于你。基础翻译免费、无广告；需要时可接入自己的 AI API。',
    cta: '查看项目与安装方式',
    note: '免费 · 无广告 · 隐私安全',
    badges: [
      { icon: IconFree, label: '免费' },
      { icon: IconNoAds, label: '无广告' },
      { icon: IconNoBackend, label: '本地优先' },
      { icon: IconNoTracking, label: '不追踪' },
      { icon: IconByoa, label: '自带 API' },
    ],
  },
  en: {
    title: 'Start now, stay focused on reading',
    desc: 'Install LingVa and make translation truly yours. Free core translation, no ads, and optional bring-your-own AI API.',
    cta: 'View project & install options',
    note: 'Free · No ads · Privacy first',
    badges: [
      { icon: IconFree, label: 'Free' },
      { icon: IconNoAds, label: 'No ads' },
      { icon: IconNoBackend, label: 'Local-first' },
      { icon: IconNoTracking, label: 'No tracking' },
      { icon: IconByoa, label: 'Bring your own API' },
    ],
  },
}

export default function Cta() {
  const t = useContent(content)

  return (
    <section className="relative overflow-hidden bg-[#0b0d12] px-6 py-16 text-center sm:py-20">
      <MountainBand />

      <Reveal className="relative mx-auto max-w-2xl">
        <span className="text-xs font-medium tracking-wide text-brand uppercase">Get started</span>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{t.title}</h2>
        <p className="mt-4 text-white/60">
          {t.desc}
        </p>

        <div className="mt-8">
          <a
            href="https://github.com/MuShanYu/lingva"
            className="rounded-full bg-gradient-to-r from-brand to-accent-purple px-8 py-3 text-sm font-medium text-white shadow-lg shadow-brand/30 transition hover:opacity-90"
          >
            {t.cta}
          </a>
        </div>
        <p className="mt-3 text-xs text-white/40">{t.note}</p>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4">
          {t.badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-xs text-white/50">
              <badge.icon className="h-4 w-4" />
              {badge.label}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
