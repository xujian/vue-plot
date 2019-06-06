import Vue from 'vue'
import globalConfigs, { setGlobalConfigs } from './core/shared/configs'
import Bus from './core/shared/events/bus'

export default class Service {
  private static __instance: Service
  private constructor () {

  }
  static get instance () {
    if (!Service.__instance) {
      Service.__instance = new Vue({
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
        },
        created () {
          console.log('$chartlib--------------------------created')
        }
      })
    }
    return Service.__instance
  }
}
