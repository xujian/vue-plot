/**
 * 负责组装echarts原生配置项
 */
export const defaultProviderOptions = {
  grid: {
    top: '10%',
    left: '5%',
    right: '5%',
    bottom: '5%'
  },
  xAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: [
    {
      type: 'value'
    }
  ]
}

declare type ProviderOptions = {
  series: any[],
  data: any[]
}

export function makeProviderOptions (input: {
  data: any[],
  props:any,
  options:any
}): any {
  let __options: any = {}
  if (input.data) {
    __options.series = input.data.map(d => ({
      type: 'bar',
      data: d
    }))
  }
  if (input.props && input.props.x) {
    __options.xAxis = {
      type: 'category',
      data: input.props.x
    }
  }
  return Object.assign({}, defaultProviderOptions, __options)
}
