import ScreenshotCard from '@/components/mockups/ScreenshotCard'
import SettingsCardMock from '@/components/mockups/SettingsCardMock'
import PlatformList from '@/components/mockups/PlatformList'
import subtitleImg from '@/assets/img/视频双语字幕.png'
import Reveal from '@/components/Reveal'
import SectionGlow from '@/components/SectionGlow'
import { useContent } from '@/i18n/context'

const content = {
  zh: {
    title: '视频不停，原文与译文一起看',
    desc: 'YouTube、TED、Bilibili、Coursera 一键开启双语字幕，原文和译文同屏展示，跟上视频内容，也能顺手学语言。',
    imgAlt: 'LingVa 视频双语字幕，TED 演讲双语对照',
  },
  en: {
    title: 'Keep watching with bilingual subtitles',
    desc: 'Turn on bilingual subtitles on YouTube, TED, Bilibili and Coursera in one click, Read the original and translated captions together without leaving the player.',
    imgAlt: 'LingVa bilingual video subtitles on a TED talk',
  },
}

export default function Video() {
  const t = useContent(content)

  return (
    <section id="video" className="relative overflow-hidden bg-[#F8FAFC] px-6 py-16 sm:py-20">
      <SectionGlow position="left" />
      <Reveal className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium tracking-wide text-brand uppercase">
            Video subtitles
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-gray-500">
            {t.desc}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
          <ScreenshotCard
            src={subtitleImg}
            alt={t.imgAlt}
            className="w-full object-contain"
          />

          <div className="space-y-6">
            <PlatformList />
            <SettingsCardMock />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
