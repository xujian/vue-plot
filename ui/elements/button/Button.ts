import PaElement from '../../core/Element'
import { Component, Prop } from 'vue-property-decorator'

@Component({
  template: `
    <button class="pa-button" :class="classNames">
      <slot></slot>
    </button>
  `
})
export default class PaButton extends PaElement {

  beforeMount () {
  }
}
