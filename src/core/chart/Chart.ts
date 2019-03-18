import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { processSlots } from '../../core/accessories/slots'
import Provider from '../../providers/echarts'
import { ChartDataTypes } from '../data'
import Bus from '../../core/utils/events/bus'
import ChartStyle from './ChartStyle'

@Component({})
export default class PaChart extends Vue {
  protected type: string = ''
  private canvas: any = null

  @Prop({ default: '' })
  title: string | undefined

  @Prop({ default: () => [] })
  layers: any[] | undefined

  @Prop({ default: () => [] })
  x: string[] | undefined

  @Prop({ default: () => [] })
  y: string[] | undefined

  @Prop({ default: () => {} })
  options: any

  @Prop(String)
  theme: string | undefined

  @Prop({ default: () => {} })
  styles: ChartStyle | undefined

  @Prop({ default: () => [] })
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

  protected preProcessProps () {
    if (this.styles) {

    }
  }

  private draw() {
    this.preProcessProps()
    // 计算最终的 options 并交给 echart 绘图
    let props: { [key: string]: any } = {layers: []}
    // 将 slot 里面的 accessory 处理为 props
    let slots = processSlots(<any[]>this.$slots.default)
    slots.forEach(s => {
      // 处理 layers
      let name = s.name.replace(/^pa-/, '')
      if (name === 'layers') {
        props.layers.push(s.props)
      } else {
        props[name] = s.props
      }
    })
    console.log('Chart.ts---------<<<<<<<<<<<<<<<<<<after slots', props)
    let provider = new Provider(this.$refs.chart)
    // 合并固有 props 与 accessories props
    this.canvas = provider.draw({
      ...this.props,
      ...props
    })
  }

  public repaint() {
    this.canvas.dispose()
    this.draw()
  }

  render(h: (...arg: any[]) => VNode): VNode {
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
