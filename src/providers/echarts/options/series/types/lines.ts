
export default function (series: any[], props: any) {
  series.forEach((s: any, i: number) => {
    let item: any = {
      coordinateSystem: 'cartesian2d',
      z: 1,
      effect: {
        show: true,
        smooth: false,
        trailLength: 0,
        symbol: "arrow",
        color: 'rgba(55,155,255,0.5)',
        symbolSize: 12
      },
      lineStyle: {
        normal: {
          curveness: 0.2
        }
      },
    }
    Object.assign(s, item)
  })
  return series
}


