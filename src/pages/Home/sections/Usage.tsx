import BrowserFrame from '@/components/mockups/BrowserFrame'
import usage1Img from '@/assets/img/用量-1.png'
import Reveal from '@/components/Reveal'
import SectionGlow from '@/components/SectionGlow'
import { useContent } from '@/i18n/context'

const content = {
  zh: {
    title: '看清你的 AI 用量',
    desc: '按引擎、按场景、按天统计请求量、Token 与花费，所有数据只在本机计算，不上传。',
    imgAlt: 'LingVa 用量与成本仪表盘：预算、今日消费、消费趋势与模型占比',
  },
  en: {
    title: 'See exactly how you use AI',
    desc: 'Requests, tokens and spending broken down by engine, scenario and day. All data is computed locally and never uploaded.',
    imgAlt: 'LingVa usage and cost dashboard: budget, today’s spending, spending trend and model share',
  },
}

export default function Usage() {
  const t = useContent(content)

  return (
    <section id="usage" className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24">
      <SectionGlow position="center" />
      <Reveal className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium tracking-wide text-brand uppercase">
            Usage dashboard
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-gray-500">
            {t.desc}
          </p>
        </div>

        <div className="mt-14">
          <BrowserFrame url="options.html#/usage" noPadding>
            <img src={usage1Img} alt={t.imgAlt} className="w-full" />
          </BrowserFrame>
        </div>
      </Reveal>
    </section>
  )
}
