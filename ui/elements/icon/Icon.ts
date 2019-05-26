import PaElement from '../../core/Element'
import { Component, Prop } from 'vue-property-decorator'

@Component({
  template: `
    <div class="pa-icon">
      <i :class="classNames"></i>
    </div>
  `
})
export default class PaIcon extends PaElement {

  /**
   * Icon's family (set)
   */
  @Prop({
    type: String,
    default: 'icon'
  })
  family?: string

  @Prop({
    type: String,
    default: 'icon'
  })
  name?: string

  @Prop({
    type: String,
    default: '#fff'
  })
  color?: string

  private classNames: string = ''

  beforeMount () {
  }
}
