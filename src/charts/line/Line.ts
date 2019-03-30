import { Component, Prop } from 'vue-property-decorator'
import PaChart from '@/core/chart'
import { LineChartData } from '@/core/data/ChartDataTypes'

@Component({})
export default class PaLineChart extends PaChart {
  @Prop({ default: () => [] })
  data: LineChartData | undefined

  /**
   *  线条宽度(pixel)
   */
  @Prop({
    default: 2
  })
  lineWidth: number = 2

  /**
   * 是否堆叠
   */
  @Prop({
    default: undefined
  })
  stack: string | undefined

  /**
   * 平滑线条
   */
  @Prop({
    default: false
  })
  smooth: boolean | undefined

  @Prop([Boolean, Object])
  area: boolean | {} | undefined

  constructor () {
    super()
    this.type = 'line'
  }
}
