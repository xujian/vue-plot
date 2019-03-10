import __Vue__ from 'vue'
import * as charts from './charts'
import config, { setOptions } from './core/utils/config'

const Chartlib = {
  install (Vue: typeof __Vue__, options = {}) {
    setOptions(Object.assign(config, options))
    for (let k in charts) {
      Vue.use(charts[k])
    }
    Vue.prototype['$chartlib'] = {
      setOptions (options) {
        setOptions(Object.assign(config, options))
      }
    }
  }
}

export default Chartlib
