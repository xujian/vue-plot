import PaElement from '../../core/Element'
import { Component, Prop } from 'vue-property-decorator'

@Component({
  template: `
    <div class="pa-slide">
      <section></section>
    </div>
  `
})
export default class PaSlide extends PaElement {

  @Prop({
    type: Number,
    default: 2
  })
  count?: number

  beforeMount () {
  }
}
