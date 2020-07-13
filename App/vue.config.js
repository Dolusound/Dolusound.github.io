process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "src/styles/main.scss";`
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    hot: true,
    overlay: {
      errors: true
    },
    port: 8082,
    useLocalIp: true
  },
  runtimeCompiler: true
}
