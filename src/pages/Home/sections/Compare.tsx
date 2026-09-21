import { GitCompare, Highlighter, ArrowLeftRight } from 'lucide-react'
import ScreenshotCard from '@/components/mockups/ScreenshotCard'
import compareImg from '@/assets/img/多引擎对比高亮.png'
import Reveal from '@/components/Reveal'
import SectionGlow from '@/components/SectionGlow'

const highlights = [
  { icon: GitCompare, label: '多引擎同时对比' },
  { icon: Highlighter, label: '差异自动高亮' },
  { icon: ArrowLeftRight, label: '结果快速切换' },
]

export default function Compare() {
  return (
    <section id="compare" className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24">
      <SectionGlow position="right" />
      <Reveal className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="text-xs font-medium tracking-wide text-brand uppercase">
            Multi-model comparison
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
            一句原文，看清不同模型怎么翻
          </h2>

          <p className="mt-4 max-w-lg text-gray-500">
            同时调用多个翻译引擎，自动标出与基准译文的差异。用词、增译、漏译，一眼看清。
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {highlights.map((item) => (
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

        <div className="flex justify-center lg:justify-end">
          <ScreenshotCard
            src={compareImg}
            alt="LingVa 多引擎对比翻译，展示不同引擎的译文差异高亮"
            className="max-w-sm"
          />
        </div>
      </Reveal>
    </section>
  )
}
