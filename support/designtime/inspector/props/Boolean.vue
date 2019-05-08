<template>
  <div class="prop-boolean row">
    <div class="col col-label">
      <div class="prop-label">{{prop.label}}</div>
    </div>
    <div class="col col-input">
      <q-toggle
        dark
        color="secondary"
        :value="propValue"
        @input="onInput"></q-toggle>
    </div>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { QToggle } from 'quasar'
import { Component, Prop as PropDecorator } from 'vue-property-decorator'

@Component({
  name: 'PaBooeleanProp',
  components: {
    QToggle
  }
})
export default class PaString extends PropInput {
  propValue: boolean = false
  onInput (value: boolean) {
    this.propValue = value
    this.emitChange({
      ...this.prop,
      value: value
    })
  }
  beforeMount () {
    this.propValue = this.prop.__value || false
  }
}
</script>

<style>

</style>
