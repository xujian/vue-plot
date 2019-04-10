import PaBarChartPlugin, { PaBarChart } from './bar'
import PaPieChartPlugin, { PaPieChart } from './pie'
import PaLineChartPlugin, { PaLineChart } from './line'
import PaScatterChartPlugin, { PaScatterChart } from './scatter'
import PaMapPlugin, { PaMap, PaBaiduMap } from './map'
import PaTreeChartPlugin, { PaTreeChart } from './tree'
import PaTreemapChartPlugin, { PaTreemapChart } from './treemap'

let plugins: {[name: string]: any} = {
  PaBarChartPlugin,
  PaPieChartPlugin,
  PaLineChartPlugin,
  PaScatterChartPlugin,
  PaTreeChartPlugin,
  PaTreemapChartPlugin,
  PaMapPlugin
}

let charts = {
  PaBarChart,
  PaPieChart,
  PaLineChart,
  PaScatterChart,
  PaMap,
  PaTreeChart,
  PaTreemapChart,
  PaBaiduMap
}

export {
  charts,
  plugins
}
