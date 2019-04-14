export default function (series: any[], props: any) {
  let result = series.map(s => {
    let item = {
      label: {
        normal: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            color: '#fff'
        }
      }
    }
    Object.assign(s, item)
  })
  return series
}