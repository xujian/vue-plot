import __Vue__ from 'vue'
import PaPieChart from './Pie'
import PaRingChart from './Ring'
import { VueClass } from 'vue-class-component/lib/declarations'

const Plugin = {
  install(Vue: typeof __Vue__) {
    Vue.component(PaPieChart.name, PaPieChart)
    Vue.component(PaRingChart.name, PaRingChart)
  }
}

// Vue.use(Plugin)

export default Plugin

export {
  PaPieChart,
  PaRingChart
}
