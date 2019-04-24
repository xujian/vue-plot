import echarts from 'echarts'

type indexable = { [key: string]: any }
/**
 * :styles="{
      colors: ['#009688', '#ffffff'],
      background: '#333'
    }"
 * 渐变色 gradient 写法A 单渐变
 * :styles="{
      colors: 'gradient:#009688,#000',
      background: '#333'
    }"
    写法B 多渐变
    :styles="{
      colors: [
        'gradient:#009688,#ffffff',
        'gradient:#e57373,#ffffff',
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
  if (Reflect.has(rules, 'label')) {
    /***
     * styles.label = '{c}%'
     * styles.label = 'top'
     */
    if (rules.label === false) {
      result.label = {
        show: false
      }
    } else if (typeof rules.label === 'string') {
      if (['top'].includes(rules.label)) {
        result.label = {
          show: true,
          position: rules.label
        }
      }
    } else {
      if (rules.label.formats) {
        let formats = rules.label.formats
        result.label = {
          normal: {
            formatter: function(params: any, ticket: any, callback: () => void) {
              return [
                '{name|' + params.name + '}\n',
                formats.hr ? '{hr|}\n' : '',
                '{value|' + params.value + '}'
              ].join('')
            },
            rich: formats
          }
        }
      } else {
        result.label = {
          show: true,
          position: rules.label.position,
          offset: [20, 0],
          fontSize: rules.label.fontSize
        }
      }
    }
  }
  if (Reflect.has(rules, 'line')) {
    let line = rules.line
    result.lineStyle = {}
    if (typeof line === 'string') {
      if ('dotted,dashed'.split(',').includes(rules.line)) {
        result.lineStyle.type = rules.line
      }
    } else {

    } 
  }
  if (rules.canvas) {
    let center = rules.canvas.center
    result.center = center
  }
  return result
}