import { Component } from 'vue-property-decorator'
import PaPieChart from './Pie'

@Component({})
export default class PaRingChart extends PaPieChart {

  constructor () {
    super()
    this.type = 'pie'
    this.subType = 'ring'
  }
}
