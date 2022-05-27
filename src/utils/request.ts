import axios from 'axios'

const request = axios.create({
  baseURL: 'https://shop.fed.lagou.com/api/admin'
})
// 请求拦截器
request.interceptors.request.use(function (config) {
  // 统一设置用户身份 token

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  // 统一处理接口响应错误，比如token过期，服务端异常等
  return response
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

export default request
