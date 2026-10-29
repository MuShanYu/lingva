import BrowserFrame from '@/components/mockups/BrowserFrame'
import pdfImg from '@/assets/img/PDF 双语阅读器.png'
import Reveal from '@/components/Reveal'
import SectionGlow from '@/components/SectionGlow'
import { useContent } from '@/i18n/context'

const content = {
  zh: {
    title: 'PDF 与文档，原版式对照着读',
    desc: '译文直接替换在原文所在的位置，字体、颜色与版式保持不变，和原文逐页对照；旋转文字和竖排的中日文也能原位替换。扫描页一键识别后同样原位替换；多栏、表格较多的复杂页面可以开启版面增强，分段更准确。',
    note: '翻译好的 PDF 可以用浏览器「另存为 PDF」导出。同一套阅读器还支持 Markdown、TXT、SRT、HTML，格式与排版保持不变，并可按原格式导出。',
    imgAlt: 'LingVa PDF 双语阅读器，左栏原文右栏译文对照',
  },
  en: {
    title: 'Read PDFs and documents in their original layout',
    desc: 'Translations replace the original text right where it sits, keeping its fonts, colors and layout, page by page next to the original. Rotated text and vertical Chinese and Japanese are replaced in place too. Scanned pages are recognized with one click and replaced the same way, and complex pages with columns or many tables can use layout enhancement for more accurate paragraphs.',
    note: 'Translated PDFs can be saved with the browser’s “Save as PDF”. The same reader also supports Markdown, TXT, SRT and HTML, with formatting and layout preserved and export in the original format.',
    imgAlt: 'LingVa bilingual PDF reader with the original on the left and the translation on the right',
  },
}

export default function Reading() {
  const t = useContent(content)

  return (
    <section id="reading" className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24">
      <SectionGlow position="left" />
      <Reveal className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <BrowserFrame url="pdf-reader · test4.pdf" noPadding>
            <div className="h-[260px] overflow-hidden sm:h-[360px]">
              <img
                src={pdfImg}
                alt={t.imgAlt}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </BrowserFrame>
        </div>

        <div className="order-1 lg:order-2">
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
      </Reveal>
    </section>
  )
}
