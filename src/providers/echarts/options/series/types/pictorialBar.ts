export default function (series: any[], props: any, options: any) {
  let item: any = {
    barCategoryGap: '0%',
    label: {
      normal: {
        show: true,
        position: 'top'
      }
    },
    symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
    itemStyle: {
      normal: {
        opacity: 0.5
      },
      emphasis: {
        opacity: 1
      }
    }
  }
  series.forEach((s: any) => {
    Object.assign(s, item)
  })
  return series
}
