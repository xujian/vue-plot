import Vue from 'vue'
import { Prop } from 'vue-property-decorator';

/**
 * 表现X或Y坐标轴
 * 覆盖默认配置
 */
export default class PaTooltip extends Vue {

  name: string | undefined

  @Prop({
    type: String,
    default: 'right'
  })
  position:'left' | 'right' | undefined

  @Prop(String)
  label: string | undefined

  @Prop(Array)
  data: string[] | number[] | undefined
}
