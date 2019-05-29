import { Component, Prop } from 'vue-property-decorator'
// import Prop from '../../core/decorators/Prop'
import PaChart, { Props } from '../../core/chart'
// import { ChartDataTypes } from '../../core/data'

@Component({})
export default class PaFunnelChart extends PaChart {

  @Prop()
  data: string |  undefined

  @Prop()
  sort: string | undefined
  
  @Prop()
  canPosition: object | undefined

  @Prop()
  nameOrValue: string | undefined

  // @Prop()
  // titleName: string | undefined

  // @Prop()
  // gaugeGradientColor: string[] | undefined

  // @Prop()
  // startEndAngle: number[] | undefined

  // @Prop()
  // titleColor: string|undefined

  constructor () {
    super()
    this.type='funnel'
  }
}
