import merge from 'lodash/merge'

let presets: { [key: string]: any } = {}
const requires = require.context('../../../presets/', true, /.ts$/)

requires.keys().forEach((k: string) => {
  let matches = k.match(/([\w\-]+)\.ts$/)
  if (matches && matches[1]) {
    let name: string = matches[1]
    presets[name] = requires(k).default
  }
})
export default presets

/**
 * 管理图表预设
 * 预设是一组属性值的组合
 * <pa-chart preset="gdp-by-years">
 * {
 *   name: 'gdp-by-years',
*   title: '年度GDP'
 * }
 */
export class PresetManager {
  static init() {

  }

  static get (name: string | string[] | undefined): any {
    if (!name) {
      return {}
    }
    if (typeof name === 'string') {
      name = name.split(/\,/)
    }
    let result = {}
    name.forEach(n => {
      if (!Reflect.has(presets, n)) {
        console.warn('[Chartlib warn] preset not found, given: ' + name)
      }
      let preset = presets[n] || {}
      if (preset.parent) {
        let parent = PresetManager.get(preset.parent)
        preset = merge({}, parent, preset)
      }
      result = merge({}, result, preset)
      console.log('presetmanager.get_______________', result, n)
    })
    return result
  }
}
