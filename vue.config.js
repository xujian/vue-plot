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
      fallback: [path.join(__dirname, '../node_modules')],
      alias: {
        vue$: '../node_modules/vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  filenameHashing: false
}
