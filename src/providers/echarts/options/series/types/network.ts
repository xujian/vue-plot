export default function (series: any[], props: any) {
  series.forEach((s: any) => {
    let item: any = {
      label: {
        normal: {
          show: true
        }
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 10],
      edgeLabel: {
        normal: {
          textStyle: {
            fontSize: 20
          }
        }
      },
      lineStyle: {
        opacity: 0.9,
        width: 2,
        curveness: 0
      }
    }
    Object.assign(s, item)
  })
  return series
}
