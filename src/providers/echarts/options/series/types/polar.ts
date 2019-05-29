export default function (series: any[], props: any, options: any) {
  let result: any[] = []
  let type='bar'
  let max =100
  series.forEach((s: any) => {
    type=s.type
    if(s.data&&(s.data.length>0)){
      max = Math.max(...s.data)
      s.data.map((v: any)=>{
        result.push({value:v})
      })
    }
  })
  let addOPtions={
    angleAxis: {
      clockwise:false,
      interval: 1,
      type: 'category',
      data:props.labelName,
      z: 10,
      axisLine: {
        show: false
      },
      axisTick:{
        show:false
      },
      axisLabel: {
        interval: 0,
        color: '#00c7ff',
      },
    },
    radiusAxis: {
      min: 0,
      max: max,
      // interval:80,
      axisLine: {
        show: false
      },
      axisLabel: {
        formatter: '{value}',
        color: '#b3b7c3',
      },
      splitLine: {
        lineStyle: {
          color: '#313c5c',
        }
      }
    },
    polar: {},
  }
  Object.assign(options,addOPtions)
  let addSerise={
    type:type,
    itemStyle:{
      color: function (params: any){
        return options.color[params.dataIndex]
      }
    },
    data:result,
    coordinateSystem: 'polar',
  }
  return [addSerise]
}