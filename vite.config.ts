import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      // 配置选项 
      // 将ESLint插件错误提示构建到编译过程当中
      cache: false // 禁用eslint缓存
    }),
    vueJsx({
      // 配置选项 
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src') // 绝对路径
    }
  },
  // 全局css
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `$injectedColor: orange;`
        additionalData: `@import "@/styles/variables.scss";`
      }
    }

  }
})
