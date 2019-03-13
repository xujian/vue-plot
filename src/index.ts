import __Vue__ from 'vue'
import { charts, plugins } from './charts'
import PaChart from './core/chart'
import ChartFactory from './core/chart/Factory'
import globalConfigs, { setGlobalConfigs } from './core/utils/configs'
import { config } from '@vue/test-utils';

function initGlobalObject(Vue: typeof __Vue__) {
  let chartlib = new Vue({
    computed: {
      configs: {
        get: () => globalConfigs,
        set: function (configs: any) {
          setGlobalConfigs(configs)
          this.$emit('configs.changed', {
            configs
          })
        }
      },
      theme: {
        get: function() {
          return globalConfigs.theme
        },
        set: function(theme: string) {
          console.log('glogbleCOnfigs.----------///////set', theme)
          globalConfigs.theme = theme
          setGlobalConfigs(globalConfigs)
          this.$bus.emit('theme.changed', {
            theme: theme
          })
        }
      }
    }
  })
  Object.assign(Vue.prototype, {
    $chartlib: chartlib
  })
}

const Chartlib = {
  install(Vue: typeof __Vue__, configs = {}) {
    setGlobalConfigs(configs)
    for (let k in plugins) {
      Vue.use(plugins[k])
    }
    initGlobalObject(Vue)
  }
}

export {
  PaChart,
  ChartFactory
}

// useage: Vue.use(ChartLib)
export default Chartlib
