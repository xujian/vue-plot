import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'
import { ChartDataTypes } from '../../core/data';

@Component({})
export default class PaTreemapChart extends PaChart {

  @Prop({
    default: () => null
  })
  data: ChartDataTypes.TreemapChartData[] | undefined

  constructor() {
    super()
    this.type = 'treemap'
  }
}
