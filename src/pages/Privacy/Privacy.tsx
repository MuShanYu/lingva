const items = [
  {
    title: 'API 密钥',
    body: '只保存在你自己的浏览器本地（chrome.storage），不会发送给 LingVa 或任何第三方。',
  },
  {
    title: '要翻译的内容',
    body: '由浏览器直接发送给你自己选择的翻译引擎，LingVa 没有自建服务器，不会经手、也看不到这些内容。',
  },
  {
    title: '翻译历史与生词本',
    body: '保存在本机浏览器的 IndexedDB 中，卸载扩展或清除浏览器数据会一并清除，目前不支持跨设备同步。',
  },
  {
    title: '用量与成本统计',
    body: '仅用于本地「用量与成本」页面的展示，同样只存在本机，不会上传，也不用于其他任何用途。',
  },
]

export default function Privacy() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-32 text-gray-700">
      <h1 className="text-3xl font-semibold text-gray-900">隐私政策</h1>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-500">
        LingVa 没有自己的服务器，所有数据都留在你自己的电脑上。以下是每一类数据的具体去向：
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-base font-medium text-gray-900">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
