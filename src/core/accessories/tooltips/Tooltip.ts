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

  /**
   * 显示tooltip时的信息队列
   * 提前格式化好然后直接获取
   */
  @Prop({})
  data: any[][] | undefined
}
