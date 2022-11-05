import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { IUserInfo } from '../api/types/common'
import { setItem, getItem } from '../utils/storage'
import { USER } from '@/utils/constant'

const state = {
  count: 0,
  foo: 'Hello state',
  // 从本地存储获取初始化
  userInfo: getItem<{ token: string } & IUserInfo>(USER),
  // token 和 userInfo 合并到一起
  // userInfo: JSON.parse(window.localStorage.getItem('user') ?? 'null') as IUserInfo | null,
  isCollapse: false
}

export type State = typeof state

export const key: InjectionKey<Store<State>> = Symbol('store')

// 创建一个新的 store 实例
// 约束对象createStore
// 按需导出
export const store = createStore<State>({
  state,
  //  mutation 变化
  mutations: {
    increment (state) {
      state.count++
    },
    setUserInfo (state, payload) {
      state.userInfo = payload
      // 持久化到本地
      // window.localStorage.setItem('user', JSON.stringify(state.userInfo))
      setItem(USER, state.userInfo)
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
