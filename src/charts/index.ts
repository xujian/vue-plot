import PaBarChartPlugin, { PaBarChart } from './bar'
import PaPieChartPlugin, { PaPieChart } from './pie'
import PaLineChartPlugin, { PaLineChart } from './line'
import PaScatterChartPlugin, { PaScatterChart } from './scatter'

let plugins: {[name: string]: any} = {
  PaBarChartPlugin,
  PaPieChartPlugin,
  PaLineChartPlugin,
  PaScatterChartPlugin
}

let charts = {
  PaBarChart,
  PaPieChart,
  PaLineChart,
  PaScatterChart
}

export {
  charts,
  plugins
}
