import PaBoard from './Board'

const Plugin = {
  install (Vue: any) {
    Vue.component(PaBoard.name, PaBoard)
  }
}

export default Plugin

export {
  PaBoard
}
