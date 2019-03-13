import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { processSlots } from '../../core/accessories/slots'
import Provider from '../../core/providers/echarts'
import { ChartDataTypes } from '../data'
import { Axis } from '../../core/accessories/axises'

@Component
export default class PaChart extends Vue {

  protected type: string = ''

  @Prop({
    default: ''
  })
  title: string | undefined

  @Prop({
    default: () => []
  })
  layers: any[] | undefined

  @Prop({
    default: () => []
  })
  x: string[] | undefined

  @Prop({
    default: () => []
  })
  y: string[] | undefined

  @Prop({
    default: () => {}
  })
  options: any

  @Prop({
    default: () => []
  })
  data: any[] = []

  private __data: any[] = []

  constructor() {
    super()
    this.type = ''
  }

  /**
   * 拿到所有chart specified props
   * 用于生成 echart options
   */
  public get props(): Partial<PaChart> {
    let pa = {
      ...this.$props
    }
    pa.type = this.type
    return pa
  }

  /**
   * Add new layer to chart
   */
  addLayer() {}

  addAxis() {}

  applyOptions(options: any) {}

  protected appendOptions(): void {}

  private draw() {
    // 计算最终的 options
    let options = processSlots(<any[]>this.$slots.default)
    let privider = new Provider(this.$refs.chart)
    privider.draw({
      ...this.props,
      ...options
    })
  }

  render(h: CreateElement) {
    return h(
      'div',
      {
        class: 'chart-container'
      },
      [
        h(
          'div',
          {
            class: 'chart',
            ref: 'chart'
          },
          [
            h(
              'div',
              {
                class: 'chart-slot',
                ref: 'slot'
              },
              [h('slot')]
            )
          ]
        )
      ]
    )
  }

  mounted() {
    this.draw()
  }
}