import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'order',
  name: 'order',
  component: RouterView,
  children: [
    {
      path: 'list',
      name: 'order_list',
      component: () => import('@/views/order/list/listIndex.vue')
    },
    {
      path: 'offline',
      name: 'order_offline',
      component: () => import('@/views/order/offline/offlineIndex.vue')
    }
  ]
}

export default routes
