import merge from 'lodash/merge'

let presets: {[key: string]: any} = {}
const requires = require.context('../../presets', true, /.ts$/)

requires.keys().forEach((k: string) => {
  let matches = k.match(/([\w\-]+)\.ts$/)
  if (matches && matches[1]) {
    let name: string = matches[1]
    presets[name] = requires(k).default
  }
})


/**
 * 直接在provider阶段处理preset
 */
export default (props: any) => {
  let preset: string[] = (props.preset || '').split(',')
  let results: any[] = preset.map(p => {
    if (p in presets) {
      return presets[p]
    } else {
      return {}
    }
  })
  return merge({}, ...results)
}
