import __Vue__ from 'vue'
import PaRoseChart from './Rose'

const Plugin = {
  install(Vue: typeof __Vue__) {
    Vue.component(PaRoseChart.name, PaRoseChart)
  }
}

export default Plugin

export { PaRoseChart }
