import { createContext, useContext } from 'react'

export type Locale = 'zh' | 'en'

export const LOCALES: Locale[] = ['zh', 'en']

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}

/**
 * 按当前语言从 `{ zh, en }` 文案对象里取一份。各组件把自己的文案就近写成
 * `const content = { zh: {...}, en: {...} }`，两份结构对不上时组件里的属性访问会类型报错。
 */
export type Localized<T> = Record<Locale, T>

export function useContent<T>(content: Localized<T>): T {
  return content[useLocale().locale]
}
