import PaLabel from './Label'

const Plugin = {
  install (Vue: any) {
    Vue.component(PaLabel.name, PaLabel)
  }
}

export default Plugin

export {
  PaLabel
}
