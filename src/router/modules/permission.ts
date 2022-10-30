import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'permission',
  name: 'product',
  component: RouterView,
  children: [
    {
      path: 'admin',
      name: 'permission_admin',
      component: () => import('@/views/permission/admin/adminIndex.vue')
    },
    {
      path: 'role',
      name: 'permission_role',
      component: () => import('@/views/permission/role/roleIndex.vue')
    },
    {
      path: 'rule',
      name: 'permission_rule',
      component: () => import('@/views/permission/rule/ruleIndex.vue')
    }
  ]
}

export default routes
