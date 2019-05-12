<template>
  <div class="prop-styles">
    <div class="prop-label">{{prop.label}}</div>
    <div class="editor" style="height: 60px;">
      <h6>Styles</h6>
    </div>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'PaStylesProp',
  components: {
  }
})
export default class PaStylesProp extends PropInput {
  onChange (val: any) {
    this.emitChange({
      ...this.prop,
      value: val
    })
  }
}
</script>