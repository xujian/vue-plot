import PaComponent from '../../src/core/chart/Component'
import { Component, Prop } from 'vue-property-decorator'
import Inspectable, { PropTypes } from '../../support/designtime/inspectable'

/**
 * Base class for UI elements
 */
@Component({})
export default class PaElement extends PaComponent {

  @Inspectable({
    type: String,
    label: '标识符',
    order: 2
  })
  @Prop({
    type: String,
    default: ''
  })
  name?: string

  @Inspectable({
    type: String,
    label: '颜色'
  })
  @Prop({
    type: String,
    default: '#fff'
  })
  color?: string

  @Inspectable({
    type: PropTypes.Size,
    label: '尺码'
  })
  @Prop({
    type: String,
    default: 'sm' // tn, xs, sm, lg, xl
  })
  size?: string

}
