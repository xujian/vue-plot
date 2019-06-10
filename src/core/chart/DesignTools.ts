import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component({
  template: `<div class="designtools">
    <a href="javascript:void(0)" class="button" @click="onPropsButtonClick">属性</a>
  </div>`
})
export default class DesignTool extends Vue {
  onPropsButtonClick () {
    this.$emit('propsClick')
  }

}
