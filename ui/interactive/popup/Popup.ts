import PaComponent from '../../../src/core/chart/Component'
import { Component, Prop } from 'vue-property-decorator'
import Inspectable, { PropTypes } from '../../../support/designtime/inspectable'


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

  @Inspectable({
    type: String,
    label: '标识符',
    order: 2
  })
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
