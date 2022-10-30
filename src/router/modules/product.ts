import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'product',
  name: 'product',
  component: RouterView,
  children: [
    {
      path: 'list',
      name: 'product_list',
      component: () => import('@/views/production/list/listIndex.vue')
    },
    {
      path: 'classify',
      name: 'product_classify',
      component: () => import('@/views/production/classify/classifyIndex.vue')
    },
    {
      path: 'attr',
      name: 'product_attr',
      component: () => import('@/views/production/attr/attrIndex.vue')
    },
    {
      path: 'replay',
      name: 'product_replay',
      component: () => import('@/views/production/replay/replayIndex.vue')
    }
  ]
}

export default routes
