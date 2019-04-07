export default {
  name: 'gdp-by-years',
  title: '年度GDP',
  parent: 'gdp',
  props: {
    colors: ['#003366', '#006699', '#4cabce', '#e5323e'],
    barWidth: 20,
    barGap: '50%'
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
