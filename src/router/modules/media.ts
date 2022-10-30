import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'media',
  name: 'media',
  component: () => import('@/views/media/mediaIndex.vue'),
  meta: {
    title: '媒体'
  }
}

export default routes
