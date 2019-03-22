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
      let component = s.componentInstance
      let props = component.props
      let name: string = tag
      if (tag.endsWith('-chart')) {
        // 嵌入的 chart
        let chartType = tag.match(/pa\-(\w+)\-chart/)[1]
        component = processLayer(chartType, component)
        result.push({
          name: 'layer',
          component
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
function processLayer (chartType: string, component: any) {
  return component
}
