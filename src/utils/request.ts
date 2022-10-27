import axios, { AxiosRequestConfig } from 'axios'

// 克隆 实例 不会影响axios本身
const request = axios.create({
  baseURL: 'https://shop.fed.lagou.com/api/admin'
})

/**
 * request 不支持泛型
 * request.get post put 支持响应数据泛型
 * 由于我们的后端有包装了一层数据data，导致我们访问数据比较麻烦，所以我们
 * 自己封装了一个request
*/

// 请求拦截器
// Add a request interceptor
// axios.interceptors.request.use
request.interceptors.request.use(function (config) {
  // 统一设置用户身份 token
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
// Add a response interceptor
request.interceptors.response.use(function (response) {
  // 统一处理接口响应错误，比兔token过期无效、服务端异常等
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    // 将 res.data.data 转换为 T 的类型
    return res.data.data as T
  })
}
