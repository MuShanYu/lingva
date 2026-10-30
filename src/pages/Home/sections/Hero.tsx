import { lazy, Suspense, useState } from 'react'
import ScreenshotCard from '@/components/mockups/ScreenshotCard'
import wordPopupImg from '@/assets/img/划词翻译弹窗（带词典卡片）.webp'
import {
  IconShieldCheck,
  IconNoAds,
  IconLocalFirst,
  IconNoTracking,
  IconControl,
} from '@/components/icons'
import { useLocale } from '@/i18n/context'

// Aurora 依赖 WebGL 库 ogl，单独拆包异步加载；系统开启"减少动态效果"时不加载
const Aurora = lazy(() => import('@/components/react-bits/Aurora'))
// SplitText 依赖 gsap（约 120KB），同样拆包；加载完成前先显示同样排版的静态标题
const SplitText = lazy(() => import('@/components/react-bits/SplitText'))
const titleLeadClass = 'block text-4xl font-semibold text-gray-900 sm:text-5xl'
// BlurText 依赖 motion，同理拆包
const BlurText = lazy(() => import('@/components/react-bits/BlurText'))
const subtitleClass = 'mt-6 max-w-lg text-base text-gray-500 sm:text-lg'

// 预渲染时没有 window，不输出 Aurora；客户端渲染（不做 hydrate）时再按系统设置决定
function shouldShowAurora() {
  return typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

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
  const [showAurora] = useState(shouldShowAurora)

  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 h-[640px]">
        {showAurora && (
          <Suspense fallback={null}>
            <Aurora colorStops={['#1677ff', '#7c3aed', '#1677ff']} amplitude={0.8} blend={0.4} lightMode />
          </Suspense>
        )}
      </div>
      <div className="absolute inset-0 h-[640px] bg-gradient-to-b from-transparent to-white" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-brand/10 px-4 py-1 text-xs font-medium text-brand">
            FREE · NO ADS
          </span>

          {/* SplitText / BlurText 只在挂载时拆分文字，切换语言要靠 key 重新挂载 */}
          <h1 className="mt-6">
            <Suspense
              fallback={
                // 与 SplitText 渲染出的外层标签保持同样的 class 和对齐，替换时不跳动
                <span
                  className={`split-parent inline-block overflow-hidden whitespace-normal ${titleLeadClass}`}
                  style={{ textAlign: 'center', wordWrap: 'break-word' }}
                >
                  {t.titleLead}
                </span>
              }
            >
              <SplitText
                key={`title-${locale}`}
                text={t.titleLead}
                tag="span"
                className={titleLeadClass}
                splitType="words"
              />
            </Suspense>
            <span className="block text-4xl font-semibold sm:text-5xl">
              <span className="bg-gradient-to-r from-brand to-accent-purple bg-clip-text text-transparent">{t.titleAccent}</span>
              <span className="text-gray-900">{t.titleTail}</span>
            </span>
          </h1>

          <Suspense fallback={<p className={`blur-text ${subtitleClass} flex flex-wrap`}>{t.subtitle}</p>}>
            <BlurText key={`subtitle-${locale}`} text={t.subtitle} className={subtitleClass} animateBy="words" />
          </Suspense>

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
          <ScreenshotCard src={wordPopupImg} alt={t.imgAlt} width={1600} height={900} priority className="h-auto" />
        </div>
      </div>
    </section>
  )
}
