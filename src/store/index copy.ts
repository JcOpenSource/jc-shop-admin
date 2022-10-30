import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'

export interface State {
  count: number
  foo: string
}
// 定义 injection key
// Symbol 要起名字
export const key: InjectionKey<Store<State>> = Symbol('store')

// 创建一个新的 store 实例
// 约束对象createStore
// 按需导出
export const store = createStore<State>({
  state () {
    return {
      count: 0,
      foo: 'Hello state'
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

// 默认导出
// export default store

// 定义自己的 `useStore` 组合式函数
export function useStore (): Store<State> {
  return baseUseStore(key)
}
