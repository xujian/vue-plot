import PaPopupPlugin, { PaPopup } from './popup'
import PaSlidePlugin, { PaSlide } from './slide'

const plugins: {[name: string]: any,} = {
  PaPopupPlugin,
  PaSlidePlugin
}

const tools = {
  PaPopup,
  PaSlide
}

export {
  tools,
  plugins
}
