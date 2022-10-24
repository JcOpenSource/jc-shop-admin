import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      // 配置选项 
      // 将ESLint插件错误提示构建到编译过程当中
      cache: false // 禁用eslint缓存
    })
  ]
})
