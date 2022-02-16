import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'

export const useLogin = () => {
  const store = useStore()
  const uselogin = reactive({
    /* 切换密码模式 */
    passwordType: 'password',
    /* 登录加载状态 */
    loading: false,
    /* 表单验证判断 */
    loginFormRef: false,
    /* 用户默认信息 */
    loginForm: {
      username: 'super-admin',
      password: '123456'
    },
    /* 表单验证 */
    loginRules: {
      username: [
        {
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }
      ]
    },
    /* template 显示密码功能 */
    onChangePwdType() {
      uselogin.passwordType === 'password'
        ? (uselogin.passwordType = 'text')
        : (uselogin.passwordType = 'password')
    },
    /* 处理登录 */
    handleLogin() {
      uselogin.loginFormRef.validate((valid) => {
        if (!valid) return
        /* 登录 */
        uselogin.loading = true
        store
          .dispatch('login', uselogin.loginForm)
          .then(() => {
            uselogin.loading = false
            /* TODO: 登录成功后的处理 */
          })
          .catch((error) => {
            console.log(error)
            uselogin.loading = false
          })
      })
    }
  })

  return { ...toRefs(uselogin) }
}
