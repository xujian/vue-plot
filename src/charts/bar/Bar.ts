import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'

@Component
export default class PaBarChart extends PaChart {
  round: boolean = false

  onBarClick (): void {
    this.$emit('click')
  }
}
