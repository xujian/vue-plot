import common from './common'
import { makeSeries, populateSeries } from './series'
import { merge as _merge } from 'lodash'
import handler from './handler'

let defaults: any = {}
let requires = require.context(
  './defaults/', true, /.ts$/)
requires.keys().forEach((p: string) => {
  let name = (p.match(/\.\/([\w\-]+)\.ts$/) || ['', 'null'])[1]
  defaults[name] = requires(p)['default']
})

function buildProps (props: any) {
  let options: any = {}
  // 转换规则按字段集中在 rules 目录
  // 文件名为字段名
  let names = Object.keys(props)
  // 将 styles 挪到最后一个
  names = names.sort((a, b) => b === 'styles' ? -1 : 1) 
  names.forEach((k: string) => {
    let output = handler.translate(k, props)
    options = _merge(options, output)
  })
  return options
}

function buildAccessories (props: any, options: any) {
  Object.keys(props.accessories).forEach((k: string) => {
    console.log('buildAccessories.....handler.take................', k, options.series)
    handler.take(k, props, options)
  })
  return options
}

function buildSeries (props: any, options: any): any[] {
  return makeSeries([props, ...props.layers], options)
}

function applyLegend (options: any) {
  // 将 legend 内的文本写入到 series 的 name
  console.log('options/index applyLegend--------', options)
  let legend = options.legend
  if (legend && legend.data) {
    options.series.forEach((s: any, i: number) => {
      s.name = options.legend.data[i]
    })
  }
}

/**
 *  从 chart props 计算最终的 echarts 配置项
 */
let OptionsManager = {
  make (props: any): Promise<any> {
    /**
     * 步骤：
     * 1. defaults
     * 2. props
     * 3. accessories
     * 4. series
     */
    let propsOptions = buildProps(props)
    let commonOptions = JSON.parse(JSON.stringify(common))
    let final = Object.assign({},
      commonOptions,
      defaults[props.subType || props.type],
      propsOptions)
    final = buildAccessories(props, final)
    let series = buildSeries(props, final)
    final.series = final.series || []
    final.series = final.series.concat(...series)
    applyLegend(final)
    final = populateSeries(props, final)
    return final
  }
}

export default OptionsManager
