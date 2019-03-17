import common from './common'
import { makeSeries } from '../series'
import handler from './handler'

/**
 *  从 chart props 计算最终的 echarts 配置项
 */
let OptionsManager = {
  make(props: any): any {
    let __options: any = {}
    // 转换规则按字段集中在 rules 目录
    // 文件名为字段名
    Object.keys(props).forEach((k: string) => {
      let output = handler.do(k, props)
      Object.assign(__options, output)
    })
    // 从 data 计算出最终的 series
    if (props.data) {
      __options.series = makeSeries(props)
    }
    return Object.assign({}, common, __options)
  }
}

export default OptionsManager