import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'
import { ChartDataTypes } from '@/core/data'

@Component({})
export default class PaMap extends PaChart {
  @Prop({})
  data: ChartDataTypes.MapData[] | undefined

  @Prop({})
  x: string[] | undefined

  @Prop({})
  y: string[] | undefined
  constructor() {
    super()
    this.type = 'map'
  }
}
