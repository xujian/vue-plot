module.exports = {
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
    config.entryPoints.delete('app')
    config.entry('docs').add('./docs/main.ts')
    config.entry('lib').clear()
    config.entry('lib').add('./src/index.ts')
  }
}
