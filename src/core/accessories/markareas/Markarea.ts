import { Prop, Component } from 'vue-property-decorator'
import PaAccessory from '../Accessory';

/**
 * 表现X或Y坐标轴
 * 覆盖默认配置
 */
@Component({})
export default class PaMarkarea extends PaAccessory {

  @Prop({
    type: String,
    default: 'max-min'
  })
  mode: string | undefined // max-min, columns, rows

  @Prop({
    type: Array,
    default: []
  })
  data: number[][] | string[][] | undefined

  @Prop(String)
  label: string | undefined
}
