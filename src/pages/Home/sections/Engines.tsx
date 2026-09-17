import BrowserFrame from '@/components/mockups/BrowserFrame'
import EngineList from '@/components/mockups/EngineList'
import engineImg from '@/assets/img/设置页的引擎选择器.png'

export default function Engines() {
  return (
    <section id="engines" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="text-xs font-medium tracking-wide text-brand uppercase">
            Your text. Your model. Your choice.
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
            你的文本，你选的模型
          </h2>
          <p className="mt-4 max-w-lg text-gray-500">
            四个传统机翻引擎负责又快又稳，OpenRouter 与任意 OpenAI 兼容端点负责又准又可控，价格、模型目录、系统提示词都能在设置页自定义。
          </p>

          <div className="mt-10">
            <EngineList />
          </div>
        </div>

        <div>
          <BrowserFrame url="options.html#/engines" noPadding>
            <div className="h-[280px] overflow-hidden sm:h-[420px]">
              <img
                src={engineImg}
                alt="LingVa 设置页的引擎与 AI 服务商选择器"
                className="w-full object-cover object-top"
              />
            </div>
          </BrowserFrame>
        </div>
      </div>
    </section>
  )
}
