<template>
  <div class="prop-string row">
    <div class="col">
      <div class="prop-label">{{prop.label}}</div>
    </div>
    <div class="col">
      <q-input
        square dense dark
        standout="bg-secondary"
        type="number"
        suffix="%"
        :value="prop.value.number"
        @input="onInput"></q-input>
    </div>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { Component, Prop as PropDecorator } from 'vue-property-decorator'

@Component({
  name: 'PaPercent'
})
export default class PaPercent extends PropInput {
  onInput (value: string) {
    console.log('Percent.vue===========', value)
    this.emitChange({
      ...this.prop,
      value: value + '%'
    })
  }
}
</script>