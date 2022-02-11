import router from '@/router'
import store from '@/store'

// 页面白名单 不登录也可以访问
const whiteList = ['/login']

/* 路由强制守卫 */
/*
 *  @param {*} to 要到哪个路由去
 *  @param {*} from 从哪个路由来
 *  @param {*} next 是否要过去那个路由
 *
 *  */
router.beforeEach(async (to, from, next) => {
  if (store.getters.token) {
    // 用户登录成功
    if (to.path === '/login') {
      next('/')
    } else {
      if (!store.getters.hasUserInfo) {
        await store.dispatch('getUserInfo')
      }
      next()
    }
  } else {
    // 用户未登录 只能进login
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
