import { overviewTiles } from '@/data/overview'
import Reveal from '@/components/Reveal'

export default function Overview() {
  return (
    <section id="overview" className="bg-white px-6 py-24">
      <Reveal className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium tracking-wide text-brand uppercase">
            One extension. Seven ways to understand.
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
            从网页到视频、PDF、文档与漫画，翻译需求一个扩展全覆盖
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {overviewTiles.map((tile) =>
            tile.image ? (
              <a
                key={tile.id}
                href={tile.href}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:border-brand/30 hover:shadow-xl hover:shadow-gray-200/60"
              >
                <div className="h-36 overflow-hidden border-b border-gray-100 bg-gray-50">
                  <img
                    src={tile.image}
                    alt={tile.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    style={{ objectPosition: tile.position }}
                  />
                </div>
                <div className="p-5">
                  <tile.icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
                  <h3 className="mt-3 text-sm font-medium text-gray-900">{tile.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">{tile.description}</p>
                </div>
              </a>
            ) : (
              <a
                key={tile.id}
                href={tile.href}
                className="group flex items-center gap-5 rounded-2xl border border-gray-200 bg-gradient-to-r from-brand/5 to-accent-purple/5 p-6 transition hover:border-brand/30 hover:shadow-xl hover:shadow-gray-200/60 sm:col-span-2 lg:col-span-3"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
                  <tile.icon className="h-6 w-6 text-brand" strokeWidth={1.75} />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-gray-900">{tile.title}</h3>
                    <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[11px] font-medium text-brand">新功能</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{tile.description}</p>
                </div>
              </a>
            ),
          )}
        </div>
      </Reveal>
    </section>
  )
}
