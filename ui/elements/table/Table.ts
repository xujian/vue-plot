import PaElement from '../../core/Element'
import { Component, Prop } from 'vue-property-decorator'

@Component({
  template: `
    <div class="pa-table-container">
      <table class="pa-table">
        <thead></thead>
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
  @Prop({
    type: Array,
    default: []
  })
  public data?: any[][]
}
