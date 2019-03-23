import { Prop, Component } from 'vue-property-decorator'
import PaAccessory from '../Accessory';

/**
 * 表现X或Y坐标轴
 * 覆盖默认配置
 */
@Component({})
export default class PaLegend extends PaAccessory {
  @Prop({
    type: String,
    default: 'right'
  })
  align:'left' | 'right' | 'center' | undefined

  @Prop(String)
  label: string | undefined

  @Prop(Array)
  data: any[] | undefined
}
