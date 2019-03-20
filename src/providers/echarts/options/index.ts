import common from './common'
import { makeSeries } from './series'
import handler from './handler'

let defaults: any = {}
let requires: { [name: string]: any } = require.context(
  './defaults/', true, /.ts$/)
requires.keys().forEach((p: string) => {
  let name = (p.match(/\.\/([\w\-]+)\.ts$/) || ['', 'null'])[1]
  defaults[name] = requires(p)['default']
})

/**
 *  从 chart props 计算最终的 echarts 配置项
 */
let OptionsManager = {
  make (props: any): any {
    /**
     * 步骤：
     * 1. defaults
     * 2. rules
     * 3. series
     */
    let __options: any = {}
    // 转换规则按字段集中在 rules 目录
    // 文件名为字段名
    Object.keys(props).forEach((k: string) => {
      let output = handler.do(k, props)
      Object.assign(__options, output)
    })
    // 从 data 计算出最终的 series
    __options.series = props.data
      ? makeSeries(props)
      : []
    // 先前已将 slot 内的 pa-x-chart 转换为 layer
    if (props.layers) {
      let layerSeries: any[] =
        props.layers.map((l: any) =>
          makeSeries(l)
      )
      __options.series = __options.series.concat(
        ...layerSeries
      )
    }
    let final = Object.assign({},
      common,
      defaults[props.type],
      __options)
    return final
  }
}

export default OptionsManager
