/**
 * 负责组装echarts原生配置项
 */

 /**
  * 全体图表类型共用的基本配置
  */
const common = {
  grid: {
    top: '15%',
    left: '12%',
    right: '12%',
    bottom: '15%',
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
  legend: {
    right: 0,
    top: 10,
    itemHeight: 10,
    fontSize: 10
  },
  backgroundColor: 'rgba(0,0,0,0.2)',
  tooltip: {
    trigger: 'axis',
    padding: 10,
    borderWidth: 0,
    backgroundColor: 'rgba(0,0,0,0.33)',
    textStyle: {
      fontSize: 12,
    },
    axisPointer: {
      type: 'shadow'
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