import { TextSelect, BookOpen, Star, RotateCcw, Brain } from 'lucide-react'
import ScreenshotCard from '@/components/mockups/ScreenshotCard'
import ProcessSteps from '@/components/mockups/ProcessSteps'
import vocabListImg from '@/assets/img/生词本列表.png'
import Reveal from '@/components/Reveal'
import SectionGlow from '@/components/SectionGlow'

const iconProps = { className: 'h-4 w-4', strokeWidth: 1.75 }

const steps = [
  { label: '划词', desc: '选中单词或短语', icon: <TextSelect {...iconProps} /> },
  { label: '理解', desc: '音标、释义、例句一次展示', icon: <BookOpen {...iconProps} /> },
  { label: '收藏', desc: '一键加入生词本', icon: <Star {...iconProps} /> },
  { label: '复习', desc: '按记忆曲线安排复习', icon: <RotateCcw {...iconProps} /> },
  { label: '记住', desc: '真正记住而不是划过就忘', icon: <Brain {...iconProps} /> },
]

export default function Learning() {
  return (
    <section id="learning" className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24">
      <SectionGlow position="right" />
      <Reveal className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="text-xs font-medium tracking-wide text-brand uppercase">
            Build your vocabulary
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
            把每一次翻译，变成记得住的单词
          </h2>
          <p className="mt-4 max-w-lg text-gray-500">
            划词命中词典时，LingVa 会直接展示音标、词性、释义与例句，而不只是一句译文。看到生词随手收藏，系统按一套简化版记忆曲线算法安排复习节奏，帮你真正记住。
          </p>

          <div className="mt-10">
            <ProcessSteps steps={steps} />
          </div>
        </div>

        <div className="flex justify-center">
          <ScreenshotCard
            src={vocabListImg}
            alt="LingVa 生词本列表，按状态筛选并显示待复习数量"
            className="max-w-xs"
          />
        </div>
      </Reveal>
    </section>
  )
}
