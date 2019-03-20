import PaChart, { Props } from './Chart'
import { charts } from '../../charts'

/**
 * Factory to make Chart from name
 */
class ChartFactory {
  static make<T extends PaChart> (
    name: string,
    props: any
  ): T {
    let chart = null
    for (let k in charts) {
      if (k === name) {
        let chartClass = Reflect.get(charts, k)
        chart = new chartClass()
        Object.assign(chart, props)
        chart.afterCreate()
      }
    }
    return chart
  }
}

export default ChartFactory
