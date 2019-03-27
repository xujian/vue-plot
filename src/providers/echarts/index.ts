import echarts from 'echarts'
import options from './options'
import globalConfigs, { setGlobalConfigs } from '../../core/shared/configs'

class Provider {

  public container: any

  constructor(container: any) {
    this.container = container
  }

  draw(props: any): Promise<any> {
    let theme = globalConfigs.theme
    let chart = echarts.init(this.container, theme)
    return new Promise<any>((resolve, reject) => {
      options.make(props).then(finalOption => {
        console.log('=X=X=X=X=X======== final provider options', finalOption)
        chart.setOption(finalOption)
        resolve(chart)
      })
    })
  }

  make(options: any): void {

  }
}

export default Provider