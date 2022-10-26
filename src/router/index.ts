import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// RouteRecordRaw routes的提示
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: async () => await import('../views/home/homeIndex.vue')
  },
  {
    path: '/login',
    name: 'login',
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
