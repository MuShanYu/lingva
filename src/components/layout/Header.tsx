import { Link } from 'react-router-dom'
import { HashLink } from '@/components/layout/HashLink'
import LocaleSwitch from '@/i18n/LocaleSwitch'
import { useContent } from '@/i18n/context'

const content = {
  zh: {
    navItems: [
      { href: '#overview', label: '功能' },
      { href: '#engines', label: '引擎' },
      { href: '/help', label: '帮助' },
      { href: '/privacy', label: '隐私' },
    ],
    cta: '获取 LingVa',
  },
  en: {
    navItems: [
      { href: '#overview', label: 'Features' },
      { href: '#engines', label: 'Engines' },
      { href: '/help', label: 'Help' },
      { href: '/privacy', label: 'Privacy' },
    ],
    cta: 'Get LingVa',
  },
}

export default function Header() {
  const t = useContent(content)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-gray-900">
          <img src={`${import.meta.env.BASE_URL}favicon.png`} alt="LingVa" className="h-7 w-7" />
          LingVa
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-gray-600 md:flex">
          {t.navItems.map((item) => (
            <HashLink key={item.href} href={item.href} className="transition hover:text-gray-900">
              {item.label}
            </HashLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitch />
          <HashLink
            href="https://github.com/MuShanYu/lingva"
            className="rounded-full bg-brand px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition hover:bg-brand-dark"
          >
            {t.cta}
          </HashLink>
        </div>
      </div>
    </header>
  )
}
