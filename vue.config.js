const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 8080,
     proxy: {
      "/api": {
        "target": 'http://sph-h5-api.atguigu.cn'
        // 后端接口携带 /api 则不需要重写
      }
    }
  },
  lintOnSave: false
})