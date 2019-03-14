import __Vue__ from 'vue'
import PaScatterChart from './Scatter'

const Plugin = {
  install(Vue: typeof __Vue__) {
    Vue.component(PaScatterChart.name, PaScatterChart)
  }
}

// Vue.use(Plugin)

export default Plugin

export { PaScatterChart }
