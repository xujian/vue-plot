import echarts from 'echarts'
import { Gradient } from '@/core/shared/styles/Color'

export default {
  make (color: Gradient) {
    let stops = color.stops.map((s: any, i: number) => ({
      offset: (1 / (color.stops.length - 1)) * i,
      color: s
    }))
    let result = new echarts.graphic
      .LinearGradient(0, 0, 0, 1, stops)
    return result
  }
}
