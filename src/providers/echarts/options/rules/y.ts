export default function (props: any) {
  if (props.y === false) {
    return {
    }
  }
  return {
    yAxis: [{
      type: 'value',
      data: props['y']
    }]
  }
}
