import ScreenshotCard from '@/components/mockups/ScreenshotCard'
import pdfImg from '@/assets/img/PDF 双语阅读器.png'
import Reveal from '@/components/Reveal'
import SectionGlow from '@/components/SectionGlow'
import { useContent } from '@/i18n/context'

const content = {
  zh: {
    title: 'PDF、TXT、Markdown、SRT、HTML，集中翻译与阅读',
    desc: 'PDF 支持原文与译文双页对照；扫描件可进行文字识别，复杂页面可选择版面分析。TXT、Markdown、SRT、HTML 则采用适合文本阅读的双语对照方式。不同格式，共用语言与翻译引擎设置。',
    note: '无需在多个工具之间切换：保留各格式适合的阅读方式，并提供原文与译文切换。',
    imgAlt: 'LingVa PDF 双语阅读器，左栏原文右栏译文对照',
  },
  en: {
    title: 'Translate PDFs, TXT, Markdown, SRT and HTML in one reader',
    desc: 'Read PDFs side by side with their translations, recognize scanned pages and optionally analyze complex layouts. TXT, Markdown, SRT and HTML use a text-friendly bilingual view. Every format shares language and translation engine settings.',
    note: 'Keep the reading experience suited to each file type, and switch between original and translated text without changing tools.',
    imgAlt: 'LingVa bilingual PDF reader with the original on the left and the translation on the right',
  },
}

export default function Reading() {
  const t = useContent(content)

  return (
    <section id="reading" className="relative overflow-hidden bg-white px-6 py-24">
      <SectionGlow position="right" />
      <Reveal className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="text-xs font-medium tracking-wide text-brand uppercase">
            PDF &amp; document
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-lg text-gray-500">
            {t.desc}
          </p>
          <p className="mt-4 max-w-lg text-sm text-gray-400">
            {t.note}
          </p>
        </div>

        <ScreenshotCard src={pdfImg} alt={t.imgAlt} />
      </Reveal>
    </section>
  )
}
