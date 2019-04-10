export default function (series: any[], props: any) {
  let item: any = {
    areaStyle: {
        normal: {
            opacity: 0.8
        }
    },
  }
  return series.map((s: any) => Object.assign({}, s, item))
}