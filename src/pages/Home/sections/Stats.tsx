import CountUp from '@/components/react-bits/CountUp'

const stats = [
  { to: 10, suffix: '+', label: '翻译服务商可选' },
  { to: 5, suffix: '', label: '种文档格式互译' },
  { to: 4, suffix: '', label: '大视频平台双语字幕' },
  { to: 100, suffix: '%', label: '数据本地存储' },
]

export default function Stats() {
  return (
    <section id="stats" className="border-y border-white/10 bg-[#0e1017] px-6 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="flex items-center justify-center text-4xl font-semibold text-white">
              <CountUp to={stat.to} duration={1.5} />
              <span>{stat.suffix}</span>
            </div>
            <p className="mt-2 text-sm text-white/50">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
