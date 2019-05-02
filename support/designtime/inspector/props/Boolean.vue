<template>
  <div class="prop-boolean row">
    <div class="col">
      <div class="prop-label">{{prop.label}}</div>
    </div>
    <div class="col">
      <q-toggle
        dark
        color="secondary"
        :value="prop.__value"
        @input="onInput"></q-toggle>
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

  mounted () {
  }
}
</script>

<style>

</style>
