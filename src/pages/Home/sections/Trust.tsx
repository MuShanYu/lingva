import { IconKey, IconDoc, IconBook, IconChartLine } from '@/components/icons'

const items = [
  { icon: IconKey, title: 'API 密钥', desc: '仅保存在本机 chrome.storage，不经过任何中间服务器。' },
  { icon: IconDoc, title: '翻译内容', desc: '由浏览器直接发送给你自己配置的翻译引擎，LingVa 不设代理、不经手内容。' },
  { icon: IconBook, title: '历史与生词本', desc: '仅保存在本机浏览器的 IndexedDB 中，随时可清空。' },
  { icon: IconChartLine, title: '用量统计', desc: '无埋点、不上传，所有统计数据只在本机计算与存储。' },
]

export default function Trust() {
  return (
    <section id="trust" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">你的翻译，只属于你</h2>
          <p className="mt-4 text-gray-500">
            LingVa 没有自建后端，本地优先不是一句口号，而是每一类数据的默认去向。
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6">
              <item.icon className="h-6 w-6 text-brand" />
              <h3 className="mt-4 text-sm font-medium text-gray-900">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
