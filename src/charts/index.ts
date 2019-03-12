import PaBarChartPlugin, { PaBarChart } from './bar'
import PaPieChartPlugin, { PaPieChart } from './pie'
import PaLineChartPlugin, { PaLineChart } from './line'

let plugins = {
  PaBarChartPlugin,
  PaPieChartPlugin,
  PaLineChartPlugin
}

let charts = {
  PaBarChart,
  PaPieChart,
  PaLineChart
}

export {
  charts,
  plugins
}
