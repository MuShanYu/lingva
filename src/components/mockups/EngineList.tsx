import { Languages, Sparkles, Plug } from 'lucide-react'
import { siDeepl, siGoogle, siOpenrouter, siDeepseek, siGooglegemini, siQwen } from 'simple-icons'
import type { SimpleIcon } from 'simple-icons'
import microsoftLogo from '@/assets/svg/microsoft-color.svg'
import grokLogo from '@/assets/svg/grok.svg'
import zhipuLogo from '@/assets/svg/zhipu.svg'

interface EngineItem {
  name: string
  icon?: SimpleIcon
  logoSrc?: string
  isOwn?: boolean
}

const machineTranslation: EngineItem[] = [
  { name: '内置翻译', isOwn: true },
  { name: 'DeepL', icon: siDeepl },
  { name: 'Google', icon: siGoogle },
  { name: 'Microsoft', logoSrc: microsoftLogo },
]

const aiProviders: EngineItem[] = [
  { name: 'OpenRouter', icon: siOpenrouter },
  { name: 'DeepSeek', icon: siDeepseek },
  { name: 'Gemini', icon: siGooglegemini },
  { name: 'Grok', logoSrc: grokLogo },
  { name: 'GLM', logoSrc: zhipuLogo },
  { name: 'Qwen', icon: siQwen },
]

function EngineBadge({ item }: { item: EngineItem }) {
  if (item.isOwn) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}favicon.png`}
        alt=""
        className="h-5 w-5 rounded shrink-0"
      />
    )
  }
  if (item.logoSrc) {
    return <img src={item.logoSrc} alt="" className="h-5 w-5 shrink-0 object-contain" />
  }
  if (item.icon) {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 shrink-0"
        fill={`#${item.icon.hex}`}
        aria-hidden
      >
        <path d={item.icon.path} />
      </svg>
    )
  }
  return null
}

function EngineColumn({ items }: { items: EngineItem[] }) {
  return (
    <ul className="mt-3 space-y-3">
      {items.map((item) => (
        <li key={item.name} className="flex items-center gap-2.5 text-sm text-gray-700">
          <EngineBadge item={item} />
          {item.name}
        </li>
      ))}
    </ul>
  )
}

export default function EngineList() {
  return (
    <div className="grid grid-cols-2 gap-0">
      <div className="border-r border-gray-100 pr-8">
        <div className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-gray-400 uppercase">
          <Languages className="h-3.5 w-3.5" />
          机器翻译
        </div>
        <EngineColumn items={machineTranslation} />
      </div>
      <div className="pl-8">
        <div className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-gray-400 uppercase">
          <Sparkles className="h-3.5 w-3.5" />
          AI 服务商
        </div>
        <EngineColumn items={aiProviders} />
      </div>
      <div className="col-span-2 mt-4 border-t border-gray-100 pt-4">
        <div className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-gray-400 uppercase">
          <Plug className="h-3.5 w-3.5" />
          自定义
        </div>
        <p className="mt-3 text-sm text-brand">+ 添加 OpenAI 兼容端点</p>
      </div>
    </div>
  )
}
