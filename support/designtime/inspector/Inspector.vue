<template>
  <div class="inspector">
    <q-list class="items" v-if="props.length > 0">
      <q-item
        v-for="(prop, index) in value"
        :key="index">
        <q-item-section>
          <div class="prop-item" v-if="prop.input">
            <component
            :is="prop.input"
            :value="prop"
            @change="onPropChange(index, $event)"></component>
          </div>
          <div v-else class="prop-item-na">
            <h6>{{prop.label}}</h6>
            <p>尚未实现</p>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
    <div v-if="value.length === 0"
      class="empty full-height">
      <h6 class="info text-center">无可用配置项</h6>
    </div>
  </div>
</template>

<script>
import './inspector.css'
import { QList, QItem, QItemSection, QItemLabel } from 'quasar'

export default {
  name: 'PaInspector',
  props: {
    value: {
      type: [Array, Object]
    },
    uuid: {
      type: String
    }
  },
  data () {
    return {
      components: {},
      props: []
    }
  },
  computed: {
  },
  watch: {
    value: {
      handler () {
        this.updateProps()
      }
    }
  },
  mounted () {
    console.log('Props.vue<><', this.props)
    const req = require.context('./props', true, /.vue$/)
    req.keys().forEach(filename => {
      let name = filename.match(/([\w\-]+)\.vue$/)[1]
      this.components[name] = req(filename).default
    })
    this.updateProps()
  },
  methods: {
    onPropChange (propIndex, prop) {
      // 更新本地数据并向上通知
      this.props[propIndex].value = prop.value
      this.$emit('change', [prop])
    },
    updateProps () {
      this.props = this.value.map(p => {
        let type = typeof p.type === 'string'? p.type: p.type.name
        p.input = this.components[type]
        return p
      })
    }
  },
  components: {
    QList,
    QItem,
    QItemSection
  }
}
</script>

<style lang="stylus">
.inspector
  .q-list
    border none
  h6
    font-size 12px
    &.info
      color #999
  .empty
    color #999
    h3
      font-size 12px
      text-align center
  .q-item
    padding 0
    min-height  24px
    border-bottom 1px solid rgba(255,255,255,0.2)
  .prop-item
    width 100%
  .prop-item-na
    text-align center
    padding 8px 0
    color #999
    h6
      line-height 1.2em
  .empty
    color #999
    h6
      font-size 12px
  .q-toggle__label
    font-size 12px
</style>
