/**
 * 公共基础接口封装
*/

import request from '@/utils/request'
import { ILoginInfo } from './types/common'
// import { AxiosPromise } from 'axios'

// interface getLogininfo {
//   status: number
//   msg: string
//   data: {
//     logo_square: string
//     logo_rectangle: string
//     login_logo: string
//     slide: string[]
//   }
// }

// interface ResponseData<T = any> {
//   status: number
//   msg: string
//   data: T
// }

// : AxiosPromise<getLogininfo>
// export const getLoginInfo =
//   async (): AxiosPromise<ResponseData<{
//     logo_square: string
//     logo_rectangle: string
//     login_logo: string
//     slide: string[]
//   }>> => {
//     // return await request({
//     //   method: 'GET',
//     //   // 前面的/可以加也可以不用加
//     //   url: '/login/info'
//     // })

//     // return await request.get<getLogininfo>('/login/info')

//     return await request.get('/login/info')
//   }

// export const getLoginInfo = async () => {
//     return await request.get<ResponseData<{
//       logo_square: string
//       logo_rectangle: string
//       login_logo: string
//       slide: string[]
//     }>>('/login/info').then(res => {
//       return res.data
//     })
//   }

// export interface loginInfo {
//   logo_square: string
//   logo_rectangle: string
//   login_logo: string
//   slide: string[]
// }
export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/admin/login/info'
  })
}
