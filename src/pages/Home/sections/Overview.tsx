import { overviewTiles } from '@/data/overview'
import Reveal from '@/components/Reveal'
import { useLocale } from '@/i18n/context'

const content = {
  zh: {
    title: '从一句话到一整部作品，阅读场景都能接上翻译',
    newBadge: '新功能',
  },
  en: {
    title: 'From a single word to an entire manga, translate as you read',
    newBadge: 'New',
  },
}

export default function Overview() {
  const { locale } = useLocale()
  const t = content[locale]

  return (
    <section id="overview" className="bg-white px-6 py-16 sm:py-20">
      <Reveal className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-medium tracking-wide text-brand uppercase">
            One extension · Seven reading scenarios
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-balance text-gray-900 sm:text-4xl">
            {t.title}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {overviewTiles.map((tile) =>
            tile.image ? (
              <a
                key={tile.id}
                href={tile.href}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:border-brand/30 hover:shadow-xl hover:shadow-gray-200/60"
              >
                <div className="h-40 overflow-hidden border-b border-gray-100 bg-gray-50">
                  <img
                    src={tile.image}
                    alt={tile.title[locale]}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    style={{ objectPosition: tile.position }}
                  />
                </div>
                <div className="p-5">
                  <tile.icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
                  <h3 className="mt-3 text-sm font-medium text-gray-900">{tile.title[locale]}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">{tile.description[locale]}</p>
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
                    <h3 className="text-sm font-medium text-gray-900">{tile.title[locale]}</h3>
                    <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[11px] font-medium text-brand">{t.newBadge}</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{tile.description[locale]}</p>
                </div>
              </a>
            ),
          )}
        </div>
      </Reveal>
    </section>
  )
}
