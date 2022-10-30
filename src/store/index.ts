import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'

const state = {
  count: 0,
  foo: 'Hello state',
  isCollapse: false
}

export type State = typeof state

export const key: InjectionKey<Store<State>> = Symbol('store')

// 创建一个新的 store 实例
// 约束对象createStore
// 按需导出
export const store = createStore<State>({
  state,
  mutations: {
    increment (state) {
      state.count++
    },
    setIsCollapse (state, payload) {
      state.isCollapse = payload
    }
  }
})

// 默认导出
// export default store

// 定义自己的 `useStore` 组合式函数
export function useStore (): Store<State> {
  return baseUseStore(key)
}
