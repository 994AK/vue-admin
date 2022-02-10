import { login } from '@/api/sys'
import md5 from 'md5'

export default {
  /* 单独模块 */
  namespace: true,
  state: () => ({}),
  mutations: {},
  actions: {
    /* 登录请求动作 */
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          /* 请求成功 */
          .then((data) => {
            resolve()
          })
          /* 请求失败 */
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
