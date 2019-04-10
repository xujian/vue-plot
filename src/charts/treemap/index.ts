import __Vue__ from 'vue'
import PaTreemapChart from './Treemap'

const Plugin = {
  install(Vue: typeof __Vue__) {
    Vue.component(PaTreemapChart.name, PaTreemapChart)
  }
}

export default Plugin

export { PaTreemapChart }
