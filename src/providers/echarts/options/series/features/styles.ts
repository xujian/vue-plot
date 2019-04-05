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

export default function (props: any, index: number): indexable {
  let styles = props.styles || {}
  if (!styles || !styles.colors) return {}
  let itemStyle = { normal: {}, emphasis: {} }
  let dataItem = props.data[index]
  let color = styles.colors[index]
  if (color && dataItem) {
    if (color.constructor.name === 'Gradient') {
      let stops = color.stops.map((s: any, i: number) => ({
        offset: (1 / (color.stops.length - 1)) * i,
        color: s
      }))
      itemStyle.normal = {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, stops)
      }
    }
  }
  // 返回的是多个itemStyle数组
  return {
    itemStyle
  }
}