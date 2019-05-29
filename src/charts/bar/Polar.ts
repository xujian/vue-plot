import { Component, Prop } from 'vue-property-decorator'
import PaBarChart from './Bar'

@Component({})
export default class PaPolarChart extends PaBarChart {

  @Prop({
    type: [String, Array]
  })
  data: string  | undefined

  @Prop()
  labelName: string[]  | undefined

  constructor () {
    super()
    this.type = 'bar'
    this.subType = 'polar'
  }
}
