import ScreenshotCard from '@/components/mockups/ScreenshotCard'
import SettingsCardMock from '@/components/mockups/SettingsCardMock'
import PlatformList from '@/components/mockups/PlatformList'
import subtitleImg from '@/assets/img/视频双语字幕.png'
import Reveal from '@/components/Reveal'
import SectionGlow from '@/components/SectionGlow'

export default function Video() {
  return (
    <section id="video" className="relative overflow-hidden bg-white px-6 py-24">
      <SectionGlow position="left" />
      <Reveal className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium tracking-wide text-brand uppercase">
            Video subtitles
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
            从看视频开始学语言
          </h2>
          <p className="mt-4 text-gray-500">
            YouTube、TED、Bilibili、Coursera 一键开启双语字幕，把追剧、看讲座变成一次学习的过程。
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
          <ScreenshotCard
            src={subtitleImg}
            alt="LingVa 视频双语字幕，TED 演讲双语对照"
            className="h-full min-h-[320px] object-cover"
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
