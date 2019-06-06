<template>
  <div class="prop-string row">
    <div class="col">
      <div class="prop-label">{{ prop.label }}</div>
    </div>
    <div class="col">
      <q-input
        square dense dark clearable
        standout="bg-secondary"
        :value="prop.value || ''"
        placeholder="(未设置)"
        @change="onInput" />
    </div>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'PaStringProp'
})
export default class PaStringProp extends PropInput {
  onInput ($event: Event) {
    let value = ($event.target as any).value
    this.commit(value)
  }
}
</script>
