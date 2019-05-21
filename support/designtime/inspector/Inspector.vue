<template>
  <div class="inspector">
    <div class="front" @click="onFrontClick">
      <q-toolbar dark>
        <q-toolbar-title>属性</q-toolbar-title>
        <q-btn-dropdown class="realm-select"
          stretch flat dark
          :label="getLabel()"
          menu-anchor="top left">
          <q-list dark class="inspector-realm-menu bg-primary"
            style="width:160px">
            <q-item clickable
              @click="applyProps('main')">
              <q-item-section>
                <q-item-label>外层图表</q-item-label>
              </q-item-section>
            </q-item>
            <q-item-label header>内嵌图表</q-item-label>
            <q-item
              v-for="(layer, index) in value.layers"
              :key="index"
              clickable
              @click="applyProps('layer-' + index)">
              <q-item-section>
                <q-item-label>{{ layer.name }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item-label header>内嵌组件</q-item-label>
            <q-item clickable>
              <q-item-section>
                <q-item-label>pa-tooltiip</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
      <q-tabs
        v-model="tab" dense inline-label
        align="right"
        :breakpoint="0">
        <q-tab v-for="t in tabs" :key="t.name" :name="t.name" :label="t.label" />
      </q-tabs>
      <q-tab-panels v-model="tab" animated="">
        <q-tab-panel v-for="t in tabs" :key="t.name" :name="t.name">
          <q-list v-if="props.length > 0" class="items">
            <q-item
              v-for="(prop, index) in props.filter(p => p.category === t.name).sort((a, b) => a.order - b.order)"
              :key="index">
              <q-item-section>
                <div v-if="prop.input" class="prop-item">
                  <component
                    :is="prop.input"
                    :value="prop"
                    @change="onPropChange(prop.name, $event)"
                    @drawerRequired="callDrawer"
                  />
                </div>
                <div v-else class="prop-item-na">
                  <h6>{{ prop.label }}</h6>
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
        <q-color
          v-if="drawerColor"
          dark
          :value="drawerColor"
          class="color-picker"
          @input="onColorPickerInput"
        />
      </div>
    </div>
  </div>
</template>

<script>
import './inspector.css'
import {
  QList, QItem, QItemSection, QItemLabel,
  QTabs, QTab, QTabPanels, QTabPanel, QColor,
  QToolbar, QToolbarTitle, QBtnDropdown, QSpace,
  ClosePopup
} from 'quasar'

export default {
  name: 'PaInspector',
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    uuid: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      components: {},
      props: this.value.main,
      realm: 'main', // 右上角属性组
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
        this.applyProps()
      }
    }
  },
  mounted () {
    const req = require.context('./props', true, /.vue$/)
    req.keys().forEach(filename => {
      let name = filename.match(/([\w\-]+)\.vue$/)[1]
      this.components[name] = req(filename).default
    })
    this.applyProps()
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
    applyProps (realm) {
      this.realm = realm || 'main'
      let activeProps = []
      if (this.realm === 'main') {
        activeProps = this.value.main
      } else if (this.realm.startsWith('layer')) {
        let index = parseInt(this.realm.replace('layer-', ''), 10)
        activeProps = this.value.layers[index].props
      } else if (this.realm.startsWith('accessory')) {
        let index = parseInt(this.realm.replace('accessory-', ''), 10)
        activeProps = this.value.accessories[index].props
      }
      this.props = activeProps.map(p => {
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
    },
    getLabel () {
      if (this.realm === 'main') {
        return '外层图表'
      } else if (this.realm.startsWith('layer')) {
        let index = parseInt(this.realm.replace('layer-', ''), 10)
        let t = this.value.layers[index].name
        return '内嵌图表:' + t
      } else if (this.realm.startsWith('accessory')) {
        let index = parseInt(ths.realm.replace('accessory-', ''), 10)
        let t = this.value.accessories[index].name
        return '内嵌图表:' + t
      }
      return '(NA)'
    }
  },
  components: {
    QList, QItem, QItemSection, QItemLabel,
    QTabs, QTab, QTabPanels, QTabPanel, QColor,
    QToolbar, QToolbarTitle, QBtnDropdown, QSpace,
    ClosePopup
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
