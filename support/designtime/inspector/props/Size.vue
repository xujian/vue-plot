<template>
  <div class="prop-size row">
    <div class="col col-label">
      <div class="prop-label">{{ prop.label }}</div>
    </div>
    <div class="col col-input">
      <q-select
      :value="value"
      :options="[
        'tn', 'xs', 'sm', 'lg', 'xl'
      ]" />
    </div>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'PaSizeProp'
})
export default class PaSizeProp extends PropInput {
  onInput (value: number) {
    this.commit(value)
  }
  beforeMounted () {
    if (!this.prop.value) {
      this.prop.value = 'sm'
    }
  }
}
</script>
