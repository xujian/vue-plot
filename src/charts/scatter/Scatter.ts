import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'
import { ChartDataTypes } from '../../core/data';

@Component({})
export default class PaScatterChart extends PaChart {
  @Prop({
    default: () => []
  })
  data: ChartDataTypes.ScatterChartData[] | undefined

  private __symbol: number | string | undefined

  /**
   * 散点形状
   */
  @Prop({
    default: 10
  })
  symbol: number | string | object | undefined

  constructor () {
    super()
    this.type = 'scatter'
  }
}
