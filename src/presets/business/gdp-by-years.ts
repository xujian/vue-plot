export default {
  name: 'gdp-by-years',
  title: '年度GDP',
  parent: 'gdp',
  props: {
  },
  data: 'mocks:bar-gdp-by-years',
  layers: [
    {
      type: 'line',
      props: {
        smooth: true,
      },
      data: 'mocks:line-simple'
    }
  ]
}
