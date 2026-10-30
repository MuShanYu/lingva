import { useEffect, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { LocaleContext, LOCALES, type Locale } from './context'
import { getPageMeta } from './pageMeta'

const STORAGE_KEY = 'lingva-web:locale'

const htmlLang: Record<Locale, string> = { zh: 'zh-CN', en: 'en' }

/** 默认英文；用户手动切换过语言后记住选择。 */
function detectLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && (LOCALES as string[]).includes(saved)) return saved as Locale
  } catch {
    // 隐私模式等场景下 localStorage 可能不可用，退回默认语言
  }
  return 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale)

  // 标题和描述跟随当前页面与语言，切换路由或语言时都要更新
  const { pathname } = useLocation()
  useEffect(() => {
    const m = getPageMeta(pathname, locale)
    document.documentElement.lang = htmlLang[locale]
    document.title = m.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', m.description)
  }, [locale, pathname])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // 存不下就只在本次会话生效
    }
  }

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
}
