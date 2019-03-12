import Vue from 'vue'
import PaLineChart from './Line'
import { VueClass } from 'vue-class-component/lib/declarations';

const Plugin = {
  install (Vue: VueClass<Vue>) {
    Vue.component(PaLineChart.name, PaLineChart)
  }
}

// Vue.use(Plugin)

export default Plugin

export {
  PaLineChart
}
