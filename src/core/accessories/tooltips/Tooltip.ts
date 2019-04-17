import { Prop, Component } from 'vue-property-decorator'
import PaAccessory from '../Accessory'

/**
 * 表现X或Y坐标轴
 * 覆盖默认配置
 */
@Component({})
export default class PaTooltip extends PaAccessory {

  @Prop({
    default: () => [10, 10]
  })
  position: [string, string] | [number, number] | string | undefined

  @Prop()
  formatter: string | undefined
}
