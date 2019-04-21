import { VNode } from 'vue'
import PaChart from '../chart';
import ChartFactory from '../chart/Factory';

/**
 * 将 <chart>内slot包含的内容转化为标准选项或layer
 */
export function resolveSlot (slots: VNode[]) {
  let result: any[] = []
  if (slots) {
    console.log('slots.ts--------/////////slots/////', slots)
    slots.forEach (s => {
      if (s.tag) {
        let tag = s.componentOptions && s.componentOptions.tag || s.tag || ''
        let component = s.componentInstance
        let props = component ? (component as PaChart).props: {}
        let name: string = tag
        if (tag !== null && tag.endsWith('-chart')) {
          // 嵌入的 chart
          let matched = tag.match(/pa\-(\w+)\-chart/)
          let chartType = matched ? matched[1] : 'none'
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
