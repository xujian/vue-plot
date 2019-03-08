import * as charts from './charts'
import config, { setOptions } from './utils/config'

const Chartlib = {
  install (Vue, options = {}) {
    setOptions(Object.assign(config, options))
    for (let k in charts) {
      console.log('chartlib/src/index.js', k, charts[k])
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
