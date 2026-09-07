const steps = [
  {
    step: '01',
    title: '安装并配置引擎',
    description: '安装扩展后在设置页填入需要的翻译引擎密钥，或直接使用内置的免费引擎。',
  },
  {
    step: '02',
    title: '选中、悬浮或整页翻译',
    description: '划词弹出翻译面板，点击悬浮球整页翻译，网页、PDF、字幕都是同一套体验。',
  },
  {
    step: '03',
    title: '收藏生词并按计划复习',
    description: '把生词收进生词本，系统按记忆曲线提醒复习，翻译的同时顺便记单词。',
  },
]

export default function Workflow() {
  return (
    <section id="workflow" className="bg-[#0b0d12] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">三步开始使用</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step}>
              <span className="text-sm font-medium text-brand">{item.step}</span>
              <h3 className="mt-3 text-lg font-medium text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
