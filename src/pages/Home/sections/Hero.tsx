import Aurora from '@/components/react-bits/Aurora'
import SplitText from '@/components/react-bits/SplitText'
import BlurText from '@/components/react-bits/BlurText'
import BrowserFrame from '@/components/mockups/BrowserFrame'
import wordPopupImg from '@/assets/img/划词翻译弹窗（带词典卡片）.png'
import {
  IconShieldCheck,
  IconNoAds,
  IconLocalFirst,
  IconNoTracking,
  IconControl,
} from '@/components/icons'
import { useLocale } from '@/i18n/context'

const content = {
  zh: {
    titleLead: '翻译，不应该',
    titleAccent: '打断',
    titleTail: '你的阅读。',
    subtitle:
      'LingVa 是一款为阅读而生的 Chrome 翻译扩展。划词、网页、视频字幕、PDF 与文档、漫画，一处配置，随处翻译。',
    cta: '添加到 Chrome',
    badges: [
      { icon: IconShieldCheck, label: '完全免费' },
      { icon: IconNoAds, label: '无广告' },
      { icon: IconLocalFirst, label: '数据本地存储' },
      { icon: IconNoTracking, label: '隐私安全' },
      { icon: IconControl, label: '完全自主控制' },
    ],
    imgAlt: 'LingVa 划词翻译弹窗，展示词典卡片',
  },
  en: {
    titleLead: 'Translation shouldn’t',
    titleAccent: 'interrupt',
    titleTail: ' your reading.',
    subtitle:
      'LingVa is a Chrome translation extension built for reading. Selected text, web pages, video subtitles, PDFs and documents, manga — configure once, translate everywhere.',
    cta: 'Add to Chrome',
    badges: [
      { icon: IconShieldCheck, label: 'Completely free' },
      { icon: IconNoAds, label: 'No ads' },
      { icon: IconLocalFirst, label: 'Data stays local' },
      { icon: IconNoTracking, label: 'Privacy first' },
      { icon: IconControl, label: 'Fully in your control' },
    ],
    imgAlt: 'LingVa selection translation popup with a dictionary card',
  },
}

export default function Hero() {
  const { locale } = useLocale()
  const t = content[locale]

  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 h-[640px]">
        <Aurora colorStops={['#1677ff', '#7c3aed', '#1677ff']} amplitude={0.8} blend={0.4} lightMode />
      </div>
      <div className="absolute inset-0 h-[640px] bg-gradient-to-b from-transparent to-white" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-brand/10 px-4 py-1 text-xs font-medium text-brand">
            FREE · NO ADS
          </span>

          {/* SplitText / BlurText 只在挂载时拆分文字，切换语言要靠 key 重新挂载 */}
          <h1 className="mt-6">
            <SplitText
              key={`title-${locale}`}
              text={t.titleLead}
              tag="span"
              className="block text-4xl font-semibold text-gray-900 sm:text-5xl"
              splitType="words"
            />
            <span className="block text-4xl font-semibold sm:text-5xl">
              <span className="bg-gradient-to-r from-brand to-accent-purple bg-clip-text text-transparent">{t.titleAccent}</span>
              <span className="text-gray-900">{t.titleTail}</span>
            </span>
          </h1>

          <BlurText
            key={`subtitle-${locale}`}
            text={t.subtitle}
            className="mt-6 max-w-lg text-base text-gray-500 sm:text-lg"
            animateBy="words"
          />

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              id="download"
              href="#"
              className="rounded-full bg-gradient-to-r from-brand to-accent-purple px-6 py-3 text-sm font-medium text-white shadow-lg shadow-brand/25 transition hover:opacity-90"
            >
              {t.cta}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {t.badges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-sm text-gray-500">
                <badge.icon className="h-4 w-4 text-gray-400" />
                {badge.label}
              </div>
            ))}
          </div>
        </div>

        <div>
          <BrowserFrame url="wikipedia.org/wiki/Artificial_intelligence" noPadding>
            <img src={wordPopupImg} alt={t.imgAlt} className="w-full" />
          </BrowserFrame>
        </div>
      </div>
    </section>
  )
}
