const path = require('path')

module.exports = {
  chainWebpack: config => {
  },
  configureWebpack: {
    output: {
    },
    externals: {
      vue: 'Vue'
    },
    optimization: {
      splitChunks: false
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  filenameHashing: false
}
