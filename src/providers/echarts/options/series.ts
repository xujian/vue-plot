import specs from './series/specs'

let types: { [name: string]: () => any } = {}
let requires 
  = require.context('./series/types', true, /.ts$/)
requires.keys().forEach((p: string) => {
  let name = (p.match(/\.\/([\w\-]+)\.ts$/) || ['', 'null'])[1]
  types[name] = requires(p)['default']
})

function buildExtra (props: any) {
  let features = []
  // 查找某一图标类型的字段定义
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
export function makeSeries (props: any): any[] {
  let __props = {...props, ...props.accessories}
  console.log('series.ts##################makeSeries, __props', __props)
  let series: any[] = __props.data.map(d => {
    // 合并: 给定配置项 ➡️ 缺省配置项 ➡️ 固有配置项
    let basicSettings = {
      type: __props.type || 'bar',
      data: d.constructor.name === 'Array'
        ? d: d.value
    }
    return ({
      ...basicSettings
    })
  })
  /**
   * 依据 type 组装进特殊定义
   */
  let typedSeries: any[] = []
  let type = Reflect.get(types, __props.type)
  if (type) typedSeries = type.call(null, __props)

  let extraSeries = buildExtra(__props)

  series = series.map((s: any, i: number) =>
    Object.assign({}, 
      s,
      typedSeries[i],
      ...extraSeries)
  )

  return series
}
