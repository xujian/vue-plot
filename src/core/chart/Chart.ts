import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { processSlots } from '../../core/accessories/slots'
import Provider from '../../core/providers/echarts'

@Component
export default class PaChart extends Vue {

  @Prop({
    default: () => []
  })
  layers: any[] | undefined

  @Prop({
    default: () => []
  })
  axises: any[] | undefined

  @Prop({
    default: () => {}
  })
  options: any

  @Prop({
    default: () => []
  })
  data: any[] | undefined

  /**
   * Add new layer to chart
   */
  addLayer () {

  }

  addAxis () {

  }

  applyOptions (options: any) {

  }

  private makeChart () {
    // 计算最终的 options
    let options = processSlots(<any[]>this.$slots.default)
    options = Object.assign({}, this.options, options)
    let chart = new Provider(this.$refs.chart)
    chart.draw({
      data: this.data,
      props: {},
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

  mounted () {
    this.makeChart()
  }
}