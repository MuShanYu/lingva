import { GitCompare, Highlighter, ArrowLeftRight } from 'lucide-react'
import ScreenshotCard from '@/components/mockups/ScreenshotCard'
import compareImg from '@/assets/img/多引擎对比高亮.png'
import Reveal from '@/components/Reveal'
import SectionGlow from '@/components/SectionGlow'
import { useContent } from '@/i18n/context'

const content = {
  zh: {
    title: '一句原文，看清不同模型怎么翻',
    desc: '依次获取多个翻译引擎的结果，自动标出与基准译文的差异。用词、增译、漏译，一眼看清。',
    highlights: [
      { icon: GitCompare, label: '多引擎同时对比' },
      { icon: Highlighter, label: '差异自动高亮' },
      { icon: ArrowLeftRight, label: '结果快速切换' },
    ],
    imgAlt: 'LingVa 多引擎对比翻译，展示不同引擎的译文差异高亮',
  },
  en: {
    title: 'One sentence, see how each model translates it',
    desc: 'Compare results from several translation engines and automatically highlight differences from the baseline translation. Word choice, additions and omissions — all visible at a glance.',
    highlights: [
      { icon: GitCompare, label: 'Compare engines side by side' },
      { icon: Highlighter, label: 'Differences highlighted' },
      { icon: ArrowLeftRight, label: 'Switch results quickly' },
    ],
    imgAlt: 'LingVa multi-engine comparison with translation differences highlighted',
  },
}

export default function Compare() {
  const t = useContent(content)

  return (
    <section id="compare" className="relative overflow-hidden bg-[#F8FAFC] px-6 py-16 sm:py-20">
      <SectionGlow position="left" />
      <Reveal className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="order-2 lg:order-1">
          <ScreenshotCard src={compareImg} alt={t.imgAlt} />
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs font-medium tracking-wide text-brand uppercase">
            Multi-model comparison
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-balance text-gray-900 sm:text-4xl">
            {t.title}
          </h2>

          <p className="mt-4 max-w-lg text-gray-500">
            {t.desc}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {t.highlights.map((item) => (
              <span
                key={item.label}
                className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700"
              >
                <item.icon className="h-4 w-4 text-brand" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
