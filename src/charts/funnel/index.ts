import Vue from 'vue'
import PaFunnelChart from './Funnel'
import { VueClass } from 'vue-class-component/lib/declarations';

const Plugin = {
  install (Vue: VueClass<Vue>) {
    Vue.component(PaFunnelChart.name, PaFunnelChart)
  }
}

// Vue.use(Plugin)

export default Plugin

export {
  PaFunnelChart
}
