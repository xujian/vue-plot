export default {
  name: 'gdp-by-years',
  title: '年度GDP',
  parent: 'gdp',
  props: {
    colors: ['#003366', '#006699', '#4cabce', '#e5323e'],
    barWidth: 10,
    barGap: '5%'
  },
  data: 'mocks:gdp-by-years',
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
