<template>
  <div class="dimension">
    <p class="text-center">宽度: {{prop.value.width}} 高度: {{prop.value.height}}</p>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { Component, Prop as PropDecorator } from 'vue-property-decorator'

@Component({
  name: 'PaDimension'
})
export default class PaDimension extends PropInput {

}
</script>

<style>

</style>
