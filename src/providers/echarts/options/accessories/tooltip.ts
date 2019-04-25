export default (props: any, providerOptions: any) => {
  let tooltip = props.accessories.tooltip
  let output = {
    ...providerOptions.tooltip,
    padding: 0,
    backgroundColor: 'transparent',
    show: true,
    trigger: 'axis',
    positon: tooltip.positon
  }
  if (tooltip.foramtter) {
    output.formatter = [
      `<div class="tooltip">`,
      tooltip.formatter,
      `</di>`
    ].join('')
  }
  if (tooltip.data) {
    // 当tooltip提供了data，使用对应位置的内容
    // tooltip的dat应与chart的data格式相同
    output.formatter =
      (params: any, ticket: string) => {
        let dataIndex = params[0].dataIndex // X轴位置
        let legend = Array.isArray(props.legend)
          ? props.legend
          : props.legend.data
        let content = tooltip.data.map((line: any[], x: number) => [
            params.axisValueLabel,
            legend[x],
            ': ',
            line[dataIndex]
          ].join('')
        ).join('<br>')
        return [
          `<div class="tooltip">`,
          params[0].axisValueLabel,
          '年<br>',
          content,
          `</di>`
        ].join('')
      }
  }
  return {
    tooltip: output
  }
}
