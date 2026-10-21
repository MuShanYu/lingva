import type { LucideIcon } from 'lucide-react'
import { TextSelect, Globe, Captions, FileText, FileStack, GitCompare, BookOpen } from 'lucide-react'
import selectionImg from '@/assets/img/划词翻译弹窗（带词典卡片）.png'
import webPageImg from '@/assets/img/网页翻译.png'
import videoImg from '@/assets/img/视频双语字幕-1.png'
import pdfImg from '@/assets/img/PDF 双语阅读器.png'
import documentImg from '@/assets/img/文档翻译.png'
import compareImg from '@/assets/img/多引擎对比高亮-1.png'

import type { Localized } from '@/i18n/context'

export interface OverviewTile {
  id: string
  title: Localized<string>
  description: Localized<string>
  icon: LucideIcon
  // 没有真实截图的功能（漫画翻译：截图里是商业漫画）不放图，整行展示
  image?: string
  position?: string
  href: string
}

export const overviewTiles: OverviewTile[] = [
  {
    id: 'selection',
    title: { zh: '划词翻译', en: 'Selection translation' },
    description: {
      zh: '选中文字即刻查看释义、音标与例句，随手收藏进生词本。',
      en: 'Select any text to see definitions, phonetics and examples instantly, and save words to your vocabulary list.',
    },
    icon: TextSelect,
    image: selectionImg,
    position: 'top',
    href: '#learning',
  },
  {
    id: 'web-page',
    title: { zh: '整页翻译', en: 'Full-page translation' },
    description: {
      zh: '悬浮球一键翻译整个网页，原文 / 译文随时切换。',
      en: 'Translate an entire page from the floating ball in one click, and switch between original and translation anytime.',
    },
    icon: Globe,
    image: webPageImg,
    position: 'center 45%',
    href: '#engines',
  },
  {
    id: 'video',
    title: { zh: '视频双语字幕', en: 'Bilingual video subtitles' },
    description: {
      zh: 'YouTube、TED、Bilibili、Coursera 一键开启双语字幕。',
      en: 'Turn on bilingual subtitles on YouTube, TED, Bilibili and Coursera in one click.',
    },
    icon: Captions,
    image: videoImg,
    position: 'center',
    href: '#video',
  },
  {
    id: 'pdf',
    title: { zh: 'PDF 翻译', en: 'PDF translation' },
    description: {
      zh: '左右双栏对照阅读，保留原版式与表格结构。',
      en: 'Read side by side in two columns, with the original layout and tables preserved.',
    },
    icon: FileText,
    image: pdfImg,
    position: 'top',
    href: '#reading',
  },
  {
    id: 'document',
    title: { zh: '文档翻译', en: 'Document translation' },
    description: {
      zh: 'Markdown、TXT、SRT、HTML 同一套阅读器双语对照。',
      en: 'Markdown, TXT, SRT and HTML in the same bilingual side-by-side reader.',
    },
    icon: FileStack,
    image: documentImg,
    position: 'top',
    href: '#reading',
  },
  {
    id: 'compare',
    title: { zh: '多引擎对比', en: 'Multi-engine comparison' },
    description: {
      zh: '同屏对比多个引擎或模型的译文，差异一目了然。',
      en: 'Compare translations from multiple engines or models on one screen and spot the differences at a glance.',
    },
    icon: GitCompare,
    image: compareImg,
    position: 'center 22%',
    href: '#compare',
  },
  {
    id: 'manga',
    title: { zh: '漫画翻译', en: 'Manga translation' },
    description: {
      zh: '在 pixiv、カドコミ、少年ジャンプ+ 等网站上整部作品一起翻译，译文直接排在每一页上。',
      en: 'Translate whole works on sites like pixiv, カドコミ and 少年ジャンプ+, with translations typeset right onto every page.',
    },
    icon: BookOpen,
    href: '#manga',
  },
]
