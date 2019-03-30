let mocks: {[key: string]: any} = {}
const requires = require.context('./chart', true, /.ts$/)

requires.keys().forEach((k: string) => {
  let matches = k.match(/([\w\-]+)\.ts$/)
  if (matches && matches[1]) {
    let name: string = matches[1]
    mocks[name] = requires(k).default
  }
})

export default mocks
