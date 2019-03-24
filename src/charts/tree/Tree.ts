import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'
import { ChartDataTypes } from '../../core/data';

@Component({})
export default class PaTreeChart extends PaChart {

  @Prop({
    default: () => null
  })
  data: ChartDataTypes.TreeChartData[] | undefined

  constructor() {
    super()
    this.type = 'tree'
  }
}
