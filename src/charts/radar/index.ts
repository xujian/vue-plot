import __Vue__ from 'vue'
import PaRadarChart from './Radar'

const Plugin = {
  install(Vue: typeof __Vue__) {
    Vue.component(PaRadarChart.name, PaRadarChart)
  }
}

export default Plugin

export { PaRadarChart }
