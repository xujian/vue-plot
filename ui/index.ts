import __Vue__ from 'vue'
import { plugins as elementsPlugins } from './elements'
import { plugins as interactivePlugins } from './interactive'
import './css/index.less'

export const Uilib = {
  install (Vue: typeof __Vue__) {
    for (let k in elementsPlugins) {
      Vue.use(elementsPlugins[k])
    }
    for (let k in interactivePlugins) {
      Vue.use(interactivePlugins[k])
    }
  }
}

export default Uilib
