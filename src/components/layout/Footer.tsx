import { Link } from 'react-router-dom'

const navItems = [
  { href: '#overview', label: '功能' },
  { href: '#engines', label: '引擎' },
  { href: '#', label: '文档' },
  { href: '/privacy', label: '隐私' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0d12] px-6 py-12 text-sm text-white/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="text-center sm:text-left">
          <Link to="/" className="flex items-center justify-center gap-2 text-base font-semibold text-white sm:justify-start">
            <img src={`${import.meta.env.BASE_URL}favicon.png`} alt="LingVa" className="h-6 w-6" />
            LingVa
          </Link>
          <p className="mt-2 text-xs text-white/40">翻译，不应该打断你的阅读。</p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <p className="mt-8 text-center text-xs text-white/30">
        © {new Date().getFullYear()} LingVa.
      </p>
    </footer>
  )
}
