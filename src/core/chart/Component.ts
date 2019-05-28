import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import Inspectable, { PropTypes } from '../../../support/designtime/inspectable'
import { StyleRules } from '../shared/styles'
import Bus from '../shared/events/bus'

/**
 * 定义 chart 的 props 组
 */
export declare type Props = {
  [key: string]: any,
}

/**
 * Base of PaChart/PaElement
 * PaComponent -> PaChart
 *             -> PaElement
 */
@Component({})
export default class PaComponent extends Vue {
  public uuid: string = ''
  public type: string = ''
  public subType: string = ''

  // event bus of all components/charts/elements
  public bus: typeof Bus = Bus

  @Inspectable({
    label: '配色主题',
    type: PropTypes.Theme,
    category: 'styles',
    order: 1,
    default: ''
  })
  @Prop({})
  theme: string | undefined

  @Inspectable({
    label: '样式定义',
    type: PropTypes.Json,
    category: 'styles',
    default: {}
  })
  @Prop({})
  styles: StyleRules | StyleRules[] | string | undefined

  public get props (): Props {
    return this.$props
  }

}
