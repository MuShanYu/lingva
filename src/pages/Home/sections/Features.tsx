import SpotlightCard from '@/components/react-bits/SpotlightCard'
import { features } from '@/data/features'

export default function Features() {
  return (
    <section id="features" className="bg-[#0b0d12] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            翻译要用到的场景，都在这一个扩展里
          </h2>
          <p className="mt-4 text-white/60">
            从划词、整页到 PDF、字幕，LingVa 把不同场景下的翻译需求收进同一个入口。
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <SpotlightCard
              key={feature.title}
              spotlightColor="rgba(22, 119, 255, 0.25)"
              className="text-left"
            >
              <h3 className="text-lg font-medium text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{feature.description}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
