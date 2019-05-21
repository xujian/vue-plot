export default function (series: any[]) {
  series.forEach(s => {
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
