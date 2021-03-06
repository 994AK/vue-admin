import axios from 'axios'
import store from '@/store'
import { ElMessage } from 'element-plus'

const service = axios.create({
  /* 生产环境 与 测试环境 地址切换 */
  baseUrl: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    //  统一注入 token
    if (store.getters.token) {
      config.headers.Authorization = 'Bearer ' + store.getters.token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    // 需要判断当前请求是否成功
    if (success) {
      // 成功返回解析后的数据
      return data
    } else {
      // 失败（请求成功, 业务失败）消息提示
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  async (error) => {
    if (error.response && error.response.data && error.response.code === 401) {
      await store.dispatch('logout')
    }
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)
export default service
