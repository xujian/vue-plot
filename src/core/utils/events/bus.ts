import Vue from 'vue'

const Bus = new Vue({
  methods: {
    emit (event, ...args) {
      this.$emit(event, ...args)
    },
    on (event, callback) {
      this.$on(event, callback)
    },
    off (event, callback) {
      this.$off(event, callback)
    },
    once (event, callback) {
      this.$once(event, callback)
    }
  }
})

export default Bus
