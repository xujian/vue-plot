import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Prop from '../decorators/Prop'
import { resolveSlot } from '../../core/accessories/slots'
import Provider from '../../providers/echarts'
import Bus from '../../core/shared/events/bus'
import Styles, { StyleRules } from '../shared/styles'
import themes from '../shared/themes'
import { PresetManager } from '../shared/presets'
import { DataManager } from '../data'
import accessories from '../accessories';
import { merge } from 'lodash'
import normalizeProps from '../shared/props';
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
  protected subType: string = ''
  private canvas: any = null

  /**
   * 渲染模式 layer 为不可见
   */
  mode: 'chart' | 'layer' = 'chart'

  @Prop({})
  title: string | undefined

  layers: any[] = []

  @Prop({})
  x: string[] | object | undefined

  @Prop({})
  y: string[] | object | undefined

  @Prop({})
  axis: ['left', 'right', 0, 1] | undefined

  @Prop({})
  options: any

  @Prop({})
  legend: any[] | undefined

  @Prop({})
  preset: string | undefined

  @Prop({})
  theme: string | undefined

  @Prop({})
  colors: string | string[] | undefined

  @Prop({})
  styles: StyleRules | string | undefined

  private __data: any[] = []

  @Prop({})
  data: string | any[] | undefined

  @Prop({})
  dataset: string | any[] | undefined

  @Prop({})
  public accessories: {} | undefined

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
    return {
      ...this.$props,
      type: this.type,
      subType: this.subType,
      layers: this.layers,
      accessories: this.accessories
    }
  }

  addLayer() {}

  addAxis() {}

  applyOptions(options: any) {}

  protected appendOptions(): void {}

  protected prepareProps() {
    let { layers, accessories } = this.processSlots()
    layers = this.layers.concat(...layers)
    accessories = {
      ...this.accessories,
      ...accessories
    }
    let preset = PresetManager.get(this.preset)
    let theme = themes[this.theme || 'dark']
    let assignedProps: {[key: string]: any} = {}
    let props = this.props
    Object.keys(props).forEach(p => {
      if (props[p]) {
        assignedProps[p] = props[p]
      }
    })
    Object.keys(assignedProps).forEach(p => {
      assignedProps[p] = normalizeProps(assignedProps[p], p)
    })
    let finalProps = merge({}, // 覆盖顺序
      theme.props, // props in theme
      preset.props, // preset props
      assignedProps, // props assigned
      { layers },
      { accessories }, // props from accessories
      { name: this.constructor.name }
    )
    if (finalProps.styles) {
      finalProps.styles = this.buildStyles(finalProps.styles)
    }
    console.log('%c///Chart.ts: prepareProps: finalProps',
      'background-color:#009688;color:#fff;',
      finalProps)
    return finalProps
  }

  protected buildStyles (input: StyleRules | string) {
    if (input.constructor.name !== 'Styles') {
      return Styles.create(input)
    }
    return input
  }

  protected processSlots() {
    // 将 slot 里面的 accessory 处理为 layers/accessories
    let slots = resolveSlot(<any[]>this.$slots.default)
    let results: {
      layers: any[],
      accessories: { [key: string]: any }
    } = {layers: [], accessories: {}}
    if (slots.length) {
      slots.forEach(s => {
        // 处理 layers
        let name = s.name.replace(/^pa-/, '')
        if (name === 'layer') {
          results.layers.push(s.component.props)
        } else {
          // 处理 props
          results.accessories[name] = s.props
          // props[name] = s.props
        }
      })
    }
    return results
  }

  /**
   * slot 之后的特别处理, 由子类实现
   * @param props 输入的 props 项目
   */
  protected postProcessSlots(props: Props): Props {
    return props
  }

  private draw() {
    // 计算最终的 options 并交给 echart 绘图
    let finalProps = this.prepareProps()
    DataManager.load(this.props).then((props: {}) => {
      finalProps = {
        ...finalProps,
        ...props
      }
      if (this.mode === 'layer') return
      let provider = new Provider(this.$refs.chart)
      this.canvas = provider.draw(finalProps)
    })
  }

  private init() {
    this.draw()
    // watch 放在draw后面 不然会引起死循环
    Object.keys(this.props).forEach((p: string) => {
      this.$watch(p, () => {
        if (!'layers'.split(',').includes(p)) {
          this.repaint()
        }
      })
    })
  }

  public repaint() {
    this.canvas && this.canvas.dispose()
    this.draw()
  }

  created() {
  }

  mounted() {
    // determin mode by parent
    // to prevent layer chart to draw
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
