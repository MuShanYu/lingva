import { Link } from 'react-router-dom'

const navItems = [
  { href: '#features', label: '功能' },
  { href: '#workflow', label: '使用方式' },
  { href: '#stats', label: '数据' },
]

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0d12]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-white">
          <img src={`${import.meta.env.BASE_URL}favicon.png`} alt="LingVa" className="h-7 w-7" />
          LingVa
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/70 sm:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#download"
          className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-dark"
        >
          添加到 Chrome
        </a>
      </div>
    </header>
  )
}
