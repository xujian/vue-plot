import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'
import { ChartDataTypes } from '@/core/data'

@Component({})
export default class PaMap extends PaChart {
  @Prop(Array)
  data: ChartDataTypes.MapData[] | undefined

  constructor() {
    super()
    this.type = 'map'
  }

  static create(props: any): PaMap {
    let chart = new PaMap()
    Object.assign(chart, props)
    return chart
  }
}
