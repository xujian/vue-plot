import PaComponent from './Component'
import { Component, Prop } from 'vue-property-decorator'
import { resolveSlot } from '../../core/accessories/slots'
import Provider from '../../providers/echarts'
import Bus from '../../core/shared/events/bus'
import { StyleManager } from '../shared/styles'
import themes from '../shared/themes'
import { PresetManager } from '../shared/presets'
import { DataManager } from '../data'
import merge from 'lodash/merge'
import normalizeProps from '../shared/props'
import Inspectable, { Prop as InspectableProp, PropTypes } from '../../../support/designtime/inspectable'
import '../../css/chart.css'
import '../../css/designtime.css'
import '../../css/helpers.css'
import PaAccessory from '../accessories/Accessory'
import PaDesignTools from './DesignTools'
import Service from '../../Service'

@Component({
  template: `
    <div class="chart-container"
      :class="{'designtime': $chartlib.designtime}">
      <pa-design-tools
        v-if="$chartlib.designtime"
        @propsClick="onDesignToolsPropsClick" />
      <div class="chart-header">
        <h6 v-if="title">{{title}}</h6>
      </div>
      <div class="chart" ref="chart">
        <slot></slot>
      </div>
    </div>`,
  components: {
    PaDesignTools
  }
})
export default class PaChart extends PaComponent {

  private canvas: any = null

  /**
   * 渲染模式 layer 为不可见
   */
  mode: 'chart' | 'layer' = 'chart'

  @Inspectable({
    type: String,
    label: '标题',
    order: 2
  })
  @Prop({})
  title: string | undefined

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

  @Inspectable({
    type: String,
    label: '预设组',
    order: 1
  })
  @Prop({})
  preset: string | undefined

  @Inspectable({
    label: '颜色序列',
    type: PropTypes.Colors,
    order: 3,
    default: []
  })
  @Prop({})
  colors: string | string[] | undefined

  @Prop({})
  data: string | any[] | undefined

  __data: any[] | undefined

  get realData () {
    return typeof this.data === 'string'
      ? this.__data || []
      : this.data
  }

  @Prop({})
  dataset: string | any[] | undefined

  @Prop({})
  rotate: number | undefined

  layers: PaChart[] = []

  public accessories: { [key: string]: PaAccessory, } = {}

  // hooks
  dataAvailable (data: any, props: any): any[] {
    return data
  }

  @Prop({})
  beforePaint: ((options: any) => any) | undefined

  get hooks (): any {
    return {
      beforePaint: this.beforePaint,
      dataAvailable: this.dataAvailable
    }
  }

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
    let accessories: { [key: string]: any } = {}
    if (this.accessories) {
      Object.keys(this.accessories).forEach(a => {
        accessories[a] = this.accessories[a].props
      })
    }
    return {
      ...this.$props,
      __data: this.__data,
      uuid: this.uuid,
      type: this.type,
      subType: this.subType,
      layers: this.layers.map(l => l.props),
      accessories
    }
  }

  public get inspectable (): any {
    let main: InspectableProp<any>[] = Inspectable.get(this)
    let layers: {
      name: string,
      props: InspectableProp<any>[]
    }[] = []
    this.layers.forEach(l => {
      layers.push({
        name: l.type,
        props: Inspectable.get(l)
      })
    })
    let accessories: {
      name: string,
      props: InspectableProp<any>[]
    }[] = []
    return {
      main,
      layers,
      accessories
    }
  }

  addLayer () {}

  addAxis () {}

  applyOptions (options: any) {}

  protected appendOptions (): void {}

  onLayerDataLoad (layer: PaChart) {
    console.log('Chart.ts___________________onLayerDataLoad', layer)
  }

  get computedProps () {
    let { layers, accessories } = this.processSlots()
    this.layers = this.layers.concat(...layers)
    this.accessories = merge({}, this.accessories, accessories)
    let preset = PresetManager.get(this.preset)
    let theme = themes[this.theme || 'dark']
    let assignedProps: {[key: string]: any,} = {}
    let props = this.props
    Object.keys(props).forEach(p => {
      if (props[p] !== undefined) { // 直接给定的props
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
      { name: this.constructor.name }
    )
    console.log('%c///Chart.ts: get computedProps: finalProps',
      'background-color:#009688;color:#fff;',
      finalProps)
    return finalProps
  }

  protected processSlots () {
    // 将 slot 内容处理为 layers/accessories
    let slots = resolveSlot(this.$slots.default || [])
    let results: {
      layers: PaChart[],
      accessories: { [key: string]: PaAccessory, },
    } = {layers: [], accessories: {}}
    if (slots.length) {
      slots.forEach(s => {
        // 处理 layers
        let name = s.name.replace(/^pa-/, '')
        if (name === 'layer') {
          s.component.$on('dataFetched', this.onLayerDataLoad)
          results.layers.push(s.component)
        } else {
          // 处理 props
          results.accessories[name] = s.component
        }
      })
    }
    results = this.postProcessSlots(results)
    return results
  }

  /**
   * slot 之后的特别处理, 由子类实现
   * @param props 输入的 props 项目
   */
  protected postProcessSlots (props: any): any {
    return props
  }

  private draw () {
    // 计算最终的 options 并交给 echart 绘图
    let finalProps = this.computedProps
    let withLayers = [finalProps, ...finalProps.layers]
    let dataPromises = withLayers.map(props => DataManager.load(props))
    Promise.all(dataPromises).then((props: any) => {
      this.__data = props[0].data
      finalProps = merge({},
        finalProps,
        props[0]
      )
      let layersProps = props.slice(1)
      finalProps.layers = finalProps.layers.map((l: any, i: number) =>
        merge({}, l, layersProps[i]))
      if (finalProps.styles) {
        finalProps.styles = StyleManager.make(finalProps)
      }
      this.$emit('dataFetched')
      if (this.dataAvailable) {
        let dataWithPercent = this.dataAvailable(finalProps.data, finalProps)
        finalProps = {
          ...finalProps,
          data: dataWithPercent
        }
      }
      if (this.mode === 'layer') return
      let provider = new Provider(this.$refs.chart)
      let defautlCallback = (options: any) => options
      this.canvas = provider.draw(finalProps, this.beforePaint || defautlCallback)
    })
  }

  private init () {
    this.draw ()
    // watch 放在draw后面 不然会引起死循环
    Object.keys(this.props).forEach((p: string) => {
      if (!'layers,accessories'.split(',').includes(p)) {
        this.$watch(p, function () {
          this.repaint()
        },
        { deep: true })
      }
    })
  }

  public repaint () {
    this.canvas && this.canvas.dispose()
    this.draw()
  }

  private onDesignToolsPropsClick () {
    let props = Inspectable.get(this)
    Service.instance.bus.emit('props', {
      uuid: this.uuid,
      data: this.inspectable
    })
  }

  created () {
  }

  beforeMount () {
    // determin mode by parent
    // to prevent layer chart to draw
    this.mode = this.$parent instanceof PaChart ? 'layer' : 'chart'
    this.$nextTick(() => {
      this.init()
    })
    this.bus.on('theme.changed', this.repaint)
  }

  beforeDestroy () {
    this.bus.off('theme.changed', this.repaint)
  }
}
