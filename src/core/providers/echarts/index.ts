import echarts from 'echarts'
import { makeProviderOptions } from './options'

class Provider {

  public container: any

  constructor(container: any) {
    this.container = container
  }

  draw(props: any): void {
    console.log('Provider.ts 0-------draw---props-----', props)
    let chart = echarts.init(this.container, 'dark')
    let providerOptions = makeProviderOptions(props)
    console.log('============== final provider options', providerOptions)
    chart.setOption(providerOptions)
  }

  make(options: any): void {

  }
}

export default Provider