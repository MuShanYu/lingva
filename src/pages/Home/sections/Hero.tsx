import Aurora from '@/components/react-bits/Aurora'
import SplitText from '@/components/react-bits/SplitText'
import BlurText from '@/components/react-bits/BlurText'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <Aurora colorStops={['#1677ff', '#7c3aed', '#1677ff']} amplitude={1.0} blend={0.5} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0d12]/40 to-[#0b0d12]" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <span className="mb-6 rounded-full border border-white/15 px-4 py-1 text-xs text-white/70">
          浏览器翻译扩展
        </span>

        <SplitText
          text="一个扩展，翻遍全网"
          tag="h1"
          className="text-4xl font-semibold text-white sm:text-6xl"
          splitType="words"
        />

        <BlurText
          text="LingVa 汇聚多家翻译引擎，覆盖网页、文档、字幕与生词复习，所有数据只留在你的电脑里。"
          className="mt-6 max-w-xl text-base text-white/60 sm:text-lg"
          animateBy="words"
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            id="download"
            href="#"
            className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-dark"
          >
            添加到 Chrome · 免费
          </a>
          <a
            href="#features"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
          >
            查看功能
          </a>
        </div>
      </div>
    </section>
  )
}
