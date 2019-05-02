<template>
  <div class="prop-string row">
    <div class="col">
      <div class="prop-label">{{prop.label}}</div>
    </div>
    <div class="col">
      <q-input
        square dense dark
        standout="bg-secondary"
        :value="prop.value"
        @input="onInput"></q-input>
    </div>
  </div>
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
