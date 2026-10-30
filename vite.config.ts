import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// 站点部署在自定义域名 lingva.mushanyu.xyz 的根路径下；
// 首页、帮助、隐私的静态 HTML 由构建后的 scripts/prerender.mjs 预渲染生成
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
