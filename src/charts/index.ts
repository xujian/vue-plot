import PaBarChartPlugin, { PaBarChart } from './bar'
import PaPieChartPlugin, { PaPieChart } from './pie'
import PaLineChartPlugin, { PaLineChart } from './line'
import PaScatterChartPlugin, { PaScatterChart } from './scatter'
import PaMapPlugin, { PaMap, PaBaiduMap } from './map'

let plugins: {[name: string]: any} = {
  PaBarChartPlugin,
  PaPieChartPlugin,
  PaLineChartPlugin,
  PaScatterChartPlugin,
  PaMapPlugin
}

let charts = {
  PaBarChart,
  PaPieChart,
  PaLineChart,
  PaScatterChart,
  PaMap,
  PaBaiduMap
}

export {
  charts,
  plugins
}
