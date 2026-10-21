import BrowserFrame from '@/components/mockups/BrowserFrame'
import EngineList from '@/components/mockups/EngineList'
import engineImg from '@/assets/img/设置页的引擎选择器.png'
import Reveal from '@/components/Reveal'
import SectionGlow from '@/components/SectionGlow'
import { useContent } from '@/i18n/context'

const content = {
  zh: {
    title: '你的文本，你选的模型',
    desc: '四个传统机翻引擎负责又快又稳，OpenRouter 与任意 OpenAI 兼容端点负责又准又可控，价格、模型目录、系统提示词都能在设置页自定义。',
    imgAlt: 'LingVa 设置页的引擎与 AI 服务商选择器',
  },
  en: {
    title: 'Your text, your model',
    desc: 'Four classic machine translation engines keep things fast and stable, while OpenRouter and any OpenAI-compatible endpoint bring accuracy and control. Pricing, the model catalog and system prompts are all customizable in settings.',
    imgAlt: 'LingVa settings page with the engine and AI provider picker',
  },
}

export default function Engines() {
  const t = useContent(content)

  return (
    <section id="engines" className="relative overflow-hidden bg-white px-6 py-24">
      <SectionGlow position="right" />
      <Reveal className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="text-xs font-medium tracking-wide text-brand uppercase">
            Your text. Your model. Your choice.
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-lg text-gray-500">
            {t.desc}
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
                alt={t.imgAlt}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </BrowserFrame>
        </div>
      </Reveal>
    </section>
  )
}
