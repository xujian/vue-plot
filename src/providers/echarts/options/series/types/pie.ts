export default function (series: any[], props: any, options: any) {
  series.forEach((s: any) => {
    let item: any = {
      radius: props.radius || ['0%', '50%'],
      labelLine: {
        show: true, 
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
    if(!props.labelShow){
      item.label={
        normal:{
          show:props.labelShow,
        }
      }
    }
    if(s.data[0].name===''||(s.data[0].name===' ')){
      s.silent=true,
      s.color=props.outPieColor||options.color[0]
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