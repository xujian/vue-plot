export default function (props: any) {
  if (props.y === false) {
    return {
      yAxis: false
    }
  }
  return {
    yAxis: [{
      type: 'value',
      data: props['y']
    }]
  }
}
