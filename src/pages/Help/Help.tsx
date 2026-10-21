import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLocale } from '@/i18n/context'
import { faqGroups, type FaqItem } from './faq'

const CONTACT_EMAIL = 'mushanyu66@proton.me'
const ISSUES_URL = 'https://github.com/MuShanYu/lingva-image-server-pub/issues'

const content = {
  zh: {
    title: '帮助中心',
    introBefore: '按功能分类整理的常见问题。找不到答案？欢迎发邮件到',
    introOr: '，或在',
    issueLink: 'GitHub 提交 Issue',
    introAfter: '。',
  },
  en: {
    title: 'Help center',
    introBefore: 'Frequently asked questions, organized by feature. Can’t find an answer? Email us at',
    introOr: ', or',
    issueLink: 'open an issue on GitHub',
    introAfter: '.',
  },
}

function FaqRow({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span className="text-sm font-medium text-gray-900">{item.q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`grid transition-all duration-200 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="pb-4 text-sm leading-relaxed text-gray-500">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Help() {
  const { locale } = useLocale()
  const t = content[locale]
  const [openId, setOpenId] = useState<string | null>('start-0')

  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-32 text-gray-700">
      <h1 className="text-3xl font-semibold text-gray-900">{t.title}</h1>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-500">
        {t.introBefore}{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">
          {CONTACT_EMAIL}
        </a>
        {t.introOr}{' '}
        <a href={ISSUES_URL} target="_blank" rel="noreferrer" className="text-brand hover:underline">
          {t.issueLink}
        </a>
        {t.introAfter}
      </p>

      <div className="mt-10 space-y-10">
        {faqGroups[locale].map((group) => (
          <div key={group.id}>
            <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-gray-400 uppercase">
              <group.icon className="h-3.5 w-3.5" />
              {group.title}
            </div>
            <div className="mt-3 rounded-2xl border border-gray-200 px-5">
              {group.items.map((item, idx) => {
                const id = `${group.id}-${idx}`
                return (
                  <FaqRow
                    key={id}
                    item={item}
                    isOpen={openId === id}
                    onToggle={() => setOpenId(openId === id ? null : id)}
                  />
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
