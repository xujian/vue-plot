<template>
  <div class="prop-percent row">
    <div class="col col-label">
      <div class="prop-label">{{prop.label}}</div>
    </div>
    <div class="col col-input">
      <q-input
        square dense dark
        standout="bg-secondary"
        type="number"
        suffix="%"
        placeholder="(not set)"
        :value="prop.value && prop.value.number"
        @input="onInput"></q-input>
    </div>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { Component, Prop as PropDecorator } from 'vue-property-decorator'

@Component({
  name: 'PaPercentProp'
})
export default class PaPercent extends PropInput {
  onInput (value: number) {
    this.prop.value.number = value
    this.emitChange(this.prop)
  }
  beforeMounted () {
    if (!this.prop.value) {
      this.prop.value.number = 10
    }
  }
}
</script>