import { ArrowRight, CheckCircle2, ChartColumn, HardDrive, ImageIcon, Layers, ShieldCheck } from 'lucide-react'
import { siPixiv } from 'simple-icons'
import mangaImg from '@/assets/img/漫画翻译.png'
import ScreenshotCard from '@/components/mockups/ScreenshotCard'
import Reveal from '@/components/Reveal'
import SectionGlow from '@/components/SectionGlow'
import { useContent } from '@/i18n/context'

const pointStyles = [
  { icon: ImageIcon, tone: 'bg-blue-50 text-blue-600' },
  { icon: Layers, tone: 'bg-violet-50 text-violet-600' },
  { icon: ChartColumn, tone: 'bg-emerald-50 text-emerald-600' },
  { icon: ShieldCheck, tone: 'bg-orange-50 text-orange-600' },
]

const content = {
  zh: {
    eyebrow: '漫画翻译',
    title: '不离开原网站，直接阅读翻译后的漫画',
    desc: '识别气泡文字、清除原文，再将译文排回画面。整部作品一键翻译，不用下载图片，也不用切换阅读器。',
    preview: '真实插件界面',
    points: [
      { title: '译文直接回填画面', desc: '尽量保留漫画构图与气泡布局，支持中日文竖排；按住 Ctrl 可临时查看原图。' },
      { title: '整部作品一键翻译', desc: '从悬浮球打开翻译面板，或为支持的网站开启自动翻译。' },
      { title: '每页进度清晰可见', desc: '查看整体与逐页状态，随时暂停、继续或重试。' },
      { title: '失败页面可以重试', desc: '单页出错不会中断整部作品的阅读，服务繁忙时自动等待。' },
    ],
    benefits: [
      { icon: CheckCircle2, label: '提供每日免费识别额度' },
      { icon: HardDrive, label: '已识别结果保存在本地' },
      { icon: ShieldCheck, label: '支持自部署识别服务' },
    ],
    more: '了解漫画翻译与使用方法',
    imageAlt: 'LingVa 在漫画网站上的真实翻译界面与逐页进度面板',
  },
  en: {
    eyebrow: 'Manga translation',
    title: 'Read translated manga on the original website',
    desc: 'Recognize speech-bubble text, remove the original and typeset translations back into the artwork. Translate an entire work without downloading pages or changing readers.',
    preview: 'Actual extension preview',
    points: [
      { title: 'Translations inside the artwork', desc: 'Preserve the artwork and speech-bubble layout where possible. Chinese and Japanese vertical text is supported; hold Ctrl to reveal the original.' },
      { title: 'Translate a complete work', desc: 'Start from the floating panel, or turn on automatic translation for supported sites.' },
      { title: 'Know what is happening', desc: 'See overall and per-page progress, pause, resume or retry whenever you need.' },
      { title: 'Retry without losing your place', desc: 'A failed page does not interrupt the entire work; busy services are retried automatically.' },
    ],
    benefits: [
      { icon: CheckCircle2, label: 'Free daily recognition quota' },
      { icon: HardDrive, label: 'Recognition results cached locally' },
      { icon: ShieldCheck, label: 'Self-hosted recognition supported' },
    ],
    more: 'Explore manga translation help',
    imageAlt: 'Actual LingVa manga translation interface and page progress panel',
  },
}

const sites = [
  { name: 'pixiv', hex: siPixiv.hex, path: siPixiv.path },
  { name: 'カドコミ' },
  { name: '少年ジャンプ+' },
  { name: 'コミックDAYS / GigaViewer' },
]

export default function Manga() {
  const t = useContent(content)

  return (
    <section id="manga" className="relative overflow-hidden bg-[#F8FAFC] px-6 py-16 sm:py-20">
      <SectionGlow position="right" />
      <Reveal className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-widest text-brand uppercase">{t.eyebrow}</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">{t.desc}</p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2" aria-label="Supported manga sites">
          {sites.map((site) => (
            <span key={site.name} className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-600">
              {site.path && (
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" fill={`#${site.hex}`} aria-hidden="true">
                  <path d={site.path} />
                </svg>
              )}
              {site.name}
            </span>
          ))}
        </div>

        <div className="mt-9 grid items-stretch gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(300px,1fr)]">
          <div className="min-w-0 rounded-3xl border border-gray-200 bg-white p-3 shadow-sm sm:p-4">
            <div className="mb-3 flex items-center justify-between px-1">
              <span className="text-xs font-medium text-gray-700">{t.preview}</span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-700"><CheckCircle2 className="h-3.5 w-3.5" />LingVa</span>
            </div>
            <ScreenshotCard src={mangaImg} alt={t.imageAlt} className="shadow-none" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {t.points.map((point, i) => {
              const { icon: Icon, tone } = pointStyles[i]
              return (
                <div key={point.title} className="flex items-start gap-3 rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm sm:p-5">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tone}`}>
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900">{point.title}</h3>
                    <p className="mt-1.5 text-xs leading-6 text-gray-600 sm:text-sm">{point.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {t.benefits.map((item) => (
              <span key={item.label} className="flex items-center gap-2 text-xs text-gray-600">
                <item.icon className="h-4 w-4 text-brand" />{item.label}
              </span>
            ))}
          </div>
          <a href="/help" className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-brand hover:underline">
            {t.more}<ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </Reveal>
    </section>
  )
}
