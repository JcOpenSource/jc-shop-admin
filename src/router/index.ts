import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// 同步加载页面
import AppLayoutVue from '@/layout/AppLayout.vue'

import productRoutes from './modules/product'
import mediaRoutes from './modules/media'
import orderRoutes from './modules/order'
import permissionRoutes from './modules/permission'

// RouteRecordRaw routes的提示
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayoutVue,
    children: [
      {
        path: '/',
        name: 'home',
        component: async () => await import('../views/home/homeIndex.vue')
      },
      productRoutes,
      mediaRoutes,
      orderRoutes,
      permissionRoutes
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

export default router
