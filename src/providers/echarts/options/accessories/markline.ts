export default (props: any) => {
  // eslint-disable-next-line @typescript-eslint/class-name-casing
  interface addAttr {
    type?: string,
    yAxis?: any,
    name: any,
    lineStyle: any,
    label: any,
  }
  
  let marklinedata: any[] = []
  let input: any = props.accessories.markline.attr
  input.type && input.type.map((v: any,i: number)=>{
    let addSeries: addAttr = {
      name:'',
      lineStyle:{
        color:(input.colors && input.colors[i]) || props.colors[i],
        type:(input.style && input.style[i] && input.style[i].line) || 'dotted',
      },
      label:{
        normal:{
          position:'end',
          formatter:'{b}\n{c}' + ((input.unit && input.unit[i]) || '')
        }
      }
    }
    if(['min','max','average'].indexOf(v) == -1){
      addSeries.yAxis = Object.values(input.data[i])
      addSeries.name = Object.keys(input.data[i])
    }else{
      addSeries.type = v
      addSeries.name = (v == 'average' ? '平均值' : v == 'max' ? '最大值' : '最小值')
    }
    marklinedata.push(addSeries)
  })
  return {
    markLine: {data:marklinedata}
  }
}