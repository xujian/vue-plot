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
    let chart = echarts.init(this.container, 'dark')
    let providerOptions = makeProviderOptions({
      data: input.data,
      props: input.props,
      options: input.options
    })
    console.log('provider draw provider options', providerOptions)
    chart.setOption(providerOptions)
  }

  make(options: any): void {

  }
}

export default Provider