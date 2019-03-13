import __Vue__ from 'vue'
import { charts, plugins } from './charts'
import PaChart from './core/chart'
import ChartFactory from './core/chart/Factory'
import config, { setOptions } from './core/utils/config'

const Chartlib = {
  install (Vue: typeof __Vue__, options = {}) {
    setOptions(Object.assign(config, options))
    for (let k in plugins) {
      Vue.use(plugins[k])
    }
    Vue.prototype['$chartlib'] = {
      setOptions (options) {
        setOptions(Object.assign(config, options))
      }
    }
  }
}

export {
  PaChart,
  ChartFactory
}

// useage: Vue.use(ChartLib)
export default Chartlib
