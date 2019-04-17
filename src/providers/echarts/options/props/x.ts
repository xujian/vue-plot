export default function (props: any) {
  let x = props.x
  x = x || []
  let xAxis: any = {
    type: x.type || 'category'
  }
  if (xAxis.type === 'category') {
    xAxis.data = x.data
  }
  if (x.label) {
    xAxis.axisLabel = {
      formatter: x.label
    }
  }
  if (Reflect.has(x, 'line')) {
    let line = x.line
    if (line === false) {
      xAxis.axisLine = {
        show: false
      }
    } else {

    }
  }
  if (Reflect.has(x, 'ticks')) {
    let ticks = x.ticks
    if (ticks === false) {
      xAxis.axisTick = {
        show: false
      }
    }
  }
  return {
    xAxis : [xAxis]
  }
}
