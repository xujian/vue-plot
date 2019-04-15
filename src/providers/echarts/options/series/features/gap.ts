export default function (props: any) {
  console.log('gap.ts______________________', props)
  if (props.gap === undefined) return {}
  let xAxis = [{
    boundaryGap: props.gap
  }]
  return {
    xAxis
  }
}