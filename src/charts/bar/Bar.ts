import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'
import { ChartDataTypes } from '../../core/data'
import Inspectable, { PropTypes } from '../../../support/designtime/inspectable'

@Component({})
export default class PaBarChart extends PaChart {
  /**
   *  Bar条为圆角
   */
  @Inspectable({
    type: Boolean,
    label: '圆角'
  })
  @Prop({})
  public round: boolean | undefined

  @Inspectable({
    type: Number,
    label: '单柱宽度'
  })
  @Prop({})
  public barWidth: number | undefined

  @Inspectable({
    type: PropTypes.Percent,
    label: '柱间距',
    default: '10%'
  })
  @Prop({})
  public barGap: string | undefined

  @Inspectable({
    type: Boolean,
    label: '堆叠'
  })
  @Prop({})
  stacked: boolean | string | undefined

  @Inspectable({
    type: Boolean,
    label: '阴影'
  })
  @Prop({})
  shadow: boolean | undefined

  @Prop({
    type: [String, Array]
  })
  data: string | ChartDataTypes.BarChartData[] | undefined

  constructor () {
    super()
    this.type = 'bar'
  }

  onBarClick (): void {
    this.$emit('click')
  }
}
