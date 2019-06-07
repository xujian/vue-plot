import PaContainer from '../../core/Container'
import { Component, Prop } from 'vue-property-decorator'

@Component({
  template: `<div class="pa-box">
    <slot></slot>
  </div>`
})
export default class PaBox extends PaContainer {

}
