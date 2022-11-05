/**
 * 公共基础接口封装
*/

import request from '@/utils/request'
import { ILoginResponse } from './types/common'

// 接口返回图片数据 Blob 二进制数据
export const getCaptcha = () => {
  return request<Blob>({
    method: 'GET',
    url: '/webutil/captch2',
    params: { // 加上时间戳 确保每次请求的接口都不一样 防止浏览器缓存
      stamp: Date.now()
    },
    responseType: 'blob' // 请求获取图片数据
  })
}

export const login = (data: {
  account: string
  pwd: string
  imgCode: string
}) => {
  return request<ILoginResponse>({
    method: 'POST',
    url: '/jc/login',
    data
  })
}
