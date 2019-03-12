import PaChart from './Chart';
import { charts } from '../../charts'

/**
 * Factory to make Chart from name
 */
class ChartFactory {
  static make<T extends PaChart> (
    name: string,
    options: any
  ): T {
    let chart = null
    for (let k in charts) {
      if (k === name) {
        let chartClass = charts[k]
        chart = new chartClass(options)
      }
    }
    return chart
  }
}

export default ChartFactory
