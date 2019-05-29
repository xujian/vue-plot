import Vue from 'vue'
import PaPictorialBarChart from './PictorialBar'
import { VueClass } from 'vue-class-component/lib/declarations';

const Plugin = {
  install (Vue: VueClass<Vue>) {
    Vue.component(PaPictorialBarChart.name, PaPictorialBarChart)
  }
}

// Vue.use(Plugin)

export default Plugin

export {
  PaPictorialBarChart
}
