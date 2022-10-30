// 全局导入 ElementPlus 组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { App } from 'vue'

// 写成插件的形式
export default {
  install (app: App) {
    app.use(ElementPlus, { size: 'mini' })
  }
}
