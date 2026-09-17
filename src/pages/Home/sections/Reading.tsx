import BrowserFrame from '@/components/mockups/BrowserFrame'
import pdfImg from '@/assets/img/PDF 双语阅读器.png'

export default function Reading() {
  return (
    <section id="reading" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <BrowserFrame url="pdf-reader · test4.pdf" noPadding>
            <div className="h-[260px] overflow-hidden sm:h-[360px]">
              <img
                src={pdfImg}
                alt="LingVa PDF 双语阅读器，左栏原文右栏译文对照"
                className="w-full object-cover object-top"
              />
            </div>
          </BrowserFrame>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs font-medium tracking-wide text-brand uppercase">
            PDF &amp; document
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
            PDF 与文档，双栏对照着读
          </h2>
          <p className="mt-4 max-w-lg text-gray-500">
            左栏还原原版式，右栏重新排版展示译文，标题、列表、代码块、表格与图片各自识别、分别处理，扫描件会被自动识别并提示，不会误报翻译成功。
          </p>
          <p className="mt-4 max-w-lg text-sm text-gray-400">
            同一套阅读器还支持 Markdown、TXT、SRT、HTML，格式与排版保持不变。
          </p>
        </div>
      </div>
    </section>
  )
}
