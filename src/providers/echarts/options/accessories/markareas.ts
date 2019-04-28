export default (props: any, options: any) => {
  let attributes = props.accessories.markareas
  let series: any[] = []
  if (attributes.mode === 'max-min') {
    series = [{
      type: 'custom',
      data: [{
        name: '',
        xAxis: 'min',
        yAxis: 'min'
      }, {
        xAxis: 'max',
        yAxis: 'max'
      }]
    }]
  } else if (['columns', 'rows'].includes(attributes.mode)) {
    series = attributes.data.map((d: any) => {
      let item = {
        type: 'custom',
        silent: true,
        color: d.color,
        markArea: {
          data: [[
            { name: d.label, xAxis: d.coords[0] }, { xAxis: d.coords[1] }
          ]],
          label: {
            show: true,
            position: 'top'
          }
        }
      }
      return item
    })
  }
  let output = options.series || []
  output.push(...series)
  return {
    series: output
  }
}
