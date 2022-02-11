import { getUserInfo, login } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem, removeAllItems } from '@/utils/storeage'
import { TOKEN } from '@/constant'
import router from '@/router'
export default {
  /* 单独模块 */
  namespace: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
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
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
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
            const { token } = data
            this.commit('setToken', token)
            // 登录成功后操作 -> 跳转
            router.push('/')
            resolve()
          })
          /* 请求失败 */
          .catch((err) => {
            reject(err)
          })
      })
    },

    /* 获取用户信息动作 */
    async getUserInfo() {
      // 请求获取用户信息接口
      const res = await getUserInfo()
      this.commit('setUserInfo', res)
      return res
    },
    logout() {
      this.commit('setToken', '')
      this.commit('setUserInfo', {})
      removeAllItems()
      // TODO: 权限缓存
      router.push('/login')
    }
  }
}
