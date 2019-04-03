export default {
  name: 'gdp-of-year',
  title: '年度GDP',
  type: 'bar',
  props: {
    barWidth: 10,
    barGap: '100%'
  },
  data: 'mocks:bar-simple',
  layers: [
    {
      type: 'line',
      smooth: true,
      data: 'mocks:line-simple'
    }
  ]
}
