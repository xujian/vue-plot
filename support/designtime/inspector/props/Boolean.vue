<template>
  <div class="prop-boolean row">
    <div class="col">
      <div class="prop-label">{{prop.label}}</div>
    </div>
    <div class="col">
      <q-toggle
        dark
        color="secondary"
        v-model="propValue"></q-toggle>
    </div>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { QToggle } from 'quasar'
import { Component, Prop as PropDecorator } from 'vue-property-decorator'

@Component({
  name: 'PaBooeleanProp',
  components: {
    QToggle
  },
  data () {
    return {
      propValue: false
    }
  },
  watch: {
    propValue (val: boolean) {
      this.onInput(val)
    }
  }
})
export default class PaString extends PropInput {
  
  onInput (value: boolean) {
    console.log('Boolean.vue_________________________////onIput', value)
    this.emitChange({
      ...this.prop,
      value: value
    })
  }

  mounted () {
    console.log('BOolean.vue-_______________________', this.prop)
  }
}
</script>

<style>

</style>
