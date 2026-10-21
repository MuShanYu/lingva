import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Rocket, Globe, Captions, TextSelect, BookOpen } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { IconBook, IconByoa, IconDoc, IconShieldCheck } from '@/components/icons'
import type { Localized } from '@/i18n/context'

export interface FaqItem {
  q: string
  a: ReactNode
}

export interface FaqGroup {
  id: string
  title: string
  icon: LucideIcon
  items: FaqItem[]
}

const zh: FaqGroup[] = [
  {
    id: 'start',
    title: '快速开始',
    icon: Rocket,
    items: [
      {
        q: '安装后需要做什么才能开始翻译？',
        a: '内置翻译引擎开箱即用，无需任何配置，划词、整页、字幕都能直接用。想用 DeepL、Google 翻译、Microsoft 翻译或任意 AI 大模型，需要先在设置页「引擎与翻译」里填入你自己的 API 密钥。',
      },
      {
        q: '为什么划词 / 整页翻译点了没反应？',
        a: '大概率是当前选择的引擎还没配置凭证。设置页每张引擎卡片都带「测试连接」按钮，可以直接确认密钥是否有效、延迟多少毫秒。',
      },
    ],
  },
  {
    id: 'selection',
    title: '划词翻译',
    icon: TextSelect,
    items: [
      {
        q: '选中文字后弹窗一直不出现？',
        a: '先检查设置页是否把「划词翻译」整体关闭了。另外数字、URL、邮箱、emoji 等没有语言学意义的内容会被自动过滤，不会弹出面板。',
      },
      {
        q: '为什么有的词带释义卡片，有的直接给整句翻译？',
        a: 'LingVa 会先判断选中内容是单词/短语还是整句：是单词短语时优先查词典，命中才展示音标、词性、例句卡片；查不到或判断为整句时自动退化为整句翻译。',
      },
    ],
  },
  {
    id: 'learning',
    title: '生词本与复习',
    icon: IconBook,
    items: [
      {
        q: '收藏的生词要怎么复习？',
        a: '弹窗「生词本」标签页里可以进入复习面板，基于简化版 SM-2 间隔重复算法安排复习节奏，答「认识」间隔会变长，答「不认识」会重新从头开始。',
      },
      {
        q: '可以设置每天提醒复习吗？',
        a: '可以，在设置页「常规」里开启「每日复习提醒」并指定时间，基于系统通知实现，改了时间会立即重新生效。',
      },
    ],
  },
  {
    id: 'page',
    title: '整页翻译',
    icon: Globe,
    items: [
      {
        q: '悬浮球不见了怎么办？',
        a: '检查设置页「悬浮球设置」是否被整体关闭，或者当前网址命中了你自己设置的禁用名单规则（支持 *.example.com 这类通配符）。',
      },
      {
        q: '整页翻译能左右双语对照吗？',
        a: '悬浮球整页翻译目前是原文 / 译文切换模式，不是双语对照排版；真正的双语对照阅读在 PDF 与文档阅读器里提供。',
      },
    ],
  },
  {
    id: 'video',
    title: '视频双语字幕',
    icon: Captions,
    items: [
      {
        q: '支持哪些视频网站？',
        a: 'YouTube、TED、哔哩哔哩、Coursera 四个平台，会在播放器控制栏或原生设置菜单风格里加一个字幕开关。',
      },
      {
        q: '字幕面板显示「未检测到字幕」怎么办？',
        a: '说明这个视频本身没有可用的字幕轨或转录稿，LingVa 依赖平台自带的字幕数据来生成双语字幕，无法凭空生成。',
      },
    ],
  },
  {
    id: 'reading',
    title: 'PDF / 文档翻译',
    icon: IconDoc,
    items: [
      {
        q: '支持哪些文件格式？',
        a: 'PDF、Markdown、TXT、SRT 字幕、HTML，五种格式共用同一个阅读器和翻译队列，顶部统一选择引擎与目标语言。',
      },
      {
        q: 'PDF 翻译后感觉版式「乱了」？',
        a: '左栏用原版式还原原文，右栏是脱离原版式、重新排版展示的译文，两栏各自独立滚动、互不联动，属于设计如此，不是 bug。',
      },
      {
        q: '扫描版 PDF 能翻译吗？',
        a: '不能。PDF 阅读器只翻译能提取出文字的 PDF，不做 OCR 识别，遇到整页无可提取文字的扫描件会直接提示跳过，不会误报翻译成功。',
      },
    ],
  },
  {
    id: 'manga',
    title: '漫画翻译',
    icon: BookOpen,
    items: [
      {
        q: '支持哪些漫画网站？',
        a: 'pixiv、カドコミ（comic-walker.com），以及少年ジャンプ+、コミックDAYS 等使用 GigaViewer 阅读器的出版社站点。打开这些网站的作品阅读页后，悬浮球菜单里会多出「漫画翻译」一项；其他网站不会显示。',
      },
      {
        q: '怎么开始翻译一部漫画？',
        a: '点悬浮球，在菜单里选「漫画翻译」，在弹出的面板里点「开始翻译」。也可以在设置页「漫画识别服务」里按网站开启自动翻译，打开作品就自动开始。',
      },
      {
        q: '需要配置什么吗？要花钱吗？',
        a: '默认使用 LingVa 官方图片识别服务，免注册、免配置，每天有免费额度；赞助可获得更多额度。翻译这一步用的是你在设置页选择的翻译引擎，内置引擎免费。也可以自己部署开源的识别服务端，不限额度；它与官方服务使用同样的识别与擦字算法，效果完全一样，没有任何功能阉割。',
      },
      {
        q: '某一页翻译失败了怎么办？',
        a: '失败的页面右上角会显示原因和错误码，点「重试」即可；面板里也有「重试失败页」一次重试全部。服务繁忙时整部作品会自动等待并重试，恢复后从中断的页继续，已翻译的页面不受影响。',
      },
      {
        q: '翻过的页面再看会消耗额度吗？',
        a: '不会。识别结果缓存在本机（最多 500 MB），再次打开或换一种目标语言都不会重新识别；只有点「重新翻译本页」或「全部重新翻译」才会重新识别并消耗额度。',
      },
      {
        q: '想看原图怎么办？',
        a: '按住 Ctrl（可在设置页改成 Shift 或 Alt），已翻译的页面会临时显示原图，松开后恢复译文。',
      },
    ],
  },
  {
    id: 'engines',
    title: '引擎与设置',
    icon: IconByoa,
    items: [
      {
        q: 'OpenRouter 和「自定义 OpenAI 兼容端点」有什么区别？',
        a: 'OpenRouter 是聚合平台，一个 Key 能调用它上面几乎所有厂商的模型，价格由官方接口统一返回；自定义端点是直连某个具体的 OpenAI 兼容服务。DeepSeek、Gemini、Grok、GLM、Qwen 五个预设的模型和价格来自 LingVa 维护的模型目录，会自动更新；你自己添加的端点，价格需要自己填。',
      },
      {
        q: '预设服务商的模型价格是怎么来的？',
        a: '来自 LingVa 维护的模型目录，后台每 6 小时更新一次，不用升级插件。目录还会标出已弃用的模型，以及 DeepSeek 等服务商的高峰时段价格，用量统计按请求时的实际单价计算。目录里没有的模型可以自己填价格。',
      },
      {
        q: '多引擎对比的「差异高亮」是怎么算的？',
        a: '当前主引擎作为基准，强制勾选且不可取消；其余引擎的结果逐条和基准译文做差异对比，直接标出谁多译、少译或译法不同。',
      },
    ],
  },
  {
    id: 'privacy',
    title: '数据与隐私',
    icon: IconShieldCheck,
    items: [
      {
        q: '我的 API 密钥和翻译内容会被 LingVa 看到吗？',
        a: (
          <>
            不会。密钥只存在本机 chrome.storage，翻译请求由浏览器直接发给你自己配置的引擎，不经过 LingVa 的服务器。唯一会发给 LingVa 服务器的是漫画翻译时的图片，服务器不保存图片，也不保存 IP 地址。
            完整说明见<Link to="/privacy" className="text-brand hover:underline">隐私政策</Link>。
          </>
        ),
      },
      {
        q: '卸载扩展会发生什么？',
        a: '翻译历史、生词本、用量统计都保存在本机浏览器的 IndexedDB 中，卸载扩展或清除浏览器数据会一并清除，目前不支持跨设备同步。',
      },
    ],
  },
]

const en: FaqGroup[] = [
  {
    id: 'start',
    title: 'Getting started',
    icon: Rocket,
    items: [
      {
        q: 'What do I need to do after installing before I can translate?',
        a: 'The built-in translation engine works out of the box with no setup — selection, full-page and subtitle translation all work right away. To use DeepL, Google Translate, Microsoft Translator or any AI model, first enter your own API key under “Engines & Translation” in settings.',
      },
      {
        q: 'Why does nothing happen when I use selection or full-page translation?',
        a: 'Most likely the selected engine has no credentials configured yet. Every engine card in settings has a “Test connection” button that confirms whether the key is valid and shows the latency in milliseconds.',
      },
    ],
  },
  {
    id: 'selection',
    title: 'Selection translation',
    icon: TextSelect,
    items: [
      {
        q: 'The popup never appears after I select text?',
        a: 'First check whether “Selection translation” is turned off entirely in settings. Also, content with no linguistic meaning — numbers, URLs, emails, emoji and so on — is filtered out automatically and won’t open the panel.',
      },
      {
        q: 'Why do some words get a dictionary card while others get a sentence translation?',
        a: 'LingVa first decides whether the selection is a word/phrase or a full sentence. For words and phrases it looks up the dictionary first and shows the phonetics, part of speech and examples card on a hit; if nothing is found, or the selection is a sentence, it falls back to sentence translation.',
      },
    ],
  },
  {
    id: 'learning',
    title: 'Vocabulary & review',
    icon: IconBook,
    items: [
      {
        q: 'How do I review the words I’ve saved?',
        a: 'Open the review panel from the “Vocabulary” tab in the popup. Reviews are scheduled with a simplified SM-2 spaced-repetition algorithm: answering “I know it” lengthens the interval, while “I don’t know it” starts the word over.',
      },
      {
        q: 'Can I get a daily review reminder?',
        a: 'Yes. Turn on “Daily review reminder” under “General” in settings and pick a time. It uses system notifications, and changing the time takes effect immediately.',
      },
    ],
  },
  {
    id: 'page',
    title: 'Full-page translation',
    icon: Globe,
    items: [
      {
        q: 'The floating ball is gone. What should I do?',
        a: 'Check whether the floating ball is turned off entirely under “Floating ball” in settings, or whether the current URL matches a rule in your own blocklist (wildcards like *.example.com are supported).',
      },
      {
        q: 'Can full-page translation show the original and translation side by side?',
        a: 'Full-page translation from the floating ball currently switches between original and translation rather than showing a bilingual layout. True side-by-side bilingual reading is available in the PDF and document reader.',
      },
    ],
  },
  {
    id: 'video',
    title: 'Bilingual video subtitles',
    icon: Captions,
    items: [
      {
        q: 'Which video sites are supported?',
        a: 'YouTube, TED, Bilibili and Coursera. LingVa adds a subtitle toggle to the player controls, styled to match each site’s native settings menu.',
      },
      {
        q: 'The subtitle panel says “No subtitles detected”?',
        a: 'This means the video itself has no usable subtitle track or transcript. LingVa builds bilingual subtitles from the platform’s own subtitle data and can’t generate them from nothing.',
      },
    ],
  },
  {
    id: 'reading',
    title: 'PDF / document translation',
    icon: IconDoc,
    items: [
      {
        q: 'Which file formats are supported?',
        a: 'PDF, Markdown, TXT, SRT subtitles and HTML. All five share the same reader and translation queue, with the engine and target language chosen at the top.',
      },
      {
        q: 'The PDF layout looks “messed up” after translation?',
        a: 'The left column reproduces the original layout, while the right column is the translation re-typeset independently of it. The two columns scroll separately and aren’t linked — this is by design, not a bug.',
      },
      {
        q: 'Can scanned PDFs be translated?',
        a: 'No. The PDF reader only translates PDFs with extractable text and does not perform OCR. Scanned pages with no extractable text are skipped with a notice, never falsely reported as translated.',
      },
    ],
  },
  {
    id: 'manga',
    title: 'Manga translation',
    icon: BookOpen,
    items: [
      {
        q: 'Which manga sites are supported?',
        a: 'pixiv, カドコミ (comic-walker.com), and publisher sites that use the GigaViewer reader, such as 少年ジャンプ+ and コミックDAYS. On a work’s reading page on these sites, a “Manga translation” item appears in the floating ball menu; it doesn’t show on other sites.',
      },
      {
        q: 'How do I start translating a manga?',
        a: 'Click the floating ball, choose “Manga translation” from the menu, and click “Start translation” in the panel that opens. You can also enable auto-translate per site under “Manga recognition service” in settings, so translation starts as soon as you open a work.',
      },
      {
        q: 'Do I need to configure anything? Does it cost money?',
        a: 'By default it uses the official LingVa image recognition service: no sign-up, no setup, and a free daily quota; sponsors get more quota. The translation step uses the engine you selected in settings, and the built-in engine is free. You can also deploy the open-source recognition server yourself with no quota limits; it uses exactly the same recognition and text-removal algorithms as the official service — same results, no features held back.',
      },
      {
        q: 'What if a page fails to translate?',
        a: 'A failed page shows the reason and error code in its top-right corner — just click “Retry”. The panel also has “Retry failed pages” to retry them all at once. When the service is busy, the whole work waits and retries automatically, then resumes from the page where it stopped; pages already translated are unaffected.',
      },
      {
        q: 'Does viewing a translated page again use quota?',
        a: 'No. Recognition results are cached locally (up to 500 MB), so reopening a page or switching to another target language doesn’t trigger recognition again. Only “Retranslate page” or “Retranslate all” recognizes again and uses quota.',
      },
      {
        q: 'How do I see the original image?',
        a: 'Hold Ctrl (configurable to Shift or Alt in settings) and translated pages temporarily show the original image; release it to go back to the translation.',
      },
    ],
  },
  {
    id: 'engines',
    title: 'Engines & settings',
    icon: IconByoa,
    items: [
      {
        q: 'What’s the difference between OpenRouter and a “Custom OpenAI-compatible endpoint”?',
        a: 'OpenRouter is an aggregator: one key gives you access to models from almost every provider on it, with prices returned by its official API. A custom endpoint connects directly to one specific OpenAI-compatible service. The models and prices for the five presets — DeepSeek, Gemini, Grok, GLM and Qwen — come from the model catalog maintained by LingVa and update automatically; for endpoints you add yourself, you enter the prices.',
      },
      {
        q: 'Where do the preset providers’ model prices come from?',
        a: 'From the model catalog maintained by LingVa, which is refreshed every 6 hours in the background — no extension update needed. The catalog also marks deprecated models and peak-hour pricing for providers like DeepSeek, and usage stats are calculated with the actual unit price at request time. For models not in the catalog, you can enter prices yourself.',
      },
      {
        q: 'How is “difference highlighting” in multi-engine comparison calculated?',
        a: 'The current primary engine serves as the baseline and is always selected. Every other engine’s result is diffed against the baseline translation, marking directly where it adds, omits or translates differently.',
      },
    ],
  },
  {
    id: 'privacy',
    title: 'Data & privacy',
    icon: IconShieldCheck,
    items: [
      {
        q: 'Can LingVa see my API keys and the text I translate?',
        a: (
          <>
            No. Keys are stored only in your local chrome.storage, and translation requests go from your browser directly to the engine you configured, never through LingVa’s servers. The only thing sent to LingVa’s servers is images during manga translation, and the server stores neither images nor IP addresses.
            {' '}For full details, see the <Link to="/privacy" className="text-brand hover:underline">privacy policy</Link>.
          </>
        ),
      },
      {
        q: 'What happens if I uninstall the extension?',
        a: 'Translation history, vocabulary and usage stats are all stored in your browser’s IndexedDB. Uninstalling the extension or clearing browser data deletes them too; cross-device sync isn’t supported yet.',
      },
    ],
  },
]

export const faqGroups: Localized<FaqGroup[]> = { zh, en }
