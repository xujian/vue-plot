export default function (props: any) {  
  return props.data.map((d: any) => ({
    name: 'Top 5',
    type: 'scatter',
    coordinateSystem: 'bmap',
    data: d,
    symbolSize: function (val) {
      return val[2] / 10;
    },
  }))
}
