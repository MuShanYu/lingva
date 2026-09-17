import { Link } from 'react-router-dom'
import { IconGithub } from '@/components/icons'

const navItems = [
  { href: '#overview', label: '功能' },
  { href: '#engines', label: '引擎' },
  { href: '#', label: '文档' },
  { href: '/privacy', label: '隐私' },
]

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-gray-900">
          <img src={`${import.meta.env.BASE_URL}favicon.png`} alt="LingVa" className="h-7 w-7" />
          LingVa
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-gray-600 sm:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-gray-900">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="GitHub"
            className="hidden text-gray-500 transition hover:text-gray-900 sm:block"
          >
            <IconGithub className="h-5 w-5" />
          </a>
          <a
            href="#download"
            className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-dark"
          >
            添加到 Chrome
          </a>
        </div>
      </div>
    </header>
  )
}
