import echarts from 'echarts'
import options from './options'
import globalConfigs, { setGlobalConfigs } from '../../../core/utils/configs'

class Provider {

  public container: any

  constructor(container: any) {
    this.container = container
  }

  draw(props: any): any {
    let theme = globalConfigs.theme
    let chart = echarts.init(this.container, theme)
    let final = options.make(props)
    console.log('============== final provider options', final)
    chart.setOption(final)
    return chart
  }

  make(options: any): void {

  }
}

export default Provider