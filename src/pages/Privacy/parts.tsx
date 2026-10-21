import type { ReactNode } from 'react'

export const SERVER_REPO = 'https://github.com/MuShanYu/lingva-image-server-pub'
export const CONTACT_EMAIL = 'mushanyu66@proton.me'

// 中英文两份隐私政策共用的排版组件
export function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-14 text-xl font-semibold text-gray-900">{children}</h2>
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-8 text-base font-medium text-gray-900">{children}</h3>
}

export function H4({ children }: { children: ReactNode }) {
  return <h4 className="mt-6 text-sm font-medium text-gray-900">{children}</h4>
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-gray-500">{children}</p>
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-500">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

export function B({ children }: { children: ReactNode }) {
  return <strong className="font-medium text-gray-700">{children}</strong>
}

export function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-brand hover:underline">
      {children}
    </a>
  )
}
