import { Component, Prop } from 'vue-property-decorator'
import PaMap from './Map'
import { ChartDataTypes } from '@/core/data'
import { Props } from '@/core/chart'

@Component({})
export default class PaBaiduMap extends PaMap {
  @Prop(Array)
  data: ChartDataTypes.BarChartData[] | undefined

  constructor() {
    super()
    this.type = 'baidu-map'
  }

  protected postProcessSlots (props: Props): Props {
    Object.keys(props).forEach((p: string) => {
      if (p === 'layers') {
        props[p].forEach((l: any) => {
          l.type = 'baidu-map-scatter'
        })
      }
    })
    return props
  }
}
