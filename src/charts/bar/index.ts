import Vue from 'vue'
import PaBarChart from './Bar'
import { VueClass } from 'vue-class-component/lib/declarations'

const Plugin = {
  install (Vue: VueClass<Vue>) {
    Vue.component(PaBarChart.name, PaBarChart)
  }
}

// Vue.use(Plugin)

export default Plugin

export {
  PaBarChart
}
