import * as components from './components'
import config, { setOptions } from './utils/config'

const Chartlib = {
  install (Vue, options = {}) {
    setOptions(Object.assign(config, options))
    for (let k in components) {
      Vue.use(components[k])
    }
    Vue.prototype['$chartlib'] = {
      setOptions (options) {
        setOptions(Object.assign(config, options))
      }
    }
  }
}

export default Chartlib
