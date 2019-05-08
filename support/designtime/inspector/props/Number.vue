<template>
  <div class="prop-number row">
    <div class="col col-label">
      <div class="prop-label">{{prop.label}}</div>
    </div>
    <div class="col col-input">
      <q-input
        square dense dark
        standout="bg-secondary"
        color="secondary"
        type="number"
        :value="prop.value"
        @input="onInput"></q-input>
    </div>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'PaNumber'
})
export default class PaString extends PropInput {
  onInput (value: number) {
    this.prop.value = value
    this.emitChange({
      ...this.prop
    })
  }
}
</script>