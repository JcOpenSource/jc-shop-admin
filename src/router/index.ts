import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// 同步加载页面
import AppLayoutVue from '@/layout/AppLayout.vue'

import productRoutes from './modules/product'
import mediaRoutes from './modules/media'
import orderRoutes from './modules/order'
import permissionRoutes from './modules/permission'

// 进度条
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// RouteRecordRaw routes的提示
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayoutVue,
    children: [
      {
        path: '/',
        name: 'home',
        component: async () => await import('../views/home/homeIndex.vue'),
        meta: {
          title: '主页'
        }
      },
      mediaRoutes,
      orderRoutes,
      permissionRoutes,
      productRoutes
    ]
  },
  {
    path: '/login',
    name: 'login',
    // 异步加载页面
    component: async () => await import('../views/login/loginIndex.vue')
  },
  {
    path: '/helloapp',
    name: 'HelloApp',
    component: async () => await import('../views/HelloApp.vue')
  }
]

const router = createRouter({
  // 路由模式
  history: createWebHashHistory(),
  // 路由规则
  routes
})

// 全局前置路由守卫
router.beforeEach(() => {
  nprogress.start() // 开始加载进度条
})

// 全局后置路由守卫
router.afterEach(() => {
  nprogress.done() // 进度条加载结束
})

export default router
