import PaElement from '../../core/Element'
import { Component, Prop } from 'vue-property-decorator'
import Inspectable, { PropTypes } from '../../../support/designtime/inspectable'

@Component({
  template: `
    <button
      class="pa-button"
      @click="onClick()">
      <slot></slot>
    </button>
  `
})
export default class PaButton extends PaElement {

  @Inspectable({
    label: '事件',
    type: String,
    category: 'events',
    order: 1,
    default: ''
  })
  @Prop({
    type: String,
    default: ''
  })
  goto?: string

  onClick () {
    if (this.goto) {
      let [command, payload] = this.goto.split(':')
      this.bus.emit(command, {
        name: payload
      })
    }
    this.bus.emit('button', this.uuid)
  }

  beforeMount () {
  }
}
