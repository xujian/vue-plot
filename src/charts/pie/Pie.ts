import { Component, Prop } from 'vue-property-decorator'
import PaChart from '@/core/chart'
import { ChartDataTypes } from '@/core/data';

@Component({})
export default class PaPieChart extends PaChart {
  /**
   *  设定圆环宽度
   */
  @Prop({
    default: () => ['0%', '100%']
  })
  radius: [number, number] | [string, string] = ['0%', '100%']

  @Prop({
    default: () => []
  })
  data: string | ChartDataTypes.PieChartData | undefined

  constructor() {
    super()
    this.type = 'pie'
  }
}
