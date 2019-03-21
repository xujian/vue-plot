import { Prop, Component } from 'vue-property-decorator'
import PaAccessory from '../Accessory'

/**
 * Mark points of charts
 */
@Component({})
export default class PaMarks extends PaAccessory {
  @Prop(String)
  type: 'max-min' | undefined

  @Prop(String)
  label: string | undefined

  @Prop(Array)
  data: string[] | number[] | undefined
}
