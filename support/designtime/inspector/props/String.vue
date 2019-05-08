<template>
  <div class="prop-string row">
    <div class="col">
      <div class="prop-label">{{prop.label}}</div>
    </div>
    <div class="col">
      <q-input
        square dense dark
        standout="bg-secondary"
        :value="prop.value || ''"
        placeholder="(未设置)"
        @input="onInput"></q-input>
    </div>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { Component, Prop as PropDecorator } from 'vue-property-decorator'

@Component({
  name: 'PaStringProp'
})
export default class PaString extends PropInput {
  onInput (value: string) {
    this.prop.value = value
    this.emitChange({
      ...this.prop
    })
  }
}
</script>
