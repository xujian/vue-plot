import common from './common'
import { makeSeries } from '../series';

let OptionsManager = {
  make(props: any): any {
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
    if (props.type === 'scatter') {
      if (props.symbol) {
        let t = props.symbol.constructor.name
        if(t === 'String') {
          __options.symbol = props.symbol
        }
        if (t === 'Number') {
          __options.symbol = 'circle'
          __options.symbolSize = props.symbol
        }
        if (t === 'Object') {
          __options.symbol = props.symbol.shape
          __options.symbol = props.symbol.size
        }
      }
      __options.xAxis = [{
        type: 'value',
        scale: true,
        axisLabel: {
          formatter: '{value} cm'
        }
      }]
      __options.yAxis = [{
        type: 'value',
        scale: true
      }]
    }
    return Object.assign({}, common, __options)
  }
}

export default OptionsManager