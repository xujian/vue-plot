import Vue from 'vue'
import PaMapChart from './Map'
import { VueClass } from 'vue-class-component/lib/declarations';

const Plugin = {
  install (Vue: VueClass<Vue>) {
    Vue.component(PaMapChart.name, PaMapChart)
  }
}

// Vue.use(Plugin)

export default Plugin

export { PaMapChart }
