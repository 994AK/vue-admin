import axios from 'axios'

const service = axios.create({
  /* 生产环境 与 测试环境 地址切换 */
  baseUrl: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

export default service
