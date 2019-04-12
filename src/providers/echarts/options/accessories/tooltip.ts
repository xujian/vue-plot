export default (props: any, providerOptions: any) => {
  let tooltip = props.accessories.tooltip
  providerOptions.tooltip = {
    ...providerOptions.tooltip,
    show: true,
    trigger: 'axis',
    positon: tooltip.positon,
    formatter: tooltip.formatter
  }
}
