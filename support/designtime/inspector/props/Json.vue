<template>
  <div class="prop-json row">
    <div class="col">
      <div class="prop-label">{{prop.label}}</div>
    </div>
    <div class="col">
      <h6>JSON</h6>
    </div>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { QRange, QBadge } from 'quasar'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'PaString',
  components: {
    QRange,
    QBadge
  }
})
export default class PaString extends PropInput {
  
  onChange (val: any) {
    this.emitChange({
      ...this.prop,
      value: [val.min, val.max]
    })
  }
}
</script>

<style>

</style>
