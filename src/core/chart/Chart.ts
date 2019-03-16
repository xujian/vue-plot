import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { processSlots } from '../../core/accessories/slots'
import Provider from '../../core/providers/echarts'
import { ChartDataTypes } from '../data'
import { Axis } from '../../core/accessories/axises'
import Bus from '../../core/utils/events/bus'

@Component
export default class PaChart extends Vue {

  protected type: string = ''

  private canvas: any = null

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
  data: any[] | undefined

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
    let provider = new Provider(this.$refs.chart)
    this.canvas = provider.draw({
      ...this.props,
      ...options
    })
  }

  public repaint () {
    this.canvas.dispose()
    this.draw()
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
    Bus.on('theme.changed', (payload: any) => {
      this.repaint()
    })
  }
}