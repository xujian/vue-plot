const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    },
    quasar: {
      treeShake: true
    }
  },

  chainWebpack: config => {
    config.resolve.alias
      .delete('vue$')
      .set('vue$', '../designer/node_modules/vue/dist/vue.runtime.esm.js')
    config
      .plugin('webpack-bundle-analyzer')
      .use(BundleAnalyzerPlugin)
  },

  configureWebpack: {
    output: {},
    externals: {
      vue: 'Vue',
      echarts: 'echarts'
    },
    optimization: {
      splitChunks: false
    },
    plugins: [
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@sb': path.resolve(__dirname, './.storybook'),
        vue$: '../designer/node_modules/vue/dist/vue.runtime.esm.js'
      }
    }
  },

  filenameHashing: false,

  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar[\\\/]/
  ]
}
