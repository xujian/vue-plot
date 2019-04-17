export default function (props: any) {
  let yAxis: any = {}, y: any = props.y
  'name,show,data,min'.split(',').forEach(p => {
    if (Reflect.has(y, p)) {
      yAxis[p] = y[p]
    }
  })
  if (y.unit) {
    yAxis.axisLabel = {
      formatter: y.unit === '100%'
        ? (value: number, index: number) => value * 100 + '%'
        : '{value}' + y.unit
    }
  }
  if (Reflect.has(y, 'line')) {
    let line = y.line
    if (line === false) {
      yAxis.axisLine = {
        show: false
      }
    } else {

    }
  }
  if (Reflect.has(y, 'ticks')) {
    let ticks = y.ticks
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
