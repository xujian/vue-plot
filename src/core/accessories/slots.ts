import PaChart from '../chart';
import ChartFactory from '../chart/Factory';

/**
 * 将 <chart>内slot包含的内容转化为标准选项
 */
export function processSlots (slots: any[]) {
  let result: any[] = []
  if (slots) {
    console.log('slots.ts--------/////////slots/////', slots)
    slots.forEach (s => {
      let tag = s.componentOptions.tag || s.tag
      let name: string = tag
      let props = s.componentOptions.propsData
      if (tag.endsWith('-chart')) {
        // 嵌入的 chart
        let chartType = tag.match(/pa\-(\w+)\-chart/)[1]
        let layerProps = processLayer(chartType, props)
        result.push({
          name: 'layers',
          props: layerProps
        })
      } else {
        result.push({
          name: name,
          props
        })
      }
    })
  }
  console.log('slots.ts--------/////////slots result/////', result)
  return result
}

/**
 * 
 * @param chartType 
 * @param props 
 */
function processLayer (chartType: string, props: any) {
  // 将 slot 内嵌入的子图表处理成 series
  let chartFromTypes: {[key: string]: string} = {
    'bar': 'PaBarChart',
    'line': 'PaLineChart'
  }
  props.type = chartType
  let className = chartFromTypes[chartType]
  let chart = ChartFactory.make(className, props)
  return chart.props
}
