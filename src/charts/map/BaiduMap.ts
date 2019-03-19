import { Component, Prop } from 'vue-property-decorator'
import PaMap from './Map'
import { ChartDataTypes } from '@/core/data'

@Component({})
export default class PaBaiduMap extends PaMap {
  @Prop(Array)
  data: ChartDataTypes.BarChartData[] | undefined

  constructor() {
    super()
    this.type = 'baidu-map'
  }
}
