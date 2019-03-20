import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'
import { ChartDataTypes } from '@/core/data'

@Component({})
export default class PaMap extends PaChart {
  @Prop(Array)
  data: ChartDataTypes.MapData[] | undefined

  @Prop({ default: () => false })
  x: string[] | undefined

  @Prop({ default: () => false })
  y: string[] | undefined
  constructor() {
    super()
    this.type = 'map'
  }
}
