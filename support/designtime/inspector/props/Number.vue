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
        placeholder="(not set)"
        :value="prop.value"
        @change="onInput"></q-input>
    </div>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'PaNumberProp'
})
export default class PaNumberProp extends PropInput {
  onInput (value: number) {
    this.prop.value = value
    this.emitChange({
      ...this.prop
    })
  }
}
</script>