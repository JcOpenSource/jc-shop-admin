import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// import Icons from 'unplugin-icons/vite'
// import IconsResolver from 'unplugin-icons/resolver'

// const pathSrc = path.resolve(__dirname, 'src')

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
    }),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),

        // Auto import icon components
        // 自动导入图标组件
        // IconsResolver({
        //   prefix: 'Icon',
        // }),   
      ],
      // dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),

        // // Auto register icon components
        // // 自动注册图标组件
        // IconsResolver({
        //   enabledCollections: ['ep'],
        // })
      ],
      // dts: path.resolve(pathSrc, 'components.d.ts'),
    }),
    // Icons({
    //   autoInstall: true,
    // }),
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

  },
  // 生产打包成静态页后部署到nginx等web服务器中
  // 生产上就不存在代理了 
  server: { // 跨域代理
    proxy: {
      // /foo/123 => http://localhost:4567/foo/123
      '/foo': ' http://localhost:4567/foo',
      '/webutil': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      },
      '/jc': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      },
      '/admin': {
        // target: 'http://jsonplaceholder.typicode.com/api', // 代理的目标地址
        target: 'http://localhost:3000/api',
        // 兼容基于名字的虚拟主机
        // 有些服务器会跑多个网站（多个域名） 
        // 同虚拟主机的方式将不同域名请求区分出来
        // 通过域名映射本地端口的服务方式
        // a.com localhost:xxx
        // b.com localhost:xxx
        // 域名从http请求头部的 origin 字段
        // 开发模式：默认的 origin 的真实的 origin：localhost：3000
        // changeOrigin: true 就会把Origin修改为目标地址 http://jsonplaceholder.typicode.com
        changeOrigin: true,
        
        // 路径重写
        // http://jsonplaceholder.typicode.com/api/xxx
        //  /api/xxx  =>  http://jsonplaceholder.typicode.com/api/xxx    不用路径重写
        //  /api/xxx  =>  http://jsonplaceholder.typicode.com/xxx        需要路径重写

        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }

})
