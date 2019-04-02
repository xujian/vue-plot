const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .delete('vue$')
      .set('vue$', '../designer/node_modules/vue/dist/vue.runtime.esm.js')
  },
  configureWebpack: {
    output: {},
    externals: {
      vue: 'Vue'
    },
    optimization: {
      splitChunks: false
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@sb': path.resolve(__dirname, './.storybook'),
        vue$: '../designer/node_modules/vue/dist/vue.runtime.esm.js'
      }
    }
  },
  filenameHashing: false
}
