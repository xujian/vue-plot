import PaElement from '../../core/Element'
import { Component, Prop } from 'vue-property-decorator'

@Component({
  template: `
    <div class="pa-table-container">
      <table class="pa-table" :class="classNames">
        <thead v-if="headerData.length">
          <th v-for="(h, i) in headerData" :key="i">{{ h }}</th>
        </thead>
        <tbody>
          <tr v-for="(row, index) in data">
            <td v-for="(cell, i) in row">{{ cell }}</td>
          </tr>
          <tr v-if="data.length === 0">
            <td class="empty">(no data)</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export default class PaTable extends PaElement {

  columns: number = 4

  rows: number = 4

  private classNames = ''

  @Prop({
    type: [Boolean, Array],
    default: false
  })
  header?: boolean | (string | number)[]

  @Prop({
    type: [Boolean, String, Object],
    default: false
  })
  border?: boolean  | string

  @Prop({
    type: Array,
    default: []
  })
  public data?: any[][]

  get headerData () {
    if (this.header) {
      if (this.header === true) {
        return Array(this.columns).map(
          (x: string, i: number) => 'Field ' + i
        )
      } else {
        return this.header
      }
    }
  }

  beforeMount () {
    this.rows = this.data && this.data.length || 4
    this.columns = this.data && this.data[0].length || 4
    this.classNames = [
      this.theme ? 'theme-' + this.theme : '',
      this.border ? 'border': undefined
    ].join(' ')
  }
}
