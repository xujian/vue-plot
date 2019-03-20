import PaChart, { Props } from './Chart'
import { charts } from '../../charts'

/**
 * Factory to make Chart from name
 */
class ChartFactory {
  static make<T extends PaChart> (
    name: string,
    props: any,
    layers?: any[]
  ): T {
    let chart = null
    for (let k in charts) {
      if (k === name) {
        let chartClass = Reflect.get(charts, k)
        chart = new chartClass()
        if (layers) {
          if (props.layers) {
            props.layers = props.layers.concat(...layers)
          } else {
            props.layers = layers
          }
        }
        console.log('Factory////////props', props)
        Object.assign(chart, props)
        chart.afterCreate()
      }
    }
    
    return chart
  }
}

export default ChartFactory
