import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'
import { Inspectable, PropTypes } from '../../../support'
import { ChartDataTypes } from '../../core/data'

@Component({})
export default class PaPieChart extends PaChart {
  @Inspectable({
    type: PropTypes.Range,
    label: '内外径',
    default: [0, 50]
  })
  @Prop({})
  radius: [number, number] | [string, string] | undefined

  @Inspectable({
    type: Boolean,
    label: '显示边线'
  })
  @Prop({})
  border: boolean | undefined

  @Prop({})
  data: string | ChartDataTypes.PieChartData | undefined

  // hooks
  dataAvailable (data: any, props: any): any[] {
    // 计算出百分比值
    let dataWithPercent: any[][] = []
    if (Array.isArray(this.realData)) {
      this.realData.forEach(groupArray => {
        const sum: number = groupArray.map((x: any) => x.value)
          .reduce((a: number, v: number) => a + v)
        let groupData = groupArray.map(
          (item: {value: number, name: string}) => ({
          ...item,
          percent: parseFloat((100 * (item.value / sum)).toPrecision(2))
        }))
        dataWithPercent.push(groupData)
      })
      return dataWithPercent
    } else {
      return props
    }
  }

  constructor() {
    super()
    this.type = 'pie'
  }
}
