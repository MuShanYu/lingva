import { IconKey, IconDoc, IconBook, IconChartLine, IconImage } from '@/components/icons'
import Reveal from '@/components/Reveal'
import { useContent } from '@/i18n/context'

const content = {
  zh: {
    title: '你的翻译，只属于你',
    desc: '本地优先不是一句口号，而是每一类数据的默认去向。漫画图片识别会使用单独的识别服务，且只用于识别、不保存。',
    items: [
      { icon: IconKey, title: 'API 密钥', desc: '仅保存在本机 chrome.storage，不经过任何中间服务器。' },
      { icon: IconDoc, title: '翻译内容', desc: '由浏览器直接发送给你自己配置的翻译引擎，LingVa 不设代理、不经手内容。' },
      { icon: IconBook, title: '历史与生词本', desc: '仅保存在本机浏览器的 IndexedDB 中，随时可清空。' },
      { icon: IconChartLine, title: '用量统计', desc: '无埋点、不上传，所有统计数据只在本机计算与存储。' },
      { icon: IconImage, title: '漫画图片', desc: '只发给图片识别服务识别文字，服务器不保存图片，也不保存 IP 地址。' },
    ],
  },
  en: {
    title: 'Your translations belong to you',
    desc: 'Local-first isn’t a slogan — it’s where every kind of data goes by default. Manga image recognition uses a separate recognition service, used for recognition only and never stored.',
    items: [
      { icon: IconKey, title: 'API keys', desc: 'Stored only in your local chrome.storage, never routed through any intermediate server.' },
      { icon: IconDoc, title: 'Translated text', desc: 'Sent by your browser directly to the engine you configured. LingVa runs no proxy and never touches your content.' },
      { icon: IconBook, title: 'History & vocabulary', desc: 'Stored only in your browser’s IndexedDB, and can be cleared anytime.' },
      { icon: IconChartLine, title: 'Usage stats', desc: 'No tracking, no uploads. All statistics are computed and stored locally.' },
      { icon: IconImage, title: 'Manga images', desc: 'Sent only to the image recognition service to read text. The server stores neither images nor IP addresses.' },
    ],
  },
}

export default function Trust() {
  const t = useContent(content)

  return (
    <section id="trust" className="bg-white px-6 py-16 sm:py-20">
      <Reveal className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">{t.title}</h2>
          <p className="mt-4 text-gray-500">
            {t.desc}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6">
              <item.icon className="h-6 w-6 text-brand" />
              <h3 className="mt-4 text-sm font-medium text-gray-900">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
