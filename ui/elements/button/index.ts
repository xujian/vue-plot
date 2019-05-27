import PaButton from './Button'

const Plugin = {
  install (Vue: any) {
    Vue.component(PaButton.name, PaButton)
  }
}

export default Plugin

export {
  PaButton
}
