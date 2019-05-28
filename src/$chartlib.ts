import Vue from 'vue'
import globalConfigs, { setGlobalConfigs } from './core/shared/configs'
import Bus from './core/shared/events/bus'

let $chartlib = new Vue({
  data () {
    return {
      popups: []
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

export default $chartlib
