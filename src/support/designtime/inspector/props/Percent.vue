<template>
  <q-input
    dark
    type="number"
    suffix="%"
    :float-label="prop.label"
    :value="prop.value.number"
    @input="onInput"></q-input>
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

<style>

</style>
