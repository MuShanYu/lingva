import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Rocket, Globe, Captions, TextSelect, BookOpen } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { IconBook, IconByoa, IconDoc, IconShieldCheck } from '@/components/icons'
import type { Localized } from '@/i18n/context'
import { CONTACT_EMAIL, ISSUES_URL } from '@/pages/Privacy/parts'

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
        q: 'PDF 译文分段不对，多栏内容串在了一起？',
        a: '阅读器在本地按文字的位置还原段落，多栏、表格或图文混排较多的复杂页面可能分错。可以打开工具栏的「增强版面分析」，或在单页上点「增强版面」，把页面交给识别服务分析版面后再分段。第一次使用前会先征求你的同意；官方服务另有每天的版面分析额度，用完后自动改回本地分段，次日恢复。',
      },
      {
        q: '为什么有些译文的字号比原文小？',
        a: '译文放在原文所在的位置，放不下时会自动缩小字号，原文旁边有空白时会借用空白。从中文译成其他语言时篇幅通常会变长，字号就会小一些。鼠标悬停在译文上可以看到原文，被截断的译文悬停时还能看到全文。',
      },
      {
        q: '扫描版 PDF 能翻译吗？',
        a: '可以。阅读器会自动找出扫描页（包括带隐藏文字层、但文字仍在图片里的扫描件），点击「识别扫描页」后，这些页面会发到识别服务识别文字，再原位替换成译文。扫描页消耗漫画/文档识别额度，识别结果缓存在本地，再次打开不会重复识别。照片、插图这类纯图片页保持原样显示。',
      },
      {
        q: '能导出翻译后的 PDF 吗？',
        a: '可以。PDF 通过浏览器的「另存为 PDF」导出，导出前会把每一页都加载、翻译并替换好；Markdown、TXT、SRT、HTML 会按原格式重建后直接下载。',
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
            不会。API 密钥只保存在本机浏览器，只随请求发给对应的翻译服务商；要翻译的文字由浏览器直接发给你选择的翻译服务，LingVa 没有中转服务器。只有漫画与图片翻译，以及 PDF 的扫描页识别和版面增强，会把图片发到 LingVa 的识别服务（版面增强还会附带该页文字的位置和内容）。
            完整说明见<Link to="/privacy" className="text-brand hover:underline">隐私政策</Link>。
          </>
        ),
      },
      {
        q: '哪些数据保存在我的浏览器里？',
        a: '设置与偏好、各引擎的 API Key 和接口地址、翻译历史、生词本（包括单词的原文语境、来源网址和复习进度）、用量与费用统计，以及漫画识别结果与译文、PDF 扫描页识别和版面分析结果的缓存，都保存在浏览器的 IndexedDB 和 chrome.storage.local 中，不会上传。历史、统计和缓存可以在扩展里随时清空。',
      },
      {
        q: '除了翻译服务，扩展还会联网发送什么？',
        a: '查询单个单词时，会把这个单词发给公开词典接口获取音标、释义和例句；扩展还会定期下载公开的模型列表和价格目录，这些请求不含任何个人信息或翻译内容。另外，使用 AI 引擎翻译时，前后相邻的文字（漫画中为相邻页的原文）会作为上下文一并发给你选择的服务商，让译文更连贯。',
      },
      {
        q: '漫画图片和 PDF 页面发到哪里？会被保存吗？',
        a: '使用官方识别服务时，漫画图片、PDF 扫描页以及开启版面增强后的 PDF 页面（连同该页文字的位置和内容）发到 LingVa 的识别服务器（位于中国大陆，阿里云北京、上海），只用于识别文字、分析版面和生成擦字底图，处理完立即丢弃，不保存，也不用于训练模型。PDF 文件本身不会上传。服务器不保存原始 IP 地址，只保存不可逆的哈希值用于防滥用。如果不希望这些内容传到中国大陆，可以改用自部署的识别服务，或不使用漫画与图片翻译、PDF 扫描页识别和版面增强。',
      },
      {
        q: '官方识别服务会记录我的哪些信息？',
        a: '只记录一个随机生成的安装 ID（不含任何设备或个人信息）和它每天识别的页数、版面分析的页数，用于分配每日额度；逐日记录保留 90 天，之后只保留累计识别页数和最后使用日期。赞助时会保存订单信息，付款人标识只保存不可逆的哈希值。不需要注册账号，不收集姓名、手机号、邮箱或浏览记录。',
      },
      {
        q: '怎么删除识别服务上与我有关的记录？',
        a: (
          <>
            发邮件到{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">
              {CONTACT_EMAIL}
            </a>
            ，或在{' '}
            <a href={ISSUES_URL} target="_blank" rel="noreferrer" className="text-brand hover:underline">
              GitHub 提交 Issue
            </a>
            ，并提供对应的安装 ID 或赞助订单号，核实后会在 15 个工作日内处理（Issue 是公开的，请不要填写无关的个人信息）。删除赞助绑定后，该设备不再享有赞助额度。也可以直接卸载扩展，旧的安装 ID 不再使用，其逐日用量会在 90 天后自动删除。
          </>
        ),
      },
      {
        q: '卸载扩展会发生什么？',
        a: '保存在浏览器本地的设置、API Key、翻译历史、生词本、用量统计和漫画缓存会全部删除，清除浏览器数据也一样，目前不支持跨设备同步。重新安装后会生成新的安装 ID。',
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
        q: 'Paragraphs in a translated PDF are split wrongly, or columns run together?',
        a: 'The reader rebuilds paragraphs locally from the position of the text, which can go wrong on complex pages with columns, tables or mixed text and figures. Turn on “Enhanced layout” in the toolbar, or click “Enhance layout” on a single page, to have the recognition service analyze the page layout first. You are asked for consent before the first use; the official service has a separate daily layout analysis quota, and once it runs out the reader falls back to local splitting until the next day.',
      },
      {
        q: 'Why is some translated text smaller than the original?',
        a: 'Translations are placed where the original text was. When they don’t fit, the font size shrinks, and blank space next to the original is borrowed when available. Translating from Chinese into other languages usually makes the text longer, so it ends up a little smaller. Hover over a translation to see the original; for truncated translations, hovering also shows the full text.',
      },
      {
        q: 'Can scanned PDFs be translated?',
        a: 'Yes. The reader detects scanned pages automatically (including scans with a hidden text layer whose text is still in the image). Click “Recognize scanned pages” and those pages are sent to the recognition service, then their text is replaced in place with the translation. Scanned pages use the manga/document recognition quota, and results are cached locally so reopening a page doesn’t recognize it again. Pages that are only pictures, such as photos or illustrations, are shown as they are.',
      },
      {
        q: 'Can I export the translated PDF?',
        a: 'Yes. PDFs are exported with the browser’s “Save as PDF”, after every page has been loaded, translated and replaced. Markdown, TXT, SRT and HTML are rebuilt in their original format and downloaded directly.',
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
            No. API keys are stored only in your browser and sent only to the matching translation provider. The text you translate goes straight from your browser to the translation service you chose — LingVa runs no proxy. Only manga and image translation, and the PDF reader’s scanned-page recognition and layout enhancement, send images to LingVa’s recognition service (layout enhancement also includes the positions and content of that page’s text).
            {' '}For full details, see the <Link to="/privacy" className="text-brand hover:underline">privacy policy</Link>.
          </>
        ),
      },
      {
        q: 'What data is stored in my browser?',
        a: 'Settings and preferences, API keys and endpoint addresses, translation history, your vocabulary notebook (including each word’s original context, source URL and review progress), usage and cost statistics, and cached manga recognition results and translations and PDF scanned-page recognition and layout analysis results are all stored in your browser’s IndexedDB and chrome.storage.local, and never uploaded. You can clear history, statistics and caches in the extension at any time.',
      },
      {
        q: 'Besides translation services, what else does the extension send over the network?',
        a: 'When you look up a single word, that word is sent to a public dictionary API for pronunciation, definitions and examples. The extension also periodically downloads public model lists and price catalogs; these requests contain no personal information or translated content. With AI engines, neighboring text (for manga, the original text of neighboring pages) is sent to your chosen provider as context for more consistent translations.',
      },
      {
        q: 'Where do manga images and PDF pages go? Are they stored?',
        a: 'With the official recognition service, manga images, scanned PDF pages and — with layout enhancement on — PDF pages together with the positions and content of their text are sent to LingVa’s recognition servers (in mainland China, Alibaba Cloud Beijing and Shanghai). They are used only to recognize text, analyze the layout and produce a text-free version, and are discarded right afterwards: never stored or used to train models. The PDF file itself is never uploaded. The server does not store raw IP addresses — only an irreversible hash for abuse prevention. If you’d rather this not go to mainland China, use a self-hosted recognition server or don’t use manga and image translation, scanned-page recognition or layout enhancement.',
      },
      {
        q: 'What does the official recognition service record about me?',
        a: 'Only a randomly generated installation ID (containing no device or personal information) and how many pages it recognizes and sends for layout analysis each day, used to apply the daily quotas. Daily records are kept for 90 days, then reduced to a total recognized page count and last-used date. If you sponsor, order details are stored, with the payer identifier kept only as an irreversible hash. No account is needed, and no name, phone number, email or browsing history is collected.',
      },
      {
        q: 'How do I delete records about me on the recognition service?',
        a: (
          <>
            Email{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">
              {CONTACT_EMAIL}
            </a>{' '}
            or{' '}
            <a href={ISSUES_URL} target="_blank" rel="noreferrer" className="text-brand hover:underline">
              open an issue on GitHub
            </a>{' '}
            with the installation ID or sponsorship order number, and we’ll act on verified requests within 15 business days (issues are public, so don’t include unrelated personal information). Removing a sponsorship link ends the sponsor quota for that device. You can also simply uninstall the extension: the old installation ID is no longer used and its daily usage records are deleted automatically after 90 days.
          </>
        ),
      },
      {
        q: 'What happens if I uninstall the extension?',
        a: 'Settings, API keys, translation history, vocabulary, usage stats and manga caches stored in your browser are all deleted, as they are when you clear browser data. Cross-device sync isn’t supported yet. Reinstalling creates a new installation ID.',
      },
    ],
  },
]

export const faqGroups: Localized<FaqGroup[]> = { zh, en }
