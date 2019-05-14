<template>
  <div class="prop-boolean row">
    <div class="col col-label">
      <div class="prop-label">{{prop.label}}</div>
    </div>
    <div class="col col-input">
      <q-checkbox
        dark
        color="secondary"
        :value="prop.value.valueOf()"
        @input="onInput"></q-checkbox>
    </div>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { QCheckbox } from 'quasar'
import { Component, Prop as PropDecorator } from 'vue-property-decorator'

@Component({
  name: 'PaBooeleanProp',
  components: {
    QCheckbox
  }
})
export default class PaBooleanProp extends PropInput {
  onInput (value: boolean) {
    this.commit(value)
  }
}
</script>
