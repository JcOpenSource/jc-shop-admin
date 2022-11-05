import request from '@/utils/request'
import { ICaptcho } from './types/webutil'

export const getCaptcho = () => {
  return request<ICaptcho>({
    method: 'GET',
    url: 'webutil/captch'
  })
}
