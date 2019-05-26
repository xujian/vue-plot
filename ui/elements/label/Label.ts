import PaElement from '../../core/Element'
import { Component, Prop } from 'vue-property-decorator'

@Component({
  template: `
    <div class="pa-label">
      <span>{{ text }}</span>
    </div>
  `
})
export default class PaLabel extends PaElement {

  /**
   * Icon's family (set)
   */
  @Prop({
    type: String,
    default: 'sm'
  })
  size?: string

  @Prop({
    type: String,
    default: 'Label'
  })
  text?: string

  private classNames: string = ''

  beforeMount () {
  }
}
