<template>
  <div class="prop-colors row">
    <div class="col">
      <div class="prop-label">{{prop.label}}</div>
    </div>
    <div class="col">
      <div class="chips" v-if="sequence.length > 0">
        <q-btn-group class="pipe">
          <q-btn
            size="xs"
            v-for="(c, i) in sequence"
            :key="i"
            :style="{backgroundColor:c}"
            :label="i + 1"
            @click="onChipsClick(i)"></q-btn>
            <q-btn class="append-btn"
              size="xs"
              label="+"></q-btn>
          </q-btn-group>
      </div>
      <div v-else class="empty">(未设置)</div>
    </div>
  </div>
</template>

<script lang="ts">
import { QBtnGroup, QBtn, QInput, QColor } from 'quasar'
import PropInput from './PropInput'
import { Component, Prop as PropDecorator } from 'vue-property-decorator'

@Component({
  name: 'PaColorsProp',
  components: {
    QBtnGroup, QBtn, QInput, QColor
  }
})
export default class PaString extends PropInput {
  private __sequence: string[] = []
  activeIndex: number = -1
  get sequence (): string[] {
    this.__sequence = this.prop.value.value || []
    if (this.__sequence.length === 0) {
      this.__sequence = ['#e57373','#009688','#FFC107']
    }
    return this.__sequence
  }
  onChipsClick (selected: number) {
    if (selected === this.activeIndex) {
      this.activeIndex = -1
      this.callColorPicker(false)
    } else {
      this.activeIndex = selected
      this.callColorPicker(this.sequence[selected])
    }
  }
  callColorPicker (data?: any, callback?: (color: string) => {}) {
    this.$emit('drawerRequired', {
      command: 'color', payload: {
        data, callback: this.colorUpdated
      }
    })
  }
  colorUpdated (color: string) {
    console.log('Colors.vue____________colorUpdated', color, this.activeIndex)
    this.__sequence[this.activeIndex] = color
    this.emitChange({
      ...this.prop,
      value: this.__sequence
    })
  }
  mounted () {
  }
}
</script>
