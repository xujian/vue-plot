import __Vue__ from 'vue'
import { plugins } from './elements'
import './css/index.less'

export const Uilib = {
  install (Vue: typeof __Vue__) {
    for (let k in plugins) {
      Vue.use(plugins[k])
    }
  }
}

export default Uilib
