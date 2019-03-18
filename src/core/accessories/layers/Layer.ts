import { Prop, Component } from 'vue-property-decorator'
import PaAccessory from '../Accessory';

/**
 * 图表里的图层
 * 相当于 echarts 配置项里的 serie
 */
@Component({
  template: ''
})
export default class PaLayer extends PaAccessory {
  @Prop(String)
  type: 'bar' | 'line' | undefined

  @Prop(String)
  label: string | undefined

  @Prop(Array)
  data: string[] | number[] | undefined
}
