export default function (props: any) {  
  return props.data.map((d: any) => ({
    barWidth: props.barWidth,
    stack: props.stacked,
    barGap: props.barGap
  }))
}
