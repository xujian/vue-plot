export default function (series: any[], props: any) {
  series.forEach((s: any) => {
    let item: any = {
      radius: props.radius || ['0%', '100%'],
      labelLine: {
        normal: {
          show: true,
          smooth: false,
          length: 10,
          length2: 10
        },
        emphasis: {
          show: true
        }
      }
    }
    if (props.name === 'PaRoseChart') {
      // 处理 pa-rose-chart
      item.roseType = 'area'
      if (props.half) {
        let data = Array(s.data.length).fill({
          value: 0,
          name: '',
          label: {
            show: false,
          },
          labelLine: {
            show: false
          }
        })
        s.data = s.data.concat(data)
      }
    }
    Object.assign(s, item)
  })
  return series
}