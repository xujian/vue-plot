import _Vue, { PluginObject, PluginFunction } from 'vue'
import { plugins } from './charts'
import accessories from './core/accessories'
import { setGlobalConfigs } from './core/shared/configs'
import ThemeManager from './providers/echarts/themes'
import $chartlib from './$chartlib'

type PluginOptions = {
  theme: string,
}

const install: PluginFunction<PluginOptions> =
  (Vue: typeof _Vue, options?: PluginOptions) => {
    setGlobalConfigs(options)
    ThemeManager.init()
    for (let k in plugins) {
      Vue.use(plugins[k])
    }
    for (let t in accessories) {
      let a = accessories[t]
      Vue.component(a.name, a)
    }
    Vue.prototype['$chartlib'] = $chartlib
  }

export const Chartlib: PluginObject<PluginOptions> = {
  install: install
}

export default Chartlib

export {
  install
}

export { default as PaChart } from './core/chart'
export { default as ChartFactory } from './core/chart/Factory'
export { default as mocks } from './mocks'
