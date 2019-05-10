<template>
  <div class="prop-theme row">
    <div class="col">
      <div class="prop-label">{{prop.label}}</div>
    </div>
    <div class="col">
      <q-select
        dense borderless standout
        clearable dark options-dark
        color="secondary"
        toggle-color="secondary"
        label=""
        v-model="selected"
        :options="[
          { label: 'Dark', value: 'dark'},
          { label: 'Warm', value: 'warm'},
          { label: 'Cold', value: 'cold'},
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
  },
  data () {
    return {
      selected: this.prop.value
    }
  }
})
export default class PaThemeProps extends PropInput {
  onInput (value: string) {
    this.emitChange({
      ...this.prop,
      value
    })
  }
}
</script>
