import specs from './series/specs'
import { merge } from 'lodash'

let types: { [name: string]: () => any } = {}
let requires
  = require.context('./series/types', true, /.ts$/)
requires.keys().forEach((p: string) => {
  let name = (p.match(/\.\/([\w\-]+)\.ts$/) || ['', 'null'])[1]
  types[name] = requires(p)['default']
})

function buildExtra (props: any, index?: number): {}[] {
  let features = [], fields = []
  // 查找某一图表类型的字段定义
  let spec = specs.find(s => s.type === props.type)
  fields = spec ? [...spec.features, 'styles'] : ['styles']
  features = fields.map(f => {
    let feature = require(`./series/features/${f}`).default
    return f = feature.call(null, props, index)
  })
  return features
}

/**
 * 将 data 组装为 series
 * @param props 
 */
export function makeSeries (layers: any[], options: any): any {
  // 输入的是多套 props/data 外层以及layers合并而来
  let final: any[] = []
  layers.forEach((layer: any) => {
    let series: any[] = layer.data.map(
      (d: any, dataIndex: number) => {
      let extraSettings = buildExtra(layer, dataIndex)
      // 合并: 给定配置项 ➡️ 缺省配置项 ➡️ 固有配置项
      return Object.assign({
        type: layer.type || 'bar',
        data: d,
        name: layer.legends
          ? layer.legends[dataIndex] : ''
      },
      ...extraSettings)
    })
    let typeFn = Reflect.get(types, layer.type)
    if (typeFn) {
      series = typeFn.call(null, series, layer, options)
    }
    final.push(series)
  })
  return final
}

export function populateSeries (props: any, options: any) {
  return options
}