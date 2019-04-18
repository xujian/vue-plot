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
export default function (props: any, index: number): indexable {
  if (!props.styles) return {}
  let styles = props.styles.rules || {}
  styles.colors = styles.colors || []
  let result: any = {}
  let dataItem = props.data[index]
  let color = styles.colors[index]
  if (color && dataItem) {
    result.itemStyle = { normal: {}, emphasis: {} }
    if (color.constructor.name === 'Gradient') {
      if (['bar'].includes(props.types)) {
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
  if (Reflect.has(styles, 'label')) {
    /***
     * styles.label = '{c}%'
     * styles.label = 'top'
     */
    if (styles.label === false) {
      result.label = {
        show: false
      }
    } else if (typeof styles.label === 'string') {
      if (['top'].includes(styles.label)) {
        result.label = {
          show: true,
          position: styles.label
        }
      }
    } else {
      if (styles.label.formats) {
        result.label = {
          normal: {
            formatter: function(params: any, ticket: any, callback: () => void) {
              return [
                '{name|' + params.name + '}\n',
                '{hr|}\n',
                '{value|' + params.value + '}'
              ].join('')
            },
            rich: styles.label.formats
          }
        }
      } else {
        result.label = {
          show: true,
          position: styles.label.position,
          offset: [20, 0],
          fontSize: styles.label.fontSize
        }
      }
    }
  }
  if (styles.canvas) {
    let center = styles.canvas.center
    result.center = center
  }
  return result
}