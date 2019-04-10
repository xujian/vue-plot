export default function (series: any[], props: any) {
  let defaults = {
    roam: false,
    nodeClick: false,
    breadcrumb: {
        show: false
    },
  }
  series = series.map((s: any) => Object.assign({}, s, defaults))
  return series
}