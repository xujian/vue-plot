export default function (props: any) {
  if (props.y === false) {
    return {
    }
  }
  let yAxis: any = {}
  if (Array.isArray(props.y)) {
    yAxis = {
      type: 'value',
      data: props.y
    }
  } else {
    if ([props.y.data]) {
      yAxis.data = props.y.data
    }
    if (props.y.min) {
      yAxis.min = props.y.min
    }
    if (props.y.unit) {
      yAxis.axisLabel = {
        formatter: props.y.unit === '100%' 
          ? (value: number, index: number) => value * 100 + '%'
          : '{value}' + props.y.unit
      }
    }
  }
  return {
    yAxis: [yAxis]
  }
}
