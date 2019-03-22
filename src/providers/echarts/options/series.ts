let types: { [name: string]: any } = {}
let requires: { [name: string]: any }
  = require.context('./series/types', true, /.ts$/)
requires.keys().forEach((p: string) => {
  let name = (p.match(/\.\/([\w\-]+)\.ts$/) || ['', 'null'])[1]
  types[name] = requires(p)['default']
})

/**
 * 将 data 组装为 series
 * @param props 
 */
export function makeSeries (
    props: any,
    type?: string | string[]
  ): any[] {
  let __props = {...props, ...props.accessories}
  // console.log('series.ts##################makeSeries, __props', __props)
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
  let extra: any[] = []
  Object.keys(types).forEach((t: string) => {
    if (t === __props.type) {
      extra = types[t].call(null, __props)
    }
  })

  // 逐项合并
  series = series.map((s: any, i: number) =>
    Object.assign({}, s, extra[i])
  )

  return series
}
