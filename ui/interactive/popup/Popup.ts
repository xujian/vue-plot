import { Component, Prop } from 'vue-property-decorator'
import Inspectable, { PropTypes } from '../../../support/designtime/inspectable'
import Bus from '../../../src/core/shared/events/bus'
import PaElement from '../../core/Element'

@Component({
  template: `<div class="pa-popup"
    :class="{active: active}">
    <a class="x"
      href="javascript:void(0);"
      @click="close()">X</a>
    <slot></slot>
  </div>`
})
export default class PaPopup extends PaElement {

  // keep all popup instances
  static instances: PaPopup[] = []

  static listening: boolean = false

  static manager: any = {
    listen () {
      Bus.on('popup', (payload: any) => this.open(payload.name))
      PaPopup.listening = true
    },
    open (name: string) {
      let instance = PaPopup.instances.find((x: PaPopup) => x.name === name)
      if (instance) {
        instance.show()
      }
    }
  }

  active: boolean = false

  show () {
    this.active = true
  }

  close () {
    this.active = false
  }

  created () {
    PaPopup.instances.push(this)
    if (!PaPopup.listening) {
      PaPopup.manager.listen()
    }
    // console.log('Popup.ts________created, this.$chartlib', this.$chartlib)
  }
}
