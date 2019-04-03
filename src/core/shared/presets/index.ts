/**
 * 管理图表预设
 * 预设是一组属性值的组合
 * <pa-chart preset="gdp-of-year">
 * {
 *   name: 'gdp-of-year',
*   title: '年度GDP'
 * }
 */


let presets: { [key: string]: any } = {}
const requires = require.context('../../../presets/', true, /.ts$/)

requires.keys().forEach((k: string) => {
  let matches = k.match(/([\w\-]+)\.ts$/)
  if (matches && matches[1]) {
    let name: string = matches[1]
    presets[name] = requires(k).default
  }
})
console.log('presets/index.js@@@@@@@@@@@@@@', presets)
export default presets

export class PresetManager {
  static init() {

  }

  static get (name: string | undefined): any {
    if (!name) {
      return {}
    }
    if (!Reflect.has(presets, name)) {
      console.warn('[Chartlib warn] preset not found, given: ' + name)
    }
    return presets[name] || {}
  }
}
