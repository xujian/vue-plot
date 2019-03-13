import echarts from 'echarts'
import options from './options'

class Provider {

  public container: any

  constructor(container: any) {
    this.container = container
  }

  draw(props: any): void {
    let chart = echarts.init(this.container, 'dark')
    let final = options.make(props)
    console.log('============== final provider options', final)
    chart.setOption(final)
  }

  make(options: any): void {

  }
}

export default Provider