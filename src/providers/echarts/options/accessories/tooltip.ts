export default (props: any, providerOptions: any) => {
  let tooltip = props.accessories.tooltip
  providerOptions.tooltip = {
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
}
