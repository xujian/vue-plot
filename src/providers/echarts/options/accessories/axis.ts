export default (props: any, providerOptions: any) => {
  let axis: {[key: string]: any} = props.accessories.axis
  axis.position = axis.position || 'right'
  axis.type = axis.type || 'value'
  providerOptions.yAxis = providerOptions.yAxis || [{
    type: 'value'
  }]
  providerOptions.yAxis.push(axis)
}