import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component({
  template: `<div class="designtools">
    <a href="#" class="button" @click="onPropsButtonClick">属性</a>
  </div>`
})
export default class DesignTool extends Vue {
  onPropsButtonClick () {
    this.$emit('propsClick')
  }

}
