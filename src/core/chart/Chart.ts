import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { processSlots } from '../../core/accessories/slots'
import Provider from '../../core/providers/echarts'
import { ChartDataTypes } from '../data'
import { Axis } from '../../core/accessories/axises'

@Component
export default class PaChart extends Vue {

  @Prop({
    default: ''
  })
  title: string | undefined

  private __type: string = 'bar'

  get type () {
    return this.__type
  }

  set type (val) {
    this.__type = val
  }

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
  data: any

  /**
   * Add new layer to chart
   */
  addLayer () {

  }

  addAxis () {

  }

  applyOptions (options: any) {
  }

  protected  appendOptions (): void {
    
  }

  private draw () {
    // 计算最终的 options
    let options = processSlots(<any[]>this.$slots.default)
    options = Object.assign({}, this.options, options)
    let privider = new Provider(this.$refs.chart)
    privider.draw({
      data: this.data,
      props: {
        title: this.title,
        type: this.type,
        x: this.x,
        y: this.y
      },
      options
    })
  }

  render(h: CreateElement) {
    return h('div', {
      'class': 'chart-container'
    }, [
      h('div', {
        'class': 'chart',
        ref: 'chart'
      }, [
        h('div', {
          'class': 'chart-slot',
          ref: 'slot'
        }, [
          h('slot')
        ])
      ])
    ])
  }

  constructor (options: any) {
    super()
    this.__type = 'bar'
  }

  mounted () {
    this.draw()
  }
}