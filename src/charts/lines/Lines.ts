import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'
import { LinesChartData } from '../../core/data/ChartDataTypes'

@Component({})
export default class PaLinesChart extends PaChart {
  @Prop({})
  data: LinesChartData | undefined

  constructor() {
    super()
    this.type = 'lines'
  }
}
