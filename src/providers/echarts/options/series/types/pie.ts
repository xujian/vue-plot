export default function (series: any[], props: any) {
  series.forEach((s: any) => {
    let item: any = {
      radius: props.radius,
    }
    Object.assign(s, item)
  })
  return series
}