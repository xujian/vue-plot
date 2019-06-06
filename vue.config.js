const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const vueAlias = '../designer/node_modules/vue/dist/vue.esm.js'

module.exports = {
  runtimeCompiler: true,
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
      .set('vue$', vueAlias)
    config
      .plugin('webpack-bundle-analyzer')
      .use(BundleAnalyzerPlugin)
  },

  configureWebpack: {
    output: {},
    externals: [
      {
        vue: {
          commonjs: 'vue',
          commonjs2: 'vue',
          amd: 'vue',
          root: 'Vue'
        }
      },
      /^echarts/, // 写成这样才能去掉echarts 缺德
    ],
    optimization: {
      splitChunks: false
    },
    plugins: [
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@chartlib': path.resolve(__dirname, './src'),
        '@ui': path.resolve(__dirname, './ui'),
        '@sb': path.resolve(__dirname, './.storybook'),
        'vue$': vueAlias,
      }
    }
  },

  filenameHashing: false,

  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar[\\\/]/
  ]
}
