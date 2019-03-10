import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'

@Component
export default class PaBarChart extends PaChart {

  /**
   *  Bar条为圆角
   */
  @Prop({
    default: false
  })
  round: boolean = false

  /**
   *  Bar条宽度(pixel)
   */
  @Prop({
    default: 10
  })
  barWidth: number = 10

  onBarClick (): void {
    this.$emit('click')
  }


}
