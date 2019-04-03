import { Component } from 'vue-property-decorator'
import Prop from '../../core/decorators/Prop'
import PaChart, { Props } from '../../core/chart'
import { ChartDataTypes } from '../../core/data'

@Component({})
export default class PaBarChart extends PaChart {
  /**
   *  Bar条为圆角
   */
  @Prop({})
  public round: boolean | undefined

  /**
   * Bar条宽度(pixel)
   */
  @Prop({})
  public barWidth: number | undefined

  /**
   * 组间距
   */
  @Prop({})
  public barGap: string | undefined

  /**
   * 是否堆叠
   */
  @Prop({})
  stack: string | undefined

  @Prop({
    type: [String, Array]
  })
  data: string | ChartDataTypes.BarChartData[] | undefined

  constructor() {
    super()
    this.type = 'bar'
  }

  onBarClick(): void {
    this.$emit('click')
  }
}
