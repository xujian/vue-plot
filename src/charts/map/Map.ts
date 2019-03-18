import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'
import { ChartDataTypes } from '@/core/data'

@Component({})
export default class PaMapChart extends PaChart {
  @Prop(Array)
  data: ChartDataTypes.BarChartData[] | undefined

  constructor() {
    super()
    this.type = 'map'
  }

  static create(props: any): PaMapChart {
    let chart = new PaMapChart()
    console.log('Bar.ts--------------------------create,', props)
    Object.assign(chart, props)
    return chart
  }
}
