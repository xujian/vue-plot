import { Component, Prop } from 'vue-property-decorator'
// import Prop from '../../core/decorators/Prop'
import PaChart, { Props } from '../../core/chart'
import { ChartDataTypes } from '../../core/data'

@Component({})
export default class PaGaugeChart extends PaChart {

  @Prop()
  data: string | ChartDataTypes.GaugeChartData[] | undefined

  @Prop()
  center: string[] | undefined
  
  @Prop()
  radius: number[] | undefined

  @Prop()
  titleName: string | undefined

  @Prop()
  gaugeGradientColor: string[] | undefined

  @Prop()
  startEndAngle: number[] | undefined

  @Prop()
  titleColor: string|undefined

  constructor () {
    super()
    this.type='gauge'
  }
}
