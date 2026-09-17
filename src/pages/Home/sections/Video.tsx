import SettingsCardMock from '@/components/mockups/SettingsCardMock'
import PlatformList from '@/components/mockups/PlatformList'

export default function Video() {
  return (
    <section id="video" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
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
          <div className="h-full min-h-[320px] overflow-hidden rounded-2xl border border-gray-200 shadow-2xl shadow-gray-300/40">
            <iframe
              src="https://www.youtube.com/embed/eVFzbxmKNUw"
              title="YouTube 视频播放器"
              className="h-full min-h-[320px] w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="space-y-6">
            <PlatformList />
            <SettingsCardMock />
          </div>
        </div>
      </div>
    </section>
  )
}
