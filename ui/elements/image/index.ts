import PaImage from './Image'

const Plugin = {
  install (Vue: any) {
    Vue.component(PaImage.name, PaImage)
  }
}

export default Plugin

export {
  PaImage
}
