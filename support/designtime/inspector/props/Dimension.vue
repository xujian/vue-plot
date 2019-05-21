<template>
  <div class="prop-dimension">
    <p class="text-center">宽度: {{ prop.value.width }} 高度: {{ prop.value.height }}</p>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'PaDimensionProp'
})
export default class PaDimensionProp extends PropInput {

}
</script>
