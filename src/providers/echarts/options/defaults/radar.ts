let options = {
  xAxis: false,
  yAxis: false,
  radar: {
    radius: '60%',
    splitNumber: 8,
    axisLine: {
      lineStyle: {
        color: '#fff',
        opacity: .5
      }
    },
    splitLine: {
      lineStyle: {
        color: '#fff',
        opacity: .0
      }
    },
    splitArea: {
      areaStyle: {
        color: 'rgba(127,95,132,.3)',
        opacity: 0,
      }
    },
    name: {
      formatter: '{value}',
      textStyle: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 12
      }
    },
    indicator: [{
      name: 'A',
      max: 2000
    }, {
      name: 'B',
      max: 2000
    }, {
      name: 'C',
      max: 2000
    }, {
      name: 'D',
      max: 2000
    }, {
      name: 'E',
      max: 2000
    }, {
      name: 'F',
      max: 2000
    }]
  }
}

export default options