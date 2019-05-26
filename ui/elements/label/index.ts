import PaTable from './Table'

const Plugin = {
  install (Vue: any) {
    Vue.component(PaTable.name, PaTable)
  }
}

export default Plugin

export {
  PaTable
}
