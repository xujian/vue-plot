export default function (props: any) {
  let yAxisIndex = 0
  if (props.axis === 'right' || props.aixs === 1) {
    yAxisIndex = 1
  }
  return {
    yAxisIndex
  }
}