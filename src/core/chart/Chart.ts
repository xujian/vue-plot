import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { resolveSlot } from '../../core/accessories/slots'
import Provider from '../../providers/echarts'
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

  /**
   * 渲染模式 layer 为不可见
   */
  mode: 'chart' | 'layer' = 'chart'

  @Prop({ default: '' })
  title: string | undefined

  layers: any[] = []

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

  private __data: any[] = []

  @Prop({ default: () => '' })
  data: string | any[] | undefined

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
  public get props (): any {
    return {
      ...this.$props,
      type: this.type,
      layers: this.layers,
      accessories: this.accessories
    }
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
        console.log('processSlo**************', s.component)
        this.layers.push(s.component)
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
    props = this.postProcessSlots(props)
    if (this.mode === 'layer') return
    let provider = new Provider(this.$refs.chart)
    // 合并固有 props 与 accessories props
    provider.draw({
      ...this.props,
      ...props,
      ...this.accessories
    }).then(chart => {
      this.canvas = chart
    })
  }

  private init () {
    // console.log('Chart.ts---------<<<<<<<<<<<<<<<<<<after slots',
    // this.props, props, this.type)
    Object.keys(this.props).forEach((p: string) => {
      this.$watch(p, () => {
        console.log('............Chart.ts---props watch')
        this.repaint()
      })
    })
    this.draw()
    // if (typeof this.props.data === 'string') {
    //   Drawer.get(this.props.data)
    //   .then((data: any) => {
    //     this.__data = data
    //     this.draw()
    //   })
    // } else {
    //   this.draw()
    // }
  }

  public repaint () {
    this.canvas.dispose()
    this.draw()
  }
  
  created() {
  }

  mounted () {
    // determin mode by parent
    // to prevent layer chart to draw
    console.log('Chart.ts$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$=====mounted')
    this.mode = this.$parent instanceof PaChart
      ? 'layer' : 'chart'
    this.$nextTick(() => {
      this.init()
    })
    Bus.on('theme.changed', (payload: any) => {
      this.repaint()
    })
  }
}
