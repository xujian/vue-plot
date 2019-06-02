<template>
  <div class="prop-range row">
    <div class="col col-label">
      <div class="prop-label">{{prop.label}}</div>
    </div>
    <div class="col col-input">
      <q-range
        label
        color="secondary"
        :value="range"
        @change="onChange"
        :min="0"
        :max="100"
      />
    </div>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { QRange, QBadge } from 'quasar'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'PaRangeProp',
  components: {
    QRange,
    QBadge
  }
})
export default class PaRangeProp extends PropInput {
  get range () {
    return this.prop.value && this.prop.value.value ? {
      min: this.prop.value.value[0],
      max: this.prop.value.value[1]
    } : {
      min: this.prop.default[0],
      max: this.prop.default[1]
    }
  }
  set range (value: any) {
  }
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
