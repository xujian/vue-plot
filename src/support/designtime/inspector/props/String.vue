<template>
  <q-input
    dark
    :float-label="prop.label"
    :value="prop.value"
    @input="onInput"></q-input>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { Component, Prop as PropDecorator } from 'vue-property-decorator'

@Component({
  name: 'PaString'
})
export default class PaString extends PropInput {
  onInput (value: string) {
    this.emitChange({
      ...this.prop,
      value
    })
  }
}
</script>

<style>

</style>
