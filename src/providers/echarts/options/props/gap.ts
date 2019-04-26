export default function (props: any) {
  if (props.gap === undefined) return {}
  let xAxis = [{
    boundaryGap: props.gap
  }]
  return {
    xAxis
  }
}