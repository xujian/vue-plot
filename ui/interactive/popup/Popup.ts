import PaComponent from '../../../src/core/chart/Component'
import { Component, Prop } from 'vue-property-decorator'
import { Inspectable } from '../../../support'

@Component({
  template: `<div class="pa-popup"
    :class="{active: active}">
    <a class="close"
      href="javascript:void(0);"
      @click="close()">X</a>
    <slot></slot>
  </div>`
})
export default class PaPopup extends PaComponent {

  active: boolean = false

  @Prop({
    type: String,
    default: ''
  })
  name?: string

  show () {
    this.active = true
  }

  close () {
    this.active = false
  }

  created () {
    // console.log('Popup.ts________created, this.$chartlib', this.$chartlib)
  }
}
