const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      [process.env.VUE_APP_BASE_API]: { // 代理标识, 如果出现了这个就代表需要代理
        target: process.env.VUE_APP_SERVICE_URL,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },

  }

})
