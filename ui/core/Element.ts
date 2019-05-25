import PaComponent from '../../src/core/chart/Component'
import { Component } from 'vue-property-decorator'

@Component({})
export default class PaElement extends PaComponent {
  public uuid: string = ''
  public type: string = ''
}
