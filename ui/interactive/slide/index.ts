import PaSlide from './Slide'

const Plugin = {
  install (Vue: any) {
    Vue.component(PaSlide.name, PaSlide)
  }
}

export default Plugin

export {
  PaSlide
}
