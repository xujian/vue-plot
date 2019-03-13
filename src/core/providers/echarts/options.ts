import { makeSeries } from './series';

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
    data: []
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

export function makeProviderOptions(props: any): any {
  console.log('options.ts -------------- ', props)
  let __options: any = {}
  if (props.data) {
    __options.series = makeSeries(props)
  }
  if (props.x) {
    __options.xAxis = {
      type: 'category',
      data: props.x
    }
  }
  if (props.y) {
    __options.yAxis = {
      type: 'value',
      data: props.y
    }
  }
  if (props.type === 'pie') {
    __options.xAxis = false
    __options.yAxis = false
  }
  return Object.assign({}, defaultProviderOptions, __options)
}
