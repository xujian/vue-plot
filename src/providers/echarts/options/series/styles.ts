import echarts from 'echarts'
import pack from '../../../../utils/pack'
import merge from 'lodash/merge'

let fields: { [name: string]: (...args: any[]) => any } = pack(
  require.context('./styles', true, /.ts$/))

type indexable = { [key: string]: any }
/**
 * :styles="{
      colors: ['#009688', '#ffffff'],
      background: '#333'
    }"
 * 渐变色 gradient 写法A 单渐变
 * :styles="{
      colors: 'gradient:#009688;#000',
      background: '#333'
    }"
    写法B 多渐变
    :styles="{
      colors: [
        'gradient:#009688;#ffffff',
        'gradient:#e57373;#ffffff',
      ],
      background: '#333'
    }"
 */
/**
 * 处理styles中colors与label定义
 * @param props 
 * @param index 
 */
export default function makeSeriesStyles (styles: any, props: any, index: number): indexable {
  if (!styles) return {}
  let rules = styles.rules || {}
  rules.colors = rules.colors || []
  let result: any = {}
  let dataItem = props.data[index]
  let color = rules.colors[index]
  if (color && dataItem) {
    result.itemStyle = { normal: {}, emphasis: {} }
    if (color.constructor.name === 'Gradient') {
      if (['bar'].includes(props.subType || props.type)) {
        let stops = color.stops.map((s: any, i: number) => ({
          offset: (1 / (color.stops.length - 1)) * i,
          color: s
        }))
        result.itemStyle.normal = {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, stops)
        }
      }
    }
  }
  if (rules.canvas) {
    let center = rules.canvas.center
    result.center = center
  }
  ['label', 'line', 'border'].forEach(f => {
    if (Reflect.has(rules, f)) {
      if (Reflect.has(fields, f)) {
        let computed = fields[f].apply(null, [rules, props])
        result = merge({}, result, computed)
      }
    } // label
  })
  return result
}