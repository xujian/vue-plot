import { Prop, Component } from 'vue-property-decorator'
import PaAccessory from '@/core/accessories/Accessory'

/**
 * MarkLine
 * 覆盖默认配置
 */
@Component({})
export default class PaMarkline extends PaAccessory {
  @Prop()
  attr: {} |undefined
}