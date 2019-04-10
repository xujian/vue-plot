export default function (series: any[], props: any) {
  series.forEach((s: any) => {
    let item: any = {
      name: s.data.name,
      stack: props.stack,
      smooth: props.smooth
    }
    Object.assign(s, item)
  })
  return series
}
