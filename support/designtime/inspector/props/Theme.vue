<template>
  <div class="prop-theme row">
    <div class="col">
      <div class="prop-label">{{prop.label}}</div>
    </div>
    <div class="col">
      <q-select
        dense borderless standout
        clearable dark options-dark
        toggle-color="secondary"
        placeholder="dark"
        :value="prop.value? prop.value.name: undefined"
        @input="onInput"
        :options="[
          'dark',
          'warm',
          'cold'
        ]"></q-select>
    </div>
  </div>
</template>

<script lang="ts">
import { QSelect } from 'quasar'
import PropInput from './PropInput'
import { Component, Prop as PropDecorator } from 'vue-property-decorator'

@Component({
  name: 'PaThemeProp',
  components: {
    QSelect
  }
})
export default class PaThemeProps extends PropInput {
  onInput (selected: any) {
    this.commit(selected)
  }
}
</script>
