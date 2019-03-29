export default function (props: any) {  
  let series = props.data.map((d: any) => {
    let item: any = {
      barWidth: props.barWidth,
      stack: props.stacked,
      barGap: props.barGap
    }
    if (props.round) {
      item.itemStyle = {
        barBorderRadius: props.barWidth / 2
      }
    }
    return item
  })
  return series
}
