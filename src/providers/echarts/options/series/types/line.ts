export default function (series: any[], props: any) {
  series.forEach((s: any) => {
    let item: any = {
      smooth: props.smooth
    }
    if (props.stacked) {
      item.stack = props.stacked || 'stack-1'
    }
    if (props.area) {
      item.areaStyle = {}
    }
    if (props.lineWidth) {
      item.lineStyle = {
        width: props.lineWidth
      }
    }
    Object.assign(s, item)
  })
  return series
}
