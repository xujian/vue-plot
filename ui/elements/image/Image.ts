import PaElement from '../../core/Element'
import { Component, Prop } from 'vue-property-decorator'

@Component({
  template: `
    <div class="pa-image">
      <img :src="url" />
    </div>
  `
})
export default class PaImage extends PaElement {

  /**
   * Icon's family (set)
   */
  @Prop({
    type: String,
    default: 'icon'
  })
  url?: string

  private classNames: string = ''

  beforeMount () {
  }
}
