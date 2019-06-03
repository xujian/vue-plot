import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'
import { ChartDataTypes } from '../../core/data'

@Component({})
export default class PaNetworkChart extends PaChart {

  @Prop()
  data: ChartDataTypes.NetworkChartData[] | undefined

  @Prop()
  symbol: number | string | object | undefined



  constructor() {
    super()
    this.type = 'graph'
    this.subType = 'network'
  }
}
