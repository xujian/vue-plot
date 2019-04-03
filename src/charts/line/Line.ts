import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'
import { LineChartData } from '../../core/data/ChartDataTypes'

@Component({})
export default class PaLineChart extends PaChart {
  @Prop({})
  data: LineChartData | undefined

  /**
   *  线条宽度(pixel)
   */
  @Prop({})
  lineWidth: number = 2

  /**
   * 是否堆叠
   */
  @Prop({})
  stack: string | undefined

  /**
   * 平滑线条
   */
  @Prop({})
  smooth: boolean | undefined

  @Prop()
  area: boolean | {} | undefined

  constructor () {
    super()
    this.type = 'line'
  }
}
