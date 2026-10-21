import type { ReactNode } from 'react'

export const SERVER_REPO = 'https://github.com/MuShanYu/lingva-image-server-pub'
export const ISSUES_URL = `${SERVER_REPO}/issues`
export const HOMEPAGE = 'https://lingva.mushanyu.xyz/'
export const CONTACT_EMAIL = 'mushanyu66@proton.me'

export function Mail() {
  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">
      {CONTACT_EMAIL}
    </a>
  )
}

// 中英文两份隐私政策共用的排版组件
export function Page({ title, meta, children }: { title: string; meta: string[]; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-32 text-gray-700">
      <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
      <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-gray-400">
        {meta.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </p>
      {children}
    </section>
  )
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className="mt-6 text-sm leading-relaxed text-gray-500">{children}</p>
}

export function H2({ no, children }: { no: number; children: ReactNode }) {
  return (
    <h2 className="mt-14 border-t border-gray-100 pt-6 text-xl font-semibold text-gray-900">
      <span className="mr-2 font-mono font-medium text-brand">{no}</span>
      {children}
    </h2>
  )
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-8 text-base font-medium text-gray-900">{children}</h3>
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

export function Code({ children }: { children: ReactNode }) {
  return <code className="rounded bg-brand/5 px-1.5 py-0.5 font-mono text-[0.88em] text-gray-700">{children}</code>
}

export function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="break-words text-brand hover:underline">
      {children}
    </a>
  )
}

/** 顶部要点速览表：第二列按 yes / no 着色，一眼看出哪些数据会发给我们 */
export interface SummaryRow {
  data: string
  sent: string
  tone: 'yes' | 'no'
  note: string
}

export function SummaryTable({ headers, rows }: { headers: [string, string, string]; rows: SummaryRow[] }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-gray-50 text-xs text-gray-500">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 font-medium whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {rows.map((row) => (
            <tr key={row.data} className="border-t border-gray-100">
              <td className="px-4 py-3 align-top font-medium text-gray-900">{row.data}</td>
              <td
                className={`px-4 py-3 align-top font-medium ${row.tone === 'yes' ? 'text-emerald-700' : 'text-rose-700'}`}
              >
                {row.sent}
              </td>
              <td className="px-4 py-3 align-top">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Footnote({ children }: { children: ReactNode }) {
  return <p className="mt-14 border-t border-gray-100 pt-6 text-xs leading-relaxed text-gray-400">{children}</p>
}
