// 快捷访问
const getters = {
  token: (state) => state.user.token,
  /*
   *  hasUserInfo
   *  @returns true 表示用户信息已存在
   *  */
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  userInfo: (state) => state.user.userInfo
}

export default getters
