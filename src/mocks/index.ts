let mocks: any[] = []
const requires = require.context('./chart', true, /.ts$/)

requires.keys().forEach((k: string) => {
  let name: string = k.match(/([\w\-]+)\.ts$/)[1]
  mocks[name] = requires(k).default
})

export default mocks
