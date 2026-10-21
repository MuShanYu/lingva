import { LOCALES, useLocale, type Locale } from './context'

const labels: Record<Locale, string> = { zh: '中', en: 'EN' }

/** Header 右上角的语言切换：两种语言直接做成分段按钮，不用下拉。 */
export default function LocaleSwitch({ className = '' }: { className?: string }) {
  const { locale, setLocale } = useLocale()

  return (
    <div
      role="group"
      aria-label="Language"
      className={`flex items-center rounded-full border border-gray-200 bg-white p-0.5 text-xs font-medium ${className}`}
    >
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`rounded-full px-2.5 py-1 transition ${
            locale === l ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  )
}
