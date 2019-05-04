import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'
import { LineChartData } from '../../core/data/ChartDataTypes'
import Inspectable, { PropTypes } from '../../../support/designtime/inspectable'

@Component({})
export default class PaLineChart extends PaChart {
  @Prop({})
  data: LineChartData | undefined

  @Inspectable({
    type: Number,
    label: '线型宽度'
  })
  @Prop({})
  lineWidth: number | undefined

  @Inspectable({
    type: Boolean,
    label: '紧靠坐标轴'
  })
  @Prop({
    type: Boolean,
    default: true
  })
  gap: boolean | undefined

  @Inspectable({
    type: Boolean,
    label: '堆叠'
  })
  @Prop({
    type: Boolean,
    default: false
  })
  stacked: boolean | string | undefined

  @Inspectable({
    type: Boolean,
    label: '平滑曲线'
  })
  @Prop({})
  smooth: boolean | undefined

  @Prop()
  area: boolean | {} | undefined

  constructor () {
    super()
    this.type = 'line'
  }
}
