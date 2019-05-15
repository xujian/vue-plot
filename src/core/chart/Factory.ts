import PaChart, { Props } from './Chart'
import { charts } from '../../charts'
import { PaAxis } from '../accessories/axises'
import PaAccessory from '../accessories/Accessory'

const chartBook: { [key: string]: any } = {
  line: charts.PaLineChart,
  bar: charts.PaBarChart
}

const accessoryBook: { [key: string]: any } = {
  axis: PaAxis
}

function createChart (chartClass: typeof PaChart, input: any): PaChart {
  let chart = new chartClass()
  chart.uuid = input.uuid
  if (input.layers) {
    if (input.props.layers) {
      input.props.layers = input.props.layers.concat(...input.layers)
    } else {
      input.props.layers = input.layers
    }
  }
  console.log('Factory////////props', chartClass, input.props)
  Object.assign(chart, input.props)
  chart.afterCreate()
  return chart
}

function createAccessory (type: typeof PaAccessory, props: any) {
  let result = new type()
  Object.assign(result, props)
  return result
}

/**
 * Factory to make Chart from name
 */
class ChartFactory {
  static make<T extends PaChart> (input: {
    uuid?: string
    name: string,
    props: { [key: string]: any },
    layers?: any[]
  }): T | null {
    let chart = null
    for (let k in charts) {
      if (k === input.name) {
        console.log('Factory.ts___________make, layers', k, input.props.layers)
        let layers: PaChart[] = []
        if (input.props.layers) {
          input.props.layers.forEach((props: any) => {
            let type = chartBook[props.type]
            if (type) {
              let chart = createChart(type, { props })
              layers.push(chart)
            }
          })
          Reflect.deleteProperty(input, 'layers')
        }
        let accessories: { [key: string]: PaAccessory } = {}
        if (input.props.accessories) {
          let attrs = input.props.accessories
          Object.keys(attrs).forEach((a: string) => {
            let type = accessoryBook[a]
            if (type) {
              let accessory = createAccessory(type, attrs[a])
              accessories[a] = accessory
            }
          })
          Reflect.deleteProperty(input, 'accessories')
        }
        let chartClass = Reflect.get(charts, k)
        chart = createChart(chartClass, input)
        chart.layers = layers
        chart.accessories = accessories
      }
    }
    return chart
  }
}

export default ChartFactory
