import type { Locale } from './context'

export interface PageMeta {
  title: string
  description: string
}

/**
 * 各页面的 <title> 与 description。客户端由 LocaleProvider 按当前路由和语言写入，
 * 构建时 scripts/prerender.mjs 用其中的英文版写进预渲染的 HTML。新增页面时在这里加一项。
 */
export const pageMeta: Record<string, Record<Locale, PageMeta>> = {
  '/': {
    zh: {
      title: 'LingVa · 多引擎智能翻译浏览器扩展',
      description: 'LingVa —— 多引擎划词翻译、网页整页翻译、双语字幕与 PDF/文档翻译的浏览器扩展',
    },
    en: {
      title: 'LingVa · Multi-engine translation browser extension',
      description:
        'LingVa — a browser extension for multi-engine selection translation, full-page translation, bilingual subtitles and PDF/document translation',
    },
  },
  '/help': {
    zh: {
      title: '帮助中心 · LingVa',
      description: 'LingVa 常见问题：划词与网页翻译、视频字幕、PDF 与文档阅读、漫画翻译、翻译引擎与隐私。',
    },
    en: {
      title: 'Help Center · LingVa',
      description:
        'Frequently asked questions about LingVa: selection and page translation, video subtitles, PDF and document reading, manga translation, engines and privacy.',
    },
  },
  '/privacy': {
    zh: {
      title: 'LingVa 隐私政策',
      description: 'LingVa 浏览器扩展及官方图片识别服务如何处理你的数据：哪些只留在浏览器里、哪些会发送、发给谁。',
    },
    en: {
      title: 'LingVa Privacy Policy',
      description:
        'How the LingVa browser extension and its official image recognition service handle your data: what stays in your browser, what is sent, and to whom.',
    },
  },
}

/** 未登记的路径（比如 404 跳转过来的未知地址）沿用首页的标题 */
export function getPageMeta(pathname: string, locale: Locale): PageMeta {
  const path = pathname.replace(/(.)\/+$/, '$1')
  return (pageMeta[path] ?? pageMeta['/'])[locale]
}
