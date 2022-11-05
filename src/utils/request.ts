import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'

// 克隆 实例 不会影响axios本身
const request = axios.create({
  // baseURL: 'https://shop.fed.lagou.com/api/admin'

  // 不设置 baseURL 就是当前页面所处域名 即：http://127.0.0.1:5173/
  // baseURL: import.meta.env.VITE_API_BASEURL

  // 不建议将代理域名写在这里
  // 如果有多个代理这里不方便统一配置
  // baseURL: '/admin'
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
  console.log('config:', config)
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
// Add a response interceptor
request.interceptors.response.use(function (response) {
  // 统一处理接口响应错误，比兔token过期无效、服务端异常等
  // 自定义状态码处理
  if (response.data.status && response.data.status !== 200) {
    console.log(response.data.msg)
    ElMessage.error(response.data.msg ?? '请求失败，请稍后重试')
    // 手动返回一个promise异常
    return Promise.reject(response.data)
  }
  return response
}, function (error) {
  // http 状态码 业务逻辑处理
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    // 将 res.data.data 转换为 T 的类型
    console.log('Http Response :', res)
    return (res.data.data ?? res.data) as T
    // return res.data.data as T
  })
}
