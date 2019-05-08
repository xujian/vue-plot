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
            @click.stop="onChipsClick(i)"></q-btn>
          </q-btn-group>
          <q-btn class="append-btn"
            size="xs"
            label="+"
            @click.stop="onAppendClick"></q-btn>
          <q-btn class="clear-btn"
            size="xs"
            label="X"
            @click.stop="onDeleteClick"></q-btn>
      </div>
      <div v-else class="empty">
        <span>(not set)</span>
        <q-btn flat @click="onCreateClick">➡️</q-btn>
      </div>
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
  activeIndex: number = -1
  sequence: string[] = []
  onCreateClick () {
    this.sequence = ['#000000']
  }
  onChipsClick (selected: number) {
    this.activeIndex = selected
    this.callColorPicker(this.sequence[selected])
  }
  callColorPicker (data?: any, callback?: (color: string) => {}) {
    this.$emit('drawerRequired', {
      command: 'color', payload: {
        data, callback: this.colorUpdated
      }
    })
  }
  onAppendClick () {
    let seq = [...this.sequence]
    seq.push('#000000')
    this.sequence = seq
  }
  onDeleteClick () {
    let seq = [...this.sequence]
    seq.pop()
    this.sequence = seq
  }
  colorUpdated (color: string) {
    console.log('Colors.vue____________colorUpdated', color, this.activeIndex)
    let seq = [...this.sequence]
    seq[this.activeIndex] = color
    this.sequence = seq
    this.emitChange({
      ...this.prop,
      value: this.sequence
    })
  }
  mounted () {
    this.sequence = this.prop.value.value || []
  }
}
</script>
