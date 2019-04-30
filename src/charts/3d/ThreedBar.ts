import { Component, Prop } from 'vue-property-decorator'
// import Prop from '../../core/decorators/Prop'
import PaChart, { Props } from '../../core/chart'
import { ChartDataTypes } from '../../core/data'
import 'echarts-gl'

@Component({})
export default class Pa3dBarChart extends PaChart {

  @Prop({
    type: [String, Array]
  })
  data: string | ChartDataTypes.BarChartData[] | undefined

  constructor() {
    super()
    this.type = 'bar3D'
    this.subType = '3d-bar'
  }
}
