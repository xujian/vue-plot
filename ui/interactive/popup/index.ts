import PaPopup from './Popup'

const Plugin = {
  install (Vue: any) {
    Vue.component(PaPopup.name, PaPopup)
  }
}

export default Plugin

export {
  PaPopup
}
