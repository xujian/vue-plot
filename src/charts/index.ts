import PaBarChartPlugin, { PaBarChart } from './bar'
import PaPieChartPlugin, { PaPieChart, PaRingChart } from './pie'
import PaLineChartPlugin, { PaLineChart } from './line'
import PaScatterChartPlugin, { PaScatterChart } from './scatter'
import PaMapPlugin, { PaMap, PaBaiduMap } from './map'
import PaTreeChartPlugin, { PaTreeChart } from './tree'
import PaTreemapChartPlugin, { PaTreemapChart } from './treemap'
import PaRadarChartPlugin, { PaRadarChart } from './radar'
import PaRoseChartPlugin, { PaRoseChart } from './rose'
import Pa3dBarChartPlugin, { Pa3dBarChart } from './3d'
import PaLiquidChartPlugin, { PaLiquidChart } from './liquid'
import PaGaugeChartPlugin, { PaGaugeChart } from './gauge'

let plugins: {[name: string]: any} = {
  PaBarChartPlugin,
  PaPieChartPlugin,
  PaLineChartPlugin,
  PaScatterChartPlugin,
  PaTreeChartPlugin,
  PaTreemapChartPlugin,
  PaRadarChartPlugin,
  PaRoseChartPlugin,
  PaMapPlugin,
  Pa3dBarChartPlugin,
  PaLiquidChartPlugin,
  PaGaugeChartPlugin
}

let charts = {
  PaBarChart,
  PaPieChart,
  PaRingChart,
  PaLineChart,
  PaScatterChart,
  PaMap,
  PaTreeChart,
  PaTreemapChart,
  PaRadarChart,
  PaRoseChart,
  PaBaiduMap,
  Pa3dBarChart,
  PaLiquidChart,
  PaGaugeChart
}

export {
  charts,
  plugins
}
