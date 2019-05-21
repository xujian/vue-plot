export default function (series: any[]) {
  series.forEach((s: any) => {
    let item: any = {
      shading: 'color',
      itemStyle: {
        opacity: 0.4
      },
    }
    Object.assign(s, item)
  })
  return series
}
