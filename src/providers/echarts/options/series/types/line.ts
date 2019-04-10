export default function (series: any[], props: any) {
  series.forEach((s: any) => {
    let item: any = {
      name: s.data.name,
      stack: props.stack,
      smooth: props.smooth
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
