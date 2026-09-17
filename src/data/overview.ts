import type { LucideIcon } from 'lucide-react'
import { TextSelect, Globe, Captions, FileText, FileStack, GitCompare } from 'lucide-react'
import selectionImg from '@/assets/img/划词翻译弹窗（带词典卡片）.png'
import webPageImg from '@/assets/img/网页翻译.png'
import videoImg from '@/assets/img/视频双语字幕.png'
import pdfImg from '@/assets/img/PDF 双语阅读器.png'
import compareImg from '@/assets/img/多引擎对比高亮.png'

export interface OverviewTile {
  id: string
  title: string
  description: string
  icon: LucideIcon
  image: string
  position: string
  href: string
}

export const overviewTiles: OverviewTile[] = [
  {
    id: 'selection',
    title: '划词翻译',
    description: '选中文字即刻查看释义、音标与例句，随手收藏进生词本。',
    icon: TextSelect,
    image: selectionImg,
    position: 'top',
    href: '#learning',
  },
  {
    id: 'web-page',
    title: '整页翻译',
    description: '悬浮球一键翻译整个网页，原文 / 译文随时切换。',
    icon: Globe,
    image: webPageImg,
    position: 'center 45%',
    href: '#engines',
  },
  {
    id: 'video',
    title: '视频双语字幕',
    description: 'YouTube、TED、Bilibili、Coursera 一键开启双语字幕。',
    icon: Captions,
    image: videoImg,
    position: 'top',
    href: '#video',
  },
  {
    id: 'pdf',
    title: 'PDF 翻译',
    description: '左右双栏对照阅读，保留原版式与表格结构。',
    icon: FileText,
    image: pdfImg,
    position: 'top',
    href: '#reading',
  },
  {
    id: 'document',
    title: '文档翻译',
    description: 'Markdown、TXT、SRT、HTML 同一套阅读器双语对照。',
    icon: FileStack,
    image: pdfImg,
    position: 'center 15%',
    href: '#reading',
  },
  {
    id: 'compare',
    title: '多引擎对比',
    description: '同屏对比多个引擎或模型的译文，差异一目了然。',
    icon: GitCompare,
    image: compareImg,
    position: 'center 22%',
    href: '#compare',
  },
]
