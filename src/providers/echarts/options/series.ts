import specs from './series/specs'
import Drawer from '../../../core/chart/Drawer';

let types: { [name: string]: () => any } = {}
let requires
  = require.context('./series/types', true, /.ts$/)
requires.keys().forEach((p: string) => {
  let name = (p.match(/\.\/([\w\-]+)\.ts$/) || ['', 'null'])[1]
  types[name] = requires(p)['default']
})

function buildExtra (props: any) {
  let features = []
  // 查找某一图表类型的字段定义
  let spec = specs.find(s => s.type === props.type)
  if (spec) {
    features = spec.features.map(f => {
      let feature = require(`./series/features/${f}`).default
      return f = feature.call(this, props)
    })
  }
  return features
}

/**
 * 将 data 组装为 series
 * @param props 
 */
export function makeSeries (layers: any[]): Promise<any[]> {
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
          let seriesOfThisLayer: any[] = []
          series.forEach((d: any, dataIndex: number) => {
            // 合并: 给定配置项 ➡️ 缺省配置项 ➡️ 固有配置项
            let thisLayer = layers[layerIndex]
            let basicSettings = {
              type: thisLayer.type || 'bar',
              data: d
            }
            let type = Reflect.get(types, thisLayer.type)
            let typedSettings = type
              ? type.call(null, {...thisLayer, data: d})
              : []
            let extraSettings = buildExtra(thisLayer)
            seriesOfThisLayer.push(
              Object.assign(
                {},
                basicSettings,
                typedSettings[dataIndex],
                ...extraSettings
              )
            )
        })
        final.push(seriesOfThisLayer)
      }) // 1 forEach
      resolve(final)
    })
  })
}
