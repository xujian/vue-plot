<template>
  <div class="position">
    <p class="text-center">X: {{prop.value.x}} Y: {{prop.value.y}} Z: {{prop.value.z}}</p>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'PaPosition'
})
export default class PaPosition extends PropInput {

}
</script>

<style>

</style>
