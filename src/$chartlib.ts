import Vue from 'vue'
import globalConfigs, { setGlobalConfigs } from './core/utils/configs'
import Bus from './core/utils/events/bus'

let $chartlib = new Vue({
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
        globalConfigs.theme = theme
        setGlobalConfigs(globalConfigs)
        Bus.emit('theme.changed', {
          theme: theme
        })
      } 
    }
  }
})

export default $chartlib
