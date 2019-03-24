import __Vue__ from 'vue'
import PaTreeChart from './Tree'

const Plugin = {
  install(Vue: typeof __Vue__) {
    Vue.component(PaTreeChart.name, PaTreeChart)
  }
}

export default Plugin

export { PaTreeChart }
