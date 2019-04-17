export default (props: any, providerOptions: any) => {
  let tooltip = props.accessories.tooltip
  let output = {
    ...providerOptions.tooltip,
    padding: 0,
    backgroundColor: 'transparent',
    show: true,
    trigger: 'axis',
    positon: tooltip.positon,
    formatter: [
      `<div class="tooltip">`,
      tooltip.formatter,
      `</di>`
    ].join('')
  }
  return {
    tooltip
  }
}
