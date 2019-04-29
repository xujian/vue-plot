<template>
  <q-input
    dark
    type="number"
    suffix="%"
    :float-label="prop.label"
    :value="prop.value"
    @input="onInput"></q-input>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'PaNumber'
})
export default class PaString extends PropInput {
  onInput (value: number) {
    this.prop = {
      number: value
    }
    this.emitChange({
      ...this.prop,
      value
    })
  }
}
</script>

<style>

</style>
