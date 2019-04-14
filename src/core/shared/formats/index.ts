let formats: { [key: string]: any } = {}
const requires = require.context('../../../formats/', true, /.ts$/)

requires.keys().forEach((k: string) => {
  let matches = k.match(/([\w\-]+)\.ts$/)
  if (matches && matches[1]) {
    let name: string = matches[1]
    formats[name] = requires(k).default
  }
})
export default formats