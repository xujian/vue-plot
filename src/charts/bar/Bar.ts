import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'
import { ChartDataTypes } from '@/core/data';

@Component
export default class PaBarChart extends PaChart {
  /**
   *  Bar条为圆角
   */
  @Prop({default: false})
  public round: boolean | undefined

  /**
   * Bar条宽度(pixel)
   */
  @Prop({default: 10})
  public barWidth: number | undefined

  /**
   * 组间距
   */
  @Prop({default: '1%'})
  public barGap: string | undefined

  /**
   * 是否堆叠
   */
  @Prop({
  })
  stack: string | undefined

  @Prop(Array)
  data: ChartDataTypes.BarChartData[] | undefined

  constructor() {
    super()
    this.type = 'bar'
  }

  static create(props: any): PaBarChart {
    let chart = new PaBarChart()
    Object.assign(chart, props)
    return chart
  }

  onBarClick(): void {
    this.$emit('click')
  }
}
