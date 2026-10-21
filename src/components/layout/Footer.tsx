import { Link } from 'react-router-dom'
import { HashLink } from '@/components/layout/HashLink'
import { useContent } from '@/i18n/context'

const content = {
  zh: {
    navItems: [
      { href: '#overview', label: '功能' },
      { href: '#engines', label: '引擎' },
      { href: '/help', label: '帮助' },
      { href: '/privacy', label: '隐私' },
    ],
    tagline: '翻译，不应该打断你的阅读。',
  },
  en: {
    navItems: [
      { href: '#overview', label: 'Features' },
      { href: '#engines', label: 'Engines' },
      { href: '/help', label: 'Help' },
      { href: '/privacy', label: 'Privacy' },
    ],
    tagline: 'Translation shouldn’t interrupt your reading.',
  },
}

export default function Footer() {
  const t = useContent(content)

  return (
    <footer className="border-t border-white/10 bg-[#0b0d12] px-6 py-12 text-sm text-white/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="text-center sm:text-left">
          <Link to="/" className="flex items-center justify-center gap-2 text-base font-semibold text-white sm:justify-start">
            <img src={`${import.meta.env.BASE_URL}favicon.png`} alt="LingVa" className="h-6 w-6" />
            LingVa
          </Link>
          <p className="mt-2 text-xs text-white/40">{t.tagline}</p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {t.navItems.map((item) => (
            <HashLink key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </HashLink>
          ))}
        </nav>
      </div>

      <p className="mt-8 text-center text-xs text-white/30">
        © {new Date().getFullYear()} LingVa.
      </p>
    </footer>
  )
}
