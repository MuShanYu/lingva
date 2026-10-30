import type { ReactNode } from 'react'
import { LocaleProvider } from '@/i18n/LocaleProvider'

/** 客户端入口与预渲染入口共用的全局 Provider */
export default function AppProviders({ children }: { children: ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>
}
