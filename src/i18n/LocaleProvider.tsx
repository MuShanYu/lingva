import { useEffect, useState, type ReactNode } from 'react'
import { LocaleContext, LOCALES, type Locale } from './context'

const STORAGE_KEY = 'lingva-web:locale'

const meta: Record<Locale, { htmlLang: string; title: string; description: string }> = {
  zh: {
    htmlLang: 'zh-CN',
    title: 'LingVa · 多引擎智能翻译浏览器扩展',
    description: 'LingVa —— 多引擎划词翻译、网页整页翻译、双语字幕与 PDF/文档翻译的浏览器扩展',
  },
  en: {
    htmlLang: 'en',
    title: 'LingVa · Multi-engine translation browser extension',
    description:
      'LingVa — a browser extension for multi-engine selection translation, full-page translation, bilingual subtitles and PDF/document translation',
  },
}

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

  useEffect(() => {
    const m = meta[locale]
    document.documentElement.lang = m.htmlLang
    document.title = m.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', m.description)
  }, [locale])

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
