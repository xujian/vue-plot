import { Component, Prop } from 'vue-property-decorator'
import { PaPieChart } from '../pie'
import { ChartDataTypes } from '../../core/data'

@Component({})
export default class PaRoseChart extends PaPieChart {

  @Prop({ default: false })
  half: boolean | undefined

  constructor() {
    super()
    this.type = 'pie'
  }
}
