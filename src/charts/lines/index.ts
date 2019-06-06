import Vue from 'vue'
import PaLinesChart from './Lines'
import { VueClass } from 'vue-class-component/lib/declarations'

const Plugin = {
  install(Vue: VueClass<Vue>) {
    Vue.component(PaLinesChart.name, PaLinesChart)
  }
}

// Vue.use(Plugin)

export default Plugin

export {
  PaLinesChart
}
