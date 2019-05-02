<template>
  <div class="inspector">
    <header>
      <h1>属性</h1>
    </header>
    <main>
      <pa-props
        :value="controlProps"
        @change="onPropsChange">
      </pa-props>
      <pa-props
        :value="chartProps"
        @change="onPropsChange">
      </pa-props>
    </main>
  </div>
</template>

<script>
import './inspector.css'
import PaProps from './Props.vue'

export default {
  name: 'PaInspector',
  props: {
    value: {
      type: [Array, Object]
    }
  },
  data () {
    return {
    }
  },
  computed: {
    uuid () {
      return this.value.uuid
    },
    controlProps () {
      return this.value.controlProps
    },
    chartProps () {
      return this.value.chartProps
    }
  },
  watch: {
  },
  mounted () {
    console.log('Inspector.vue moundted', this.value,
    this.value.constructor.name)
  },
  methods: {
    onPropsChange (props) {
      this.$bus.emit('canvas', {
        command: 'propsUpdated',
        data: {
          uuid: this.value.uuid,
          props: props
        }
      })
    }
  },
  components: {
    PaProps
  }
}
</script>

<style lang="stylus">
.inspector
  header
    height 32px
    background-color rgba(44, 44, 44, 0.5)
    h1
      line-height 32px
      font-size 14px
      padding 0 12px
  main
    .q-list
      border none
  .q-toggle__label
    font-size 12px
</style>
