import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'permission',
  name: 'permission',
  component: RouterView,
  meta: {
    title: '维护'
  },
  children: [
    {
      path: 'admin',
      name: 'permission_admin',
      component: () => import('@/views/permission/admin/adminIndex.vue'),
      meta: {
        title: '管理员'
      }
    },
    {
      path: 'role',
      name: 'permission_role',
      component: () => import('@/views/permission/role/roleIndex.vue'),
      meta: {
        title: '角色'
      }
    },
    {
      path: 'rule',
      name: 'permission_rule',
      component: () => import('@/views/permission/rule/ruleIndex.vue'),
      meta: {
        title: '规则'
      }
    }
  ]
}

export default routes
