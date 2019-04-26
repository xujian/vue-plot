import 'echarts-liquidfill'
import { Component } from 'vue-property-decorator'
import Prop from '../../core/decorators/Prop'
import PaChart, { Props } from '../../core/chart'
import { ChartDataTypes } from '../../core/data'

@Component({})
export default class PaLiquidChart extends PaChart {

  @Prop({})
  distribute: [string, string][] | string[] | undefined

  constructor() {
    super()
    this.type = 'liquidFill'
    this.subType = 'liquid'
  }
}
