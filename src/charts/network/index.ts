import Vue from 'vue'
import PaNetworkChart from './Network'
import { VueClass } from 'vue-class-component/lib/declarations'

const plugin = {
  install(Vue: VueClass<Vue>) {
    Vue.component(PaNetworkChart.name, PaNetworkChart)
  }
}

// Vue.use(plugin)

export default plugin

export {
  PaNetworkChart
}
