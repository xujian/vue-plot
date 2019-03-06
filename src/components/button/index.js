import Vue from 'vue'
import PaButton from './Button'

const Plugin = {
  install (Vue) {
    Vue.component(PaButton)
  }
}

Vue.use(Plugin)

export default Plugin

export {
  PaButton
}
