<template>
  <div class="prop-item-boolean">
    <q-toggle
      dark
      color="secondary"
      :label="prop.label"
      :value="prop.__value"
      @input="onInput"></q-toggle>
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
    console.log('Boolean.vue ------onInputXXXXXXXXXXX', value)
    this.emitChange({
      ...this.prop,
      value
    })
  }

  mounted () {
    console.log('Boolean.vue------------mounted', this.prop)
  }
}
</script>

<style>

</style>
