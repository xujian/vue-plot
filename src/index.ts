import __Vue__ from 'vue'
import { charts, plugins } from './charts'
import accessories from './core/accessories'
import globalConfigs, { setGlobalConfigs } from './core/shared/configs'
import ThemeManager from './providers/echarts/themes'
import $chartlib from './$chartlib'

export const Chartlib = {
  install (Vue: typeof __Vue__, configs = {}) {
    setGlobalConfigs(configs)
    ThemeManager.registerPresetThemes()
    for (let k in plugins) {
      Vue.use(plugins[k])
    }
    for (let t in accessories) {
      let a = accessories[t]
      Vue.component(a.name, a)
    }
    Vue.prototype['$chartlib'] = $chartlib
  }
}

// useage: Vue.use(ChartLib)
export default Chartlib

export { default as PaChart } from './core/chart'
export { default as ChartFactory } from './core/chart/Factory'
export { default as mocks } from './mocks'
