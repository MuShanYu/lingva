export default function Cta() {
  return (
    <section className="bg-[#0e1017] px-6 py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-white/10 px-8 py-16 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">现在就试试 LingVa</h2>
        <p className="max-w-md text-white/60">
          免费安装，几秒钟接入你常用的翻译引擎，从此告别在多个网页之间来回切换。
        </p>
        <a
          href="#download"
          className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-dark"
        >
          添加到 Chrome
        </a>
      </div>
    </section>
  )
}
