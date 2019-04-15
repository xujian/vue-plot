export default (props: any, options: any) => {
  let attributes = props.accessories.markarea
  let data: any[] = []
  if (attributes.mode === 'max-min') {
    data = [{
      name: '',
      xAxis: 'min',
      yAxis: 'min'
    }, {
      xAxis: 'max',
      yAxis: 'max'
    }]
  } else if (attributes.mode === 'columns') {
    data = attributes.data.map((d: any) => ([
      { xAxis: d[0] }, { xAxis: d[1] }
    ]))
  } else if (attributes.mode === 'rows') {
    data = attributes.data.map((d: any) => ([
      { yAxis: d[0] }, { yAxis: d[1] }
    ]))
  }
  let markArea = {
    silent: true,
    data: data
  }
  options.series = options.series || []
  options.series.push({
    type: 'custom',
    color: '#009688',
    markArea
  })
}
