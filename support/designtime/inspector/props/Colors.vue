<template>
  <div class="prop-colors row">
    <div class="col">
      <div class="prop-label">{{prop.label}}</div>
    </div>
    <div class="col">
      <div class="chips" v-if="sequence.length > 0">
        <q-chip 
          dense=""
          v-for="(c, i) in sequence"
          :key="i"
          :color="c"
          :label="c"></q-chip>
      </div>
      <div v-else class="empty">(未设置)</div>
      <q-input
        borderless dense standout
        placeholder="#hex,rgba(0,0,0,0.2)"
      ></q-input>
    </div>
  </div>
</template>

<script lang="ts">
import { QChip, QInput } from 'quasar'
import PropInput from './PropInput'
import { Component, Prop as PropDecorator } from 'vue-property-decorator'

@Component({
  name: 'PaColorsProp',
  components: {
    QChip, QInput
  },
  data () {
    return {
      sequence: this.value.value.value || ['#009688']
    }
  }
})
export default class PaString extends PropInput {
  onInput (value: string) {
    this.emitChange({
      ...this.prop,
      value
    })
  }
  mounted () {
    console.log('Colors.vue____________mounted', this.value.value.value)
  }
}
</script>
