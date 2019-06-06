import Vue from 'vue'
import globalConfigs, { setGlobalConfigs } from './core/shared/configs'
import Bus from './core/shared/events/bus'

export default class Service {
  private constructor () {

  }
  static get instance () {
    if (!Vue.prototype.$chartlib) {
      Vue.prototype.$chartlib = new Vue({
        data () {
          return {
            popups: [],
            inspectable: {}
          }
        },
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
            get: function () {
              return globalConfigs.theme
            },
            set: function (theme: string) {
              globalConfigs.theme = theme
              setGlobalConfigs(globalConfigs)
              Bus.emit('theme.changed', { theme })
            }
          }
        },
        methods: {
          popup () {

          }
        }
      })
    }
    return Vue.prototype.$chartlib
  }
}
