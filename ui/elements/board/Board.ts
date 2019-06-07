import PaContainer from '../../core/Container'
import { Component, Prop } from 'vue-property-decorator'
import Inspectable, { PropTypes } from '../../../support/designtime/inspectable'

/**
 * 用于装载其他组件的空面板
 * 子组件绝对定位
 */
@Component({
  template: `<div class="pa-board">
    <div class="header">
      <h6>{{ title }}</h6>
    </div>
    <div class="body">
      <slot></slot>
    </div>
  </div>`
})
export default class PaBoard extends PaContainer {

  @Inspectable({
    label: '标题',
    type: String,
    order: 1
  })
  @Prop({
    type: String,
    default: ''
  })
  title?: string

  @Inspectable({
    label: '定位模式',
    type: PropTypes.Select,
    order: 3,
    default: []
  })
  @Prop({})
  position?: string

  beforeMount () {
    console.log('PaBoard.ts________beforeMount, this.$slots', this.$slots)
  }
}
