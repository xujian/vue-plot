export default (props: any, providerOptions: any) => {
  let input: {[key: string]: any} = props.accessories.axis
  let axis:any = {}
  axis.position = input.position || 'right'
  axis.type = input.type || 'value'
  axis.splitLine = {
    show: false
  }
  if (input.unit) {
    axis.axisLabel = {
      formatter: input.unit === '100%'
        ? (value: number) => value * 100 + '%'
        : '{value}' + input.unit
    }
  }
  let yAxis = providerOptions.yAxis || [{
    type: 'value'
  }]
  yAxis.push(axis)
  //添加yAxis name值 
  if(input.yName){
    yAxis.forEach((value: any,i: number) => {
      value.name=input.yName[i]
    });
  }
  return {
    yAxis
  }
}
