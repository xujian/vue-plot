<template>
  <div class="prop-percent row">
    <div class="col col-label">
      <div class="prop-label">{{prop.label}}</div>
    </div>
    <div class="col col-input">
      <q-input
        square dense dark
        standout="bg-secondary"
        type="number"
        suffix="%"
        placeholder="(not set)"
        :value="prop.value && prop.value.number"
        @change="onInput"></q-input>
    </div>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { Component, Prop as PropDecorator } from 'vue-property-decorator'

@Component({
  name: 'PaPercentProp'
})
export default class PaPercent extends PropInput {
  onInput ($event: Event) {
    console.log('Percent.vue===========', $event)
    let input = $event.target
    this.prop.value = {
      number: (input as any).value
    }
    this.emitChange({
      ...this.prop,
      value: this.prop.value + '%'
    })
  }
  beforeMounted () {
    if (!this.prop.value) {
      this.prop.value = {
        numbner: 10
      }
    }
  }
}
</script>