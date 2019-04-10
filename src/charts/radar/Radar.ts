import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'
import { ChartDataTypes } from '../../core/data';

@Component({})
export default class PaRadarChart extends PaChart {

  @Prop({
    default: () => null
  })
  data: ChartDataTypes.RadarChartData[] | undefined

  constructor() {
    super()
    this.type = 'radar'
  }
}
