<template>
  <div class="inspector">
    <div class="front" @click="onFrontClick">
      <q-tabs
        v-model="tab" dense inline-label
        align="right"
        :breakpoint="0">
        <q-tab v-for="t in tabs" :key="t.name" :name="t.name" :label="t.label"></q-tab>
      </q-tabs>
      <q-tab-panels v-model="tab" animated="">
        <q-tab-panel v-for="t in tabs" :key="t.name" :name="t.name">
          <q-list class="items" v-if="props.length > 0">
            <q-item
              v-for="(prop, index) in props.filter(p => p.category === t.name).sort((a, b) => a.order - b.order)"
              :key="index">
              <q-item-section>
                <div class="prop-item" v-if="prop.input">
                  <component
                  :is="prop.input"
                  :value="prop"
                  @change="onPropChange(prop.name, $event)"
                  @drawerRequired="callDrawer"></component>
                </div>
                <div v-else class="prop-item-na">
                  <h6>{{prop.label}}</h6>
                  <p>尚未实现</p>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-tab-panel>
      </q-tab-panels>
      <div v-if="value.length === 0"
        class="empty full-height">
        <h6 class="info text-center">无可用配置项</h6>
      </div>
    </div>
    <div class="drawer" :class="{'active': drawerActive}">
      <div class="color-picker-container">
        <q-color dark
          v-if="drawerColor"
          :value="drawerColor"
          @input="onColorPickerInput"
          class="color-picker"
          ></q-color>
      </div>
    </div>
  </div>
</template>

<script>
import './inspector.css'
import { 
  QList, QItem, QItemSection, QItemLabel,
  QTabs, QTab, QTabPanels, QTabPanel, QColor
} from 'quasar'

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
  computed: {
    props () {
      return this.value
    }
  },
  data () {
    return {
      components: {},
      props: [],
      tabs: [
        {
          name: 'props',
          label: '关键属性'
        },
        {
          name: 'styles',
          label: '样式'
        },
        {
          name: 'events',
          label: '联动'
        }
      ],
      tab: 'props',
      drawerActive: false,
      drawerColor: '',
      drawColorCallback: undefined
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
    const req = require.context('./props', true, /.vue$/)
    req.keys().forEach(filename => {
      let name = filename.match(/([\w\-]+)\.vue$/)[1]
      this.components[name] = req(filename).default
    })
    this.updateProps()
  },
  methods: {
    onPropChange (name, prop) {
      // 更新本地数据并向上通知
      console.log('Inspector.vue________________________onPropChange', prop)
      let updated = [...this.props]
      updated.forEach(p => {
        if (p.name === name) {
          p.value = prop.value
        }
      })
      this.props = updated
      this.$emit('change', [prop])
    },
    updateProps () {
      this.props = this.value.map(p => {
        let type = typeof p.type === 'string'? p.type: p.type.name
        p.input = this.components[type]
        return p
      })
    },
    callDrawer (data) {
      let { command, payload } = data
      if (payload.data === false) {
        this.drawerActive = false
      } else {
        this.drawerActive = true
        this.drawerColor = payload.data
        this.drawColorCallback = payload.callback
      }
    },
    onColorPickerInput (value) {
      if (this.drawColorCallback) {
        this.drawColorCallback.call(this, value)
      }
    },
    onFrontClick () {
      this.callDrawer({
        command: 'command',
        payload: {
          data: false
        }
      })
    }
  },
  components: {
    QList,
    QItem,
    QItemSection,
    QTabs,
    QTab,
    QTabPanels,
    QTabPanel,
    QColor
  }
}
</script>

<style lang="stylus">
.inspector
  .q-tabs--dense
    .q-tab
      min-height 24px
    .q-tab__label
      padding 0 0
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
