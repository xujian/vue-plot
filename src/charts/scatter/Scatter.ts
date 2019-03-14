import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'
import { ChartDataTypes } from '@/core/data';

@Component
export default class PaScatterChart extends PaChart {
  @Prop({
    default: () => []
  })
  data: ChartDataTypes.ScatterChartData[]

  constructor() {
    super()
    this.type = 'scatter'
    this.data = []
  }

  static create(props: any): PaScatterChart {
    let chart = new PaScatterChart()
    Object.assign(chart, props)
    return chart
  }
}
