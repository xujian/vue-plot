export default function (series: any[], props: any, options: any) {
  let item: any = {
    barWidth: props.barWidth,
    stack: props.stacked,
    barGap: props.barGap
  }
  if (props.round) {
    item.itemStyle = {
      barBorderRadius: props.barWidth / 2
    }
  }
  series.forEach((s: any) => {
    Object.assign(s, item)
  })
  /**
   * 处理 shadow
   */
  if (props.shadow) {
    if (typeof options.xAxis === 'object') {
      options.xAxis = [options.xAxis, {
        type: 'category',
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        data: options.xAxis.data
      }]
    }
    // 阴影 插入一个表示阴影的series
    let shadow :{ [key: string]: any, data: number[] } = {
      type: 'bar',
      data: []
    }
    let max: number = 0
    props.data.forEach((d: any[]) => {
      max = Math.max(max, ...d)
    })
    // 对数字取整
    let [m, pow] = max.toPrecision(2).split('e+')
    max = Math.ceil(parseFloat(m)) * Math.pow(10, parseInt(pow, 10))
    shadow.data = Array(props.data[0].length).fill(max)
    shadow.barGap = props.barGap
    shadow.xAxisIndex = 1
    shadow.barCategoryGap = '-100%'
    shadow.barWidth = props.barWidth
    shadow.itemStyle = {
      normal: {color: 'rgba(255,255,255,0.2)'}
    }
    let seriesWithSadows: any[] = []
    series.forEach((s: any) => {
      // Reflect.deleteProperty(s, 'barGap')
      seriesWithSadows.push(shadow)
      seriesWithSadows.push(s)
    })
    series = seriesWithSadows
  }
  return series
}
