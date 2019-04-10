import Vue, { VNode } from 'vue'
import { Component } from 'vue-property-decorator'
import Prop from '../decorators/Prop'
import { resolveSlot } from '../../core/accessories/slots'
import Provider from '../../providers/echarts'
import Bus from '../../core/shared/events/bus'
import Styles from '../shared/styles'
import { PresetManager } from '../shared/presets'

/**
 * 定义 chart 的 props 组
 */
export declare type Props = {
  [key: string]: any
}

@Component({
  template: `
    <div class="chart-container">
      <div class="chart-header">
        <h6 v-if="title">{{title}}</h6>
      </div>
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

  @Prop({})
  title: string | undefined

  layers: any[] = []

  @Prop({})
  x: string[] | undefined

  @Prop({})
  y: string[] | undefined

  @Prop({})
  axis: ['left', 'right', 0, 1] | undefined

  @Prop({})
  options: any

  @Prop({})
  preset: string | undefined

  @Prop({})
  theme: string | undefined

  @Prop({})
  styles: Partial<Styles> | undefined

  private __data: any[] = []

  @Prop({})
  data: string | any[] | undefined

  public accessories: any = {}

  constructor() {
    super()
    this.type = ''
  }

  /**
   * Custom hook, called when props set
   * in Factory.ts
   */
  afterCreate() {
    // console.log('///////////Chart.ts afterCreate', this.props)
  }

  /**
   * 拿到所有chart specified props
   * 用于生成 echart options
   */
  public get props(): any {
    console.log('Chart.ts-------------get props----AAAAAAAAA', this)
    let styles = this.styles
      ? this.buildStyles(this.styles)
      : undefined
    return {
      ...this.$props,
      type: this.type,
      styles,
      layers: this.layers,
      accessories: this.accessories
    }
  }

  /**
   * Add new layer to chart
   */
  addLayer() {}

  addAxis() {}

  applyOptions(options: any) {}

  protected appendOptions(): void {}

  protected preProcessProps() {
    if (this.styles) {
    }
  }

  protected buildStyles (input: Partial<Styles>) {
    console.log('buildStyles<><>><><', this.styles)
    if (input.constructor.name !== 'Styles') {
      return Styles.create(input)
    }
    return input
  }

  protected processSlots() {
    let props: Props = {}
    // 将 slot 里面的 accessory 处理为 props
    let slots = resolveSlot(<any[]>this.$slots.default)
    console.log('processSlots**************', slots)
    if (slots.length) {
      let layers: any[] = []
      slots.forEach(s => {
        // 处理 layers
        let name = s.name.replace(/^pa-/, '')
        if (name === 'layer') {
          console.log('...processSlots**************', s)
          layers.push(s.component)
        } else {
          // 处理 props
          this.accessories[name] = s.props
          props[name] = s.props
        }
      })
      this.layers = layers
    }
    // console.log('Chart.ts ----after processSlots----', props)
    return props
  }

  /**
   * slot 之后的特别处理, 由子类实现
   * @param props 输入的 props 项目
   */
  protected postProcessSlots(props: Props): ChartProps {
    return props
  }

  private draw() {
    // 计算最终的 options 并交给 echart 绘图
    let preset = PresetManager.get(this.preset)
    let slotProps: Props = this.processSlots()
    slotProps = this.postProcessSlots(slotProps)
    if (this.mode === 'layer') return
    let provider = new Provider(this.$refs.chart)
    let assignedProps: {[key: string]: any} = {}
    let props = this.props
    Object.keys(props).forEach(p => {
      if (props[p]) {
        assignedProps[p] = props[p]
      }
    })
    let finalProps = { // 覆盖顺序
      ...preset.props, // preset props
      ...assignedProps, // props assigned
      ...slotProps, // props from slots
      ...this.accessories // props from accessories
    }
    console.log('Chart.ts~~~~~~~~~~~~~~~~~~FINALPROPS',
      preset, finalProps)
    // 合并固有 props 与 accessories props
    provider
      .draw(finalProps)
      .then(chart => {
        this.canvas = chart
      })
  }

  private init() {
    console.log('Chart.ts---------<<<<<<<<<<<<<<<<<<init')
    this.draw()
    // watch 放在draw后面 不然会引起死循环
    Object.keys(this.props).forEach((p: string) => {
      this.$watch(p, () => {
        console.log('............Chart.ts---props watch-->repaint', p)
        if (!'layers'.split(',').includes(p)) {
          this.repaint()
        }
      })
    })
  }

  public repaint() {
    console.log('Chart.ts~~~~~~~~~~~~~~~~~~~~~~~~`repaint')
    this.canvas && this.canvas.dispose()
    this.draw()
  }

  created() {
  }

  mounted() {
    // determin mode by parent
    // to prevent layer chart to draw
    console.log(
      'Chart.ts$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$=====mounted'
    )
    this.mode = this.$parent instanceof PaChart ? 'layer' : 'chart'
    this.$nextTick(() => {
      this.init()
    })
    Bus.on('theme.changed', this.repaint)
  }

  beforeDestroy() {
    Bus.off('theme.changed', this.repaint)
  }
}
