// 构建后把首页、帮助中心、隐私政策预渲染成静态 HTML（英文版），写进 dist。
//
// 1. 不执行 JS 的爬虫和社交平台分享卡片也能读到完整正文和各页自己的 title / description / OG 标签；
// 2. GitHub Pages 没有 SPA 回退，/privacy、/help 这类深链原本只能落到 404.html（HTTP 404 + JS 跳转），
//    Chrome 应用商店审核抓取隐私政策链接时会判定"无法访问"。生成 privacy.html、help.html 后，
//    GitHub Pages 会把 /privacy、/help 直接映射过去并返回 200。
//
// 页面加载后由 src/main.tsx 照常用 React 接管。
import { readFile, rm, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'

const SITE = 'https://lingva.mushanyu.xyz'

// 各页的标题和描述来自 src/i18n/pageMeta.ts（经 SSR 包导出），预渲染只输出英文版
const pages = [
  { path: '/', file: 'index.html' },
  { path: '/help', file: 'help.html' },
  { path: '/privacy', file: 'privacy.html' },
]

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/** 替换 <head> 里某个标签的 content / href，标签必须存在，避免模板改动后静默失效 */
function setTag(html, pattern, value) {
  if (!pattern.test(html)) throw new Error(`prerender: index.html 中找不到 ${pattern}`)
  return html.replace(pattern, (_, before, after) => `${before}${escapeAttr(value)}${after}`)
}

const template = await readFile('dist/index.html', 'utf-8')
const { render, pageMeta } = await import(pathToFileURL('dist-ssr/entry-prerender.js').href)

for (const { path, file } of pages) {
  const page = { path, file, ...pageMeta[path].en }
  const url = SITE + page.path
  let html = template
  html = html.replace(/<title>.*?<\/title>/, `<title>${escapeAttr(page.title)}</title>`)
  html = setTag(html, /(<meta\s+name="description"\s+content=")[^"]*(")/, page.description)
  html = setTag(html, /(<link\s+rel="canonical"\s+href=")[^"]*(")/, url)
  html = setTag(html, /(<meta\s+property="og:url"\s+content=")[^"]*(")/, url)
  html = setTag(html, /(<meta\s+property="og:title"\s+content=")[^"]*(")/, page.title)
  html = setTag(html, /(<meta\s+property="og:description"\s+content=")[^"]*(")/, page.description)
  html = setTag(html, /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, page.title)
  html = setTag(html, /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, page.description)

  const body = await render(page.path)
  if (!html.includes('<div id="root"></div>')) throw new Error('prerender: index.html 中找不到空的 #root')
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`)

  await writeFile(`dist/${page.file}`, html)
  console.log(`prerender: ${page.path} -> dist/${page.file} (${Math.round(html.length / 1024)} KB)`)
}

await rm('dist-ssr', { recursive: true, force: true })
