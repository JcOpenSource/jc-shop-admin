import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'

// 加载全局样式
import './styles/index.scss'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { store, key } from './store'

// 全局注入ElementPlus插件
import elementPlus from './plugins/element-plus'

const app = createApp(App)
app.use(router)
app.use(store, key)
app.mount('#app')

app.use(elementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
