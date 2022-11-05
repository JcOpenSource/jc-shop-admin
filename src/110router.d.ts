// Router meta 类型
import 'vue-router'

declare module 'vue-router' {
  interface RouteMate {
    title?: string
    requiresAuth?: boolean
  }
}
