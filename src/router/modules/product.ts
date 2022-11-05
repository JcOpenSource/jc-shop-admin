import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'product',
  name: 'product',
  component: RouterView,
  meta: {
    title: '商品',
    requiresAuth: true
  },
  children: [
    {
      path: 'list',
      name: 'product_list',
      component: () => import('@/views/production/list/listIndex.vue'),
      meta: {
        title: '商品列表'
      }
    },
    {
      path: 'classify',
      name: 'product_classify',
      component: () => import('@/views/production/classify/classifyIndex.vue'),
      meta: {
        title: '商品分类'
      }
    },
    {
      path: 'attr',
      name: 'product_attr',
      component: () => import('@/views/production/attr/attrIndex.vue'),
      meta: {
        title: '商品规格'
      }
    },
    {
      path: 'replay',
      name: 'product_replay',
      component: () => import('@/views/production/replay/replayIndex.vue'),
      meta: {
        title: '商品评论'
      }
    }
  ]
}

export default routes
