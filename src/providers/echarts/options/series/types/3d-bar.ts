export default function (series: any[], props: any) {
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
