import ScreenshotCard from '@/components/mockups/ScreenshotCard'
import compareImg from '@/assets/img/多引擎对比高亮.png'

export default function Compare() {
  return (
    <section id="compare" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-medium tracking-wide text-brand uppercase">
          Multi-model comparison
        </span>
        <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
          一句原文，多个答案
        </h2>
        <p className="mt-4 text-gray-500">
          勾选多个引擎或模型，一次翻译同屏对比结果，与基准译文的差异会被高亮标出，直接看出哪个引擎译得更准。
        </p>

        <div className="mt-12 flex justify-center">
          <ScreenshotCard
            src={compareImg}
            alt="LingVa 多引擎对比翻译，展示不同引擎的译文差异高亮"
            className="max-w-sm"
          />
        </div>
      </div>
    </section>
  )
}
