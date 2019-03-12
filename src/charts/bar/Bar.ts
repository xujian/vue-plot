import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'
import { ChartDataTypes } from '@/core/data';

@Component
export default class PaBarChart extends PaChart {

  /**
   *  Bar条为圆角
   */
  @Prop({
    default: false
  })
  round: boolean = false

  /**
   * Bar条宽度(pixel)
   */
  @Prop({
    default: 10
  })
  barWidth: number = 10

  @Prop({
    default: [[120, 300, 240, 600, 320]]
  })
  data: ChartDataTypes.BarChartData | undefined

  onBarClick (): void {
    this.$emit('click')
  }

  constructor(options: any) {
    super(options)
    this.type = 'bar'
  }
}
