import specs from './series/specs'
import Drawer from '../../../core/chart/Drawer';

let types: { [name: string]: () => any } = {}
let requires
  = require.context('./series/types', true, /.ts$/)
requires.keys().forEach((p: string) => {
  let name = (p.match(/\.\/([\w\-]+)\.ts$/) || ['', 'null'])[1]
  types[name] = requires(p)['default']
})

function buildExtra (props: any, index?: number): {}[] {
  let features = []
  // 查找某一图表类型的字段定义
  let spec = specs.find(s => s.type === props.type)
  if (spec) {
    features = spec.features.map(f => {
      let feature = require(`./series/features/${f}`).default
      return f = feature.call(null, props, index)
    })
  }
  return features
}

/**
 * 将 data 组装为 series
 * @param props 
 */
export function makeSeries (layers: any[], options: any): Promise<any[]> {
  // 输入的是多套 props/data 外层以及layers合并而来
  let promises: Promise<any[]>[] = layers.map(layer => {
    let props = { ...layer, ...layer.accessories }
    return Drawer.get(props.data || []) // 返回的是 data[]
  })
  return new Promise<any[]>((resolve, reject) => {
    Promise.all(promises).then(
      (layersOfSeriesData: any[]) => {
      let final: any[] = []
      layersOfSeriesData.forEach(
        (series: any, layerIndex: number) => {
        console.log('series.ts MAIKE SERIES ______________ ', series)
        let thisLayer = layers[layerIndex]
        series = series.map((d: any, dataIndex: number) => {
          let extraSettings = buildExtra(thisLayer, dataIndex)
          // 合并: 给定配置项 ➡️ 缺省配置项 ➡️ 固有配置项
          return {
            type: thisLayer.type || 'bar',
            data: d,
            ...extraSettings
          }
        })
        let typeFn = Reflect.get(types, thisLayer.type)
        series = typeFn.call(null, series, thisLayer, options)
        final.push(series)
      })
      resolve(final)
    })
  })
}

export function populateSeries (props: any, options: any) {
  return options
}