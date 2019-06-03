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
    config.resolve.alias
      .delete('vue$')
      .set('vue$', 'vue/dist/vue.esm.js')
    config
      .plugin('webpack-bundle-analyzer')
      .use(BundleAnalyzerPlugin)
  },

  configureWebpack: {
    output: {},
    externals: {
      vue: {
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue',
        root: 'Vue'
      },
      echarts: {
        commonjs: 'echarts',
        commonjs2: 'echarts',
        amd: 'echarts',
        root: 'window.echarts'
      },
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
        'vue$': 'vue/dist/vue.esm.js',
      }
    }
  },

  filenameHashing: false,

  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar[\\\/]/
  ]
}
