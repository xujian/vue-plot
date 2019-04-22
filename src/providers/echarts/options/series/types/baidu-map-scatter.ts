export default function (series: any[], props: any) {
  series.forEach((s: any) => {
    let item: any = {
      name: '',
      type: 'scatter',
      coordinateSystem: 'bmap',
      data: s.data,
      symbolSize: function (val: number[]) {
        return val[2] / 10;
      },
      itemStyle: {
        normal: {
          color: '#009688'
        }
      }
    }
    Object.assign(s, item)
  })
  return series
}
