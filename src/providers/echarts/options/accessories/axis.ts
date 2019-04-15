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
      formatter: input.unit === '%' 
        ? (value: number, index: number) => value * 100 + '%'
        : '{value}' + input.unit
    }
  }
  providerOptions.yAxis = providerOptions.yAxis || [{
    type: 'value'
  }]
  providerOptions.yAxis.push(axis)
}