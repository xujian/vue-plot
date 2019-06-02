const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

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
    config
      .plugin('webpack-bundle-analyzer')
      .use(BundleAnalyzerPlugin)
  },

  configureWebpack: {
    output: {},
    externals: {
      vue: 'vue',
      echarts: 'echarts',
      'echarts-gl': 'echarts-gl'
    },
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
      }
    }
  },

  filenameHashing: false,

  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar[\\\/]/
  ]
}
