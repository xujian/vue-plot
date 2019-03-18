let types: { [name: string]: any } = {}
let requires: { [name: string]: any }
  = require.context('./types/', true, /.ts$/)
requires.keys().forEach((p: string) => {
  let name = (p.match(/\.\/(\w+)\.ts$/) || ['', 'null'])[1]
  types[name] = requires(p)['default']
})

export function makeSeries (props: any): any[] {
  let series: any[] = props.data.map(d => {
    // 合并: 给定配置项 ➡️ 缺省配置项 ➡️ 固有配置项
    let basicSettings = {
      type: props.type || 'bar',
      data: d.constructor.name === 'Array'
        ? d: d.value
    }
    return ({
      ...basicSettings
    })
  })

  let extra: any[] = []
  Object.keys(types).forEach((t: string) => {
    if (t === props.type) {
      extra = types[t].call(null, props)
    }
  })

  series = series.map((s: any, i: number) =>
    Object.assign({}, s, extra[i])
  )

  return series
}
