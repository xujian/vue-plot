import PaBox from './Box'

const Plugin = {
  install (Vue: any) {
    Vue.component(PaBox.name, PaBox)
  }
}

export default Plugin

export {
  PaBox
}
