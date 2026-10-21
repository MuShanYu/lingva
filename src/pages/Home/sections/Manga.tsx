import { siPixiv } from 'simple-icons'
import mangaImg from '@/assets/img/漫画翻译.png'
import ScreenshotCard from '@/components/mockups/ScreenshotCard'
import Reveal from '@/components/Reveal'
import SectionGlow from '@/components/SectionGlow'
import { useContent } from '@/i18n/context'

const SERVER_REPO = 'https://github.com/MuShanYu/lingva-image-server-pub'

const content = {
  zh: {
    title: '在原网站上读翻译好的漫画',
    desc: '识别图片里的文字、擦掉原文，再用你选择的翻译引擎把译文排回每一页，不用下载、不用换阅读器。',
    sites: [
      { name: 'pixiv', hex: siPixiv.hex, path: siPixiv.path },
      { name: 'カドコミ' },
      { name: '少年ジャンプ+' },
      { name: 'コミックDAYS 等 GigaViewer 站点' },
    ],
    points: [
      { title: '整部作品一起翻译', desc: '从悬浮球菜单打开漫画翻译面板，点一次开始；也可以按网站开启自动翻译，打开作品就开始。' },
      { title: '译文直接盖在原图上', desc: '擦掉原文后按气泡排版译文，译成中文、日文时可跟随原文竖排；按住 Ctrl 随时查看原图。' },
      { title: '进度一眼看清', desc: '面板显示整部作品进度、当前页附近的逐页状态和失败页，可暂停、继续、重新翻译本页。' },
      { title: '出错不打断阅读', desc: '单页失败只在这一页提示并可重试；服务繁忙时整部作品自动等待重试，恢复后从中断处继续。' },
    ],
    imageAlt: '在漫画网站上翻译漫画：译文直接排进气泡，右侧是漫画翻译进度面板',
    errorTitle: '识别失败，请重试',
    retry: '重试',
    serviceBefore:
      '图片识别由 LingVa 官方识别服务完成：免注册，每天有免费额度，赞助可获得更多额度；识别过的页面会缓存在本机，再次阅读不消耗额度。也可以部署',
    serviceLink: '开源的识别服务端',
    serviceAfter: '，不限额度。开源服务端与官方服务使用同样的识别与擦字算法，效果完全一样，没有任何功能阉割。',
  },
  en: {
    title: 'Read translated manga right on the original site',
    desc: 'LingVa recognizes the text in each image, erases the original, and typesets the translation from your chosen engine back onto every page — no downloads, no switching readers.',
    sites: [
      { name: 'pixiv', hex: siPixiv.hex, path: siPixiv.path },
      { name: 'カドコミ' },
      { name: '少年ジャンプ+' },
      { name: 'コミックDAYS and other GigaViewer sites' },
    ],
    points: [
      { title: 'Translate a whole work at once', desc: 'Open the manga panel from the floating ball menu and start with one click — or enable auto-translate per site so it starts as soon as you open a work.' },
      { title: 'Translations laid over the artwork', desc: 'The original text is erased and the translation is typeset into each bubble, vertically when translating into Chinese or Japanese. Hold Ctrl to peek at the original anytime.' },
      { title: 'Progress at a glance', desc: 'The panel shows overall progress, per-page status around the current page and failed pages. Pause, resume, or retranslate the current page.' },
      { title: 'Errors don’t break your reading', desc: 'A failed page shows a notice on that page only and can be retried. When the service is busy, the whole work waits and retries automatically, then resumes where it left off.' },
    ],
    imageAlt: 'Translating manga on a manga site: translations typeset into the bubbles, with the manga translation progress panel on the right',
    errorTitle: 'Recognition failed, please retry',
    retry: 'Retry',
    serviceBefore:
      'Image recognition is handled by the official LingVa recognition service: no sign-up, a free daily quota, and more quota for sponsors. Recognized pages are cached locally, so rereading costs no quota. You can also deploy the ',
    serviceLink: 'open-source recognition server',
    serviceAfter:
      ' with no quota limits. It uses exactly the same recognition and text-removal algorithms as the official service — same results, no features held back.',
  },
}

export default function Manga() {
  const t = useContent(content)

  return (
    <section id="manga" className="relative overflow-hidden bg-white px-6 py-24">
      <SectionGlow position="right" />
      <Reveal className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium tracking-wide text-brand uppercase">Manga translation · New</span>
          <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">{t.title}</h2>
          <p className="mt-4 text-gray-500">
            {t.desc}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {t.sites.map((site) => (
              <span
                key={site.name}
                className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-600"
              >
                {site.path && (
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" fill={`#${site.hex}`} aria-hidden>
                    <path d={site.path} />
                  </svg>
                )}
                {site.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col items-center gap-5">
            <ScreenshotCard src={mangaImg} alt={t.imageAlt} />
            {/* 单页失败时，页面右上角就地展开的小卡片 */}
            <div className="flex w-full max-w-[320px] items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-lg shadow-gray-200/60">
              <div className="min-w-0 flex-1">
                <p className="text-sm text-gray-900">{t.errorTitle}</p>
                <p className="text-xs text-gray-400">inference_failed · 500</p>
              </div>
              <span className="rounded-md bg-brand px-3 py-1 text-sm text-white">{t.retry}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {t.points.map((point) => (
              <div key={point.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-sm font-medium text-gray-900">{point.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">{point.desc}</p>
              </div>
            ))}
            <p className="text-xs leading-relaxed text-gray-400 sm:col-span-2">
              {t.serviceBefore}
              <a
                href={SERVER_REPO}
                target="_blank"
                rel="noreferrer"
                className="text-brand hover:underline"
              >
                {t.serviceLink}
              </a>
              {t.serviceAfter}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
