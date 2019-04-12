/**
 * 负责组装echarts原生配置项
 */

 /**
  * 全体图表类型共用的基本配置
  */
const common = {
  grid: {
    top: '10%',
    left: '10%',
    right: '10%',
    bottom: '10%',
    // containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['a', 'b', 'c', 'd', 'e']
  },
  yAxis: [
    {
      type: 'value'
    }
  ],
  tooltip: {
    trigger: 'axis'
  }
}

declare type ProviderOptions = {
  series: any[],
  data: any[]
}

export default common