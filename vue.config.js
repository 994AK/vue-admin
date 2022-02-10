module.exports = {
  /* webpack devSever 提供的代码服务 */
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001/', // api接口基础路径
        changeOrigin: true, // 是否支持跨域
        pathRewrite: {
          '^/api': '' // 重写路径：去掉路径中开头的 '/api'
        }
      }
    }
  }
}
