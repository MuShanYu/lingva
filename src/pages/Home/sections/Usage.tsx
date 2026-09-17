import BrowserFrame from '@/components/mockups/BrowserFrame'
import usage1Img from '@/assets/img/用量-1.png'
import usage2Img from '@/assets/img/用量-2.png'

export default function Usage() {
  return (
    <section id="usage" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium tracking-wide text-brand uppercase">
            Usage dashboard
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
            看清你的 AI 用量
          </h2>
          <p className="mt-4 text-gray-500">
            按引擎、按场景、按天统计请求量、Token 与花费，所有数据只在本机计算，不上传。
          </p>
        </div>

        <div className="mt-14">
          <BrowserFrame url="options.html#/usage" noPadding>
            <img src={usage1Img} alt="LingVa 用量与成本仪表盘：预算、今日消费、消费趋势与模型占比" className="w-full" />
            <img
              src={usage2Img}
              alt="LingVa 用量与成本仪表盘：功能用量、引擎占比与服务商余额"
              className="w-full border-t border-gray-100"
            />
          </BrowserFrame>
        </div>
      </div>
    </section>
  )
}
