import Vue from 'vue'
import PaBarChart from './Bar'

const Plugin = {
  install (Vue) {
    Vue.component(PaBarChart.name, PaBarChart)
  }
}

// Vue.use(Plugin)

export default Plugin

export {
  PaBarChart
}
