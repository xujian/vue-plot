import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'
import { LineChartData } from '../../core/data/ChartDataTypes'

@Component
export default class PaLineChart extends PaChart {
  @Prop({
    default: () => []
  })
  data: LineChartData

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
  smooth: boolean = false

  constructor() {
    super()
    this.type = 'line'
    this.data = []
  }

  static create(props: any): PaLineChart {
    let chart = new PaLineChart()
    Object.assign(chart, props)
    return chart
  }
}
