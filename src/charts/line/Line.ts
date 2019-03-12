import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'
import { LineChartData } from '@/core/data/ChartDataTypes'

@Component
export default class PaLineChart extends PaChart {

  @Prop({
    default: []
  })
  data: LineChartData | undefined

  /**
   *  Bar条宽度(pixel)
   */
  @Prop({
    default: 2
  })
  lineWidth: number = 2

  constructor (options: any) {
    super()
    this.type = 'line'
  }
}
