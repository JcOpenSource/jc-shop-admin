import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'order',
  name: 'order',
  component: RouterView,
  meta: {
    title: '订单',
    requiresAuth: true
  },
  children: [
    {
      path: 'list',
      name: 'order_list',
      meta: {
        title: '订单列表'
      },
      component: () => import('@/views/order/list/listIndex.vue')
    },
    {
      path: 'offline',
      name: 'order_offline',
      meta: {
        title: '订单offline'
      },
      component: () => import('@/views/order/offline/offlineIndex.vue')
    }
  ]
}

export default routes
