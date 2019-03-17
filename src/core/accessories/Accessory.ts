import Vue from 'vue'
import { Prop } from 'vue-property-decorator';
import { Style } from '../../core/utils/styles'

/**
 * 表现X或Y坐标轴
 * 覆盖默认配置
 */
export default class PaAccessory extends Vue {

  @Prop({
    default: 'dark'
  })
  theme: string | undefined

  @Prop(Object)
  style: Style | undefined
}
