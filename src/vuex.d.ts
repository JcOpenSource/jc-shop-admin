// 给 template 的 $store 提供类型补充（Vue 组件中 $store 属性的类型声明）
// vuex.d.ts
import { Store } from 'vuex'
import { State } from './store'

declare module '@vue/runtime-core' {
  // 声明自己的 store state
  // interface State {
  //   count: number
  // }

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
