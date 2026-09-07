export interface Feature {
  title: string
  description: string
}

export const features: Feature[] = [
  {
    title: '多引擎对比翻译',
    description:
      '内置翻译、DeepL、Google、Microsoft 四大官方引擎，加上 OpenRouter 与 DeepSeek、Gemini、GLM、通义千问等主流大模型，一次翻译多引擎同屏对比，挑出译得最准的一句。',
  },
  {
    title: '划词与悬浮球翻译',
    description: '选中文字即刻翻译，页面悬浮球一键整页翻译，随开随用不打断阅读。',
  },
  {
    title: '文档翻译',
    description: '支持 PDF、Markdown、TXT、SRT、HTML 双语对照翻译，格式与排版保持不变。',
  },
  {
    title: '视频双语字幕',
    description: 'YouTube、TED、Bilibili、Coursera 一键开启中英双语字幕，追剧学语言两不误。',
  },
  {
    title: '生词本与间隔复习',
    description: '翻译过程中随手收藏生词，内置记忆曲线复习提醒，真正记住而不是划过就忘。',
  },
  {
    title: '用量与成本仪表盘',
    description: '按引擎、按天统计请求量与花费，数据只留在本地，从不上传。',
  },
]
