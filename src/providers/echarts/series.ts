export function makeSeries (props: any): any[] {
  let series: any[] = props.data.map(d => {
    // 合并: 给定配置项 ➡️ 缺省配置项 ➡️ 固有配置项
    let basicSettings = {
      type: props.type || 'bar',
      data: d.constructor.name === 'Array'
        ? d: d.value
    }
    // 添加指定类型的图表配置项
    let forTyped = {}
    if (props.type === 'bar') {
      forTyped = {
        barWidth: props.barWidth,
        stack: props.stacked,
        barGap: props.barGap
      }
    }
    if (props.type === 'pie') {
      forTyped = {
        barWidth: props.barWidth,
        stack: props.stack,
        barGap: props.barGap
      }
    }
    if (props.type === 'line') {
      let areaStyle = undefined
      if (props.area === true) {
        areaStyle = {}
      } else if (props.area) {
        areaStyle = props.area
      }
      forTyped = {
        name: d.name,
        stack: props.stack,
        smooth: props.smooth,
        areaStyle: areaStyle
      }
    }
    if (props.type === 'scatter') {
      forTyped = {
        name: d.name
      }
    }
    return ({
      ...basicSettings,
      ...forTyped
    })
  })
  return series
}
