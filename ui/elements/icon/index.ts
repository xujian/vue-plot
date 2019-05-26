import PaIcon from './Icon'

const Plugin = {
  install (Vue: any) {
    Vue.component(PaIcon.name, PaIcon)
  }
}

export default Plugin

export {
  PaIcon
}
