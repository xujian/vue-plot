import Vue from 'vue'
import PaGaugeChart from './Gauge'
import { VueClass } from 'vue-class-component/lib/declarations';

const Plugin = {
  install (Vue: VueClass<Vue>) {
    Vue.component(PaGaugeChart.name, PaGaugeChart)
  }
}

// Vue.use(Plugin)

export default Plugin

export {
  PaGaugeChart
}
