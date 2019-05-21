import echarts from 'echarts'
import options from './options'
import globalConfigs from '../../core/shared/configs'

class Provider {

  public container: any

  constructor (container: any) {
    this.container = container
  }

  draw (props: any, beforePaint: (options: any) => any): any {
    let theme = globalConfigs.theme
    let chart = echarts.init(this.container, theme)
    let finalOption = options.make(props)
    console.log('%c>>>FINAL PROVIDER OPTIONS',
      'background:#e57373;color:#fff',
      finalOption)
    if (beforePaint) {
      finalOption = beforePaint(finalOption)
    }
    chart.setOption(finalOption)
    return chart
  }

  make (options: any): void {
  }
}

export default Provider
