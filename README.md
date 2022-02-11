# vue-admin

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```
## 后台登录方案

1. 封装axios模块 -> `src/utils/request.js`
2. 封装接口模块 -> `src/api/sys.js`
3. 封装登录请求动作 -> `src/store/modules/user.js`
4. 保存服务返回的token -> `src/utils/storeage.js`
5. 登录鉴权 -> `src/permission.js`
