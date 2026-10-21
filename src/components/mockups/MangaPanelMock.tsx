import { Pin, X } from 'lucide-react'
import { useContent } from '@/i18n/context'

// 漫画翻译面板的静态示意，照扩展里的 MangaPanel 画：进度带、当前页附近 21 页的逐页状态、计数和操作按钮。
// 不放真实漫画截图——页面内容是商业漫画，官网上不用
const TOTAL = 62
const CURRENT = 12
const WINDOW_START = 2

// 第 3–22 页：前 9 页已译，第 12 页在翻译，第 7 页失败，其余待译
function cellState(page: number): 'done' | 'active' | 'failed' | 'pending' {
  if (page === 7) return 'failed'
  if (page <= 11) return 'done'
  if (page === CURRENT || page === CURRENT + 1) return 'active'
  return 'pending'
}

const cellClass = {
  done: 'bg-brand',
  active: 'bg-brand/40 animate-pulse',
  failed: 'bg-red-500',
  pending: 'bg-gray-100 ring-1 ring-inset ring-gray-200',
}

const content = {
  zh: {
    title: '漫画翻译',
    translating: (page: number) => `正在翻译第 ${page} 页`,
    nearby: '当前页附近',
    range: (from: number, to: number) => `第 ${from}–${to} 页`,
    done: '已译',
    failed: '失败',
    pending: '待译',
    retranslate: '重新翻译本页',
    pause: '暂停',
  },
  en: {
    title: 'Manga translation',
    translating: (page: number) => `Translating page ${page}`,
    nearby: 'Near current page',
    range: (from: number, to: number) => `Pages ${from}–${to}`,
    done: 'Done',
    failed: 'Failed',
    pending: 'Pending',
    retranslate: 'Retranslate page',
    pause: 'Pause',
  },
}

export default function MangaPanelMock() {
  const t = useContent(content)
  const cells = Array.from({ length: 21 }, (_, i) => WINDOW_START + i + 1)

  return (
    <div className="w-full max-w-[320px] rounded-[18px] border border-gray-200 bg-white shadow-2xl shadow-gray-300/40">
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-accent-purple text-xs font-semibold text-white">
            L
          </span>
          <span className="text-sm font-semibold text-gray-900">{t.title}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <Pin className="h-4 w-4" />
          <X className="h-4 w-4" />
        </div>
      </div>

      <div className="space-y-4 px-4 py-4">
        <div className="flex items-baseline justify-between">
          <span className="text-sm text-gray-600">{t.translating(CURRENT)}</span>
          <span className="text-sm font-semibold text-gray-900">
            10 / {TOTAL}
          </span>
        </div>

        <div>
          <div className="relative h-2 rounded-full bg-gray-100">
            <div className="h-2 w-[16%] rounded-full bg-brand" />
            <span
              className="absolute -top-2.5 h-0 w-0 border-x-4 border-t-[6px] border-x-transparent border-t-gray-700"
              style={{ left: `${((CURRENT - 0.5) / TOTAL) * 100}%` }}
            />
          </div>
          <div className="mt-1 flex justify-between text-xs text-gray-400">
            <span>1</span>
            <span>{TOTAL}</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>{t.nearby}</span>
            <span>{t.range(WINDOW_START + 1, WINDOW_START + 21)}</span>
          </div>
          <div className="mt-2 flex gap-[3px]">
            {cells.map((page) => (
              <span
                key={page}
                className={`h-4 flex-1 rounded-[3px] ${cellClass[cellState(page)]} ${
                  page === CURRENT ? 'outline-2 outline-offset-1 outline-gray-800' : ''
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-4 text-xs text-gray-500">
          <span>{t.done} 10</span>
          <span className="text-red-500">{t.failed} 1</span>
          <span>{t.pending} 51</span>
        </div>

        <div className="flex gap-2">
          <span className="flex-1 rounded-lg bg-brand py-2 text-center text-sm text-white">{t.retranslate}</span>
          <span className="flex-1 rounded-lg border border-gray-200 py-2 text-center text-sm text-gray-700">
            {t.pause}
          </span>
        </div>
      </div>
    </div>
  )
}
