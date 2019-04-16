export default function (props: any) {
  let yAxis: any = {}, y: any = props.y
  'show,data,min'.split(',').forEach(p => {
    if (Reflect.has(y, p)) {
      yAxis[p] = y[p]
    }
  })
  if (props.y.unit) {
    yAxis.axisLabel = {
      formatter: props.y.unit === '100%' 
        ? (value: number, index: number) => value * 100 + '%'
        : '{value}' + props.y.unit
    }
  }
  if (props.y.line) {
    let line = props.y.line
    if (line === false) {
      yAxis.axisLine = {
        show: false
      }
    } else {

    }
  }
  if (props.y.ticks) {
    let ticks = props.y.ticks
    if (ticks === false) {
      yAxis.axisTick = {
        show: false
      }
    }
  }
  return {
    yAxis: [yAxis]
  }
}
