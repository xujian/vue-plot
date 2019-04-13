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
  backgroundColor: '#00265f',
  tooltip: {
    trigger: 'axis',
    padding: 0,
    borderWidth: 0,
    backgroundColor: 'transparent',
    textStyle: {
      fontSize: 12,
    },
    extraCssText: [
      'border-radius: 0',
      'background-color： rgba(0,0,0,0.5)'
    ].join(';')
  }
}

declare type ProviderOptions = {
  series: any[],
  data: any[]
}

export default common