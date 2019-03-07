import Vue from 'vue'
import PaBuendia from './Buendia'

const Plugin = {
  install (Vue) {
    Vue.component(PaBuendia)
  }
}

Vue.use(Plugin)

export default Plugin

export {
  PaBuendia
}
