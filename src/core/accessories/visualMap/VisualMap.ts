import { Prop, Component } from 'vue-property-decorator'
import PaAccessory from '../Accessory';

/**
 * VisualMap
 * 覆盖默认配置
 */
@Component({})
export default class PaVisualMap extends PaAccessory {
  @Prop({
    type: Boolean,
    default: false
  })
  show: boolean |undefined

  @Prop({
    type: Number,
    default: 0
  })
  min: number | undefined

  @Prop(Number)
  max: number | undefined

  @Prop({
    type: Number,
    default: 0
  })
  dimension: number | undefined

  @Prop(Array)
  color: string[] | undefined
}