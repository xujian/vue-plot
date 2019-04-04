export default (props: any, providerOptions: any) => {
  let output: any = {} 
  let axis: {[key: string]: any} = props.axis
  axis.position = axis.position || 'right'
  axis.type = axis.type || 'value'
  let result = {
    position: axis.position,
    type: 'value'
  }
  providerOptions.yAxis = providerOptions.yAxis || [{
    type: 'value'
  }]
  providerOptions.yAxis.push(result)
}