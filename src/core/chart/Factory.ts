import PaChart, { Props } from './Chart'
import { charts } from '../../charts'

/**
 * Factory to make Chart from name
 */
class ChartFactory {
  static make<T extends PaChart> (input: {
    uuid?: string
    name: string,
    props: { [key: string]: any },
    layers?: any[]
  }): T {
    let chart = null
    for (let k in charts) {
      if (k === input.name) {
        let chartClass = Reflect.get(charts, k)
        chart = new chartClass()
        chart.uuid = input.uuid
        if (input.layers) {
          if (input.props.layers) {
            input.props.layers = input.props.layers.concat(...input.layers)
          } else {
            input.props.layers = input.layers
          }
        }
        console.log('Factory////////props', input.props)
        Object.assign(chart, input.props)
        chart.afterCreate()
      }
    }
    return chart
  }
}

export default ChartFactory
