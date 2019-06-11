import PaMarquee from './Marquee'

const Plugin = {
  install(Vue: any) {
    Vue.component(PaMarquee.name, PaMarquee)
  }
}

export default Plugin

export {
  PaMarquee
}
