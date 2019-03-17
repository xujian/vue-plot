import Vue from 'vue'
import { Prop, Component } from 'vue-property-decorator'

/**
 * 表现X或Y坐标轴
 * 覆盖默认配置
 */
@Component({
  template: ''
})
export default class PaAxis extends Vue {
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
