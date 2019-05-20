import Vue from 'vue'
import Pa3dBarChart from './ThreedBar'
import { VueClass } from 'vue-class-component/lib/declarations'

const Plugin = {
  install (Vue: VueClass<Vue>) {
    Vue.component(Pa3dBarChart.name, Pa3dBarChart)
  }
}

// Vue.use(Plugin)

export default Plugin

export {
  Pa3dBarChart
}
