import PaBarChartPlugin, { PaBarChart } from './bar'
import PaPieChartPlugin, { PaPieChart } from './pie'
import PaLineChartPlugin, { PaLineChart } from './line'
import PaScatterChartPlugin, { PaScatterChart } from './scatter'
import PaMapChartPlugin, { PaMapChart } from './map'

let plugins: {[name: string]: any} = {
  PaBarChartPlugin,
  PaPieChartPlugin,
  PaLineChartPlugin,
  PaScatterChartPlugin,
  PaMapChartPlugin
}

let charts = {
  PaBarChart,
  PaPieChart,
  PaLineChart,
  PaScatterChart,
  PaMapChart
}

export {
  charts,
  plugins
}
