import __Vue__ from 'vue'
import { charts, plugins } from './charts'
import accessories from './core/accessories'
import PaChart from './core/chart'
import ChartFactory from './core/chart/Factory'
import globalConfigs, { setGlobalConfigs } from './core/utils/configs'
import ThemeManager from './providers/echarts/themes'
import Bus from './core/utils/events/bus'
import $chartlib from './$chartlib'
import mocks from './mocks'

const Chartlib = {
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

export {
  PaChart,
  ChartFactory,
  mocks
}

// useage: Vue.use(ChartLib)
export default Chartlib
