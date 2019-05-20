import Vue from 'vue'
import PaLiquidChart from './Liquid'
import { VueClass } from 'vue-class-component/lib/declarations'

const Plugin = {
  install (Vue: VueClass<Vue>) {
    Vue.component(PaLiquidChart.name, PaLiquidChart)
  }
}

// Vue.use(Plugin)

export default Plugin

export {
  PaLiquidChart
}
