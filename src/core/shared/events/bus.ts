import Vue from 'vue'

const Bus: any = new Vue({
  methods: {
    emit (event: string, args: any) {
      this.$emit(event, args)
    },
    on (event: string, args: any) {
      this.$on(event, args)
    },
    off (event: string, args: any) {
      this.$off(event, args)
    },
    once (event: string, args: any) {
      this.$once(event, args)
    }
  }
})

export default Bus
