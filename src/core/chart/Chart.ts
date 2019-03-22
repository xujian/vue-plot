import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { resolveSlot } from '../../core/accessories/slots'
import Provider from '../../providers/echarts'
import { ChartDataTypes } from '../data'
import Bus from '../../core/shared/events/bus'
import ChartStyle from './ChartStyle'

/**
 * 定义 chart 的 props 组
 */
export declare type Props = {
  [key: string]: any
}

@Component({
  template: `
  <div class="chart-container">
    <div class="chart" ref="chart">
      <slot></slot>
    </div>
  </div>`
})
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

  @Prop({ default: () => 0 })
  axis: ['left', 'right', 0, 1] | undefined

  @Prop({ default: () => {} })
  options: any

  @Prop(String)
  theme: string | undefined

  @Prop({ default: () => {} })
  styles: ChartStyle | undefined

  @Prop({ default: () => [] })
  data: any[] | undefined

  public accessories: any = {}

  constructor () {
    super()
    this.type = ''
  }

  /**
   * Custom hook, called when props set
   * in Factory.ts
   */
  afterCreate () {
    // console.log('///////////Chart.ts afterCreate', this.props)
  }

  /**
   * 拿到所有chart specified props
   * 用于生成 echart options
   */
  public get props (): Partial<PaChart> {
    let props = {
      ...this.$props
    }
    props.type = this.type
    props.accessories = this.accessories
    return props
  }

  /**
   * Add new layer to chart
   */
  addLayer () {}

  addAxis () {}

  applyOptions (options: any) {}

  protected appendOptions (): void {}

  protected preProcessProps () {
    if (this.styles) {

    }
  }

  protected processSlots () {
    let props: Props = {}
    // 将 slot 里面的 accessory 处理为 props
    let slots = resolveSlot(<any[]>this.$slots.default)
    slots.forEach(s => {
      // 处理 layers
      let name = s.name.replace(/^pa-/, '')
      if (name === 'layer') {
        props.layers = props.layers || []
        props.layers.push(s.props)
      } else {
        // 处理 props
        this.accessories[name] = s.props
        props[name] = s.props
      }
    })
    // console.log('Chart.ts ----after processSlots----', props)
    return props
  }

  /**
   * slot 之后的特别处理, 由子类实现
   * @param props 输入的 props 项目 
   */
  protected postProcessSlots (props: Props): ChartProps {
    return props
  }

  private draw () {
    // 计算最终的 options 并交给 echart 绘图
    let props: Props = this.processSlots()
    // console.log('Chart.ts---------<<<<<<<<<<<<<<<<<<after slots',
      // this.props, props, this.type)
    props = this.postProcessSlots(props)
    let provider = new Provider(this.$refs.chart)
    // 合并固有 props 与 accessories props
    this.canvas = provider.draw({
      ...this.props,
      ...props,
      ...this.accessories
    })
  }

  public repaint () {
    this.canvas.dispose()
    this.draw()
  }
  
  created() {
  }

  mounted () {
    this.$nextTick(() => {
      this.draw()
    })
    Bus.on('theme.changed', (payload: any) => {
      this.repaint()
    })
  }
}
