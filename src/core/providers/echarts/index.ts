import echarts from 'echarts'
import { makeProviderOptions } from './options'

class Provider {

  public container: any

  constructor(container: any) {
    this.container = container
  }

  draw(input: {
    data: any,
    props?: any,
    options?: any
  }): void {
    console.log('Provider.ts 0-------draw--------', this.container.clientHeight)
    let chart = echarts.init(this.container, 'dark')
    let providerOptions = makeProviderOptions({
      data: input.data,
      props: input.props,
      options: input.options
    })
    console.log('============== final provider options', providerOptions)
    chart.setOption(providerOptions)
  }

  make(options: any): void {

  }
}

export default Provider