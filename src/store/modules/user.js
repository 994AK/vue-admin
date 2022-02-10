import { login } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem } from '@/utils/storeage'
import { TOKEN } from '@/constant'
export default {
  /* 单独模块 */
  namespace: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      /*
       *  setItem(key,value)
       *  key: token名字
       *  value: token
       *  */
      setItem('TOKEN', token)
    }
  },
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
            this.commit('setToken', data.data.data.token)
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
