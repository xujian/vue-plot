import 'echarts/extension/bmap/bmap'

export default function (props: any) {  
  return props.data.map((d: any) => ({
    name: 'Top 5',
    type: 'scatter',
    coordinateSystem: 'bmap',
    data: d,
    symbolSize: function (val: number[]) {
      return val[2] / 10;
    },
    itemStyle: {
      normal: {
        color: '#009688'
      }
    }
  }))
}
