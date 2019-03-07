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
    }
  },
  filenameHashing: false
}
