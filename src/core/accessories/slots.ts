import PaChart from '../chart';
import ChartFactory from '../chart/Factory';

/**
 * 将 <chart>内slot包含的内容转化为标准选项或layer
 */
export function resolveSlot (slots: any[]) {
  let result: any[] = []
  if (slots) {
    console.log('slots.ts--------/////////slots/////', slots)
    slots.forEach (s => {
      let tag = s.componentOptions.tag || s.tag
      let props = s.componentInstance.props
      let name: string = tag
      if (tag.endsWith('-chart')) {
        // 嵌入的 chart
        let chartType = tag.match(/pa\-(\w+)\-chart/)[1]
        let layerProps = processLayer(chartType, props)
        result.push({
          name: 'layer',
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
  // console.log('slots.ts--------/////////slots result/////', result)
  return result
}

/**
 * 
 * @param chartType 
 * @param props 
 */
function processLayer (chartType: string, props: any) {
  props.type = chartType
  return props
}
