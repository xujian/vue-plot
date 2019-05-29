import Vue from 'vue'
import PaBarChart from './Bar'
import PaPolarChart from './Polar'
import { VueClass } from 'vue-class-component/lib/declarations'

const Plugin = {
  install (Vue: VueClass<Vue>) {
    Vue.component(PaBarChart.name, PaBarChart)
    Vue.component(PaPolarChart.name, PaPolarChart)
  }
}

// Vue.use(Plugin)

export default Plugin

export {
  PaBarChart,
  PaPolarChart
}
