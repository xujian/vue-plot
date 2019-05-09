import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'
import { ChartDataTypes } from '../../core/data'
import Inspectable, { PropTypes } from '../../../support/designtime/inspectable'

@Component({})
export default class PaScatterChart extends PaChart {
  @Prop({})
  data: ChartDataTypes.ScatterChartData[] | undefined

  private __symbol: number | string | undefined

  @Inspectable({
    label: '散点形状',
    type: Number
  })
  @Prop({})
  symbol: number | string | object | undefined

  constructor () {
    super()
    this.type = 'scatter'
  }
}
