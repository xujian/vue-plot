let options = {
  xAxis: false,
  yAxis: false,
  backgroundColor: 'transparent',
  visualMap: {
    max: 20,
    inRange: {
      color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
    }
  },
  xAxis3D: {
    type: 'category',
    axisLabel: {
      color: '#fff'
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(33, 150, 243, 0.5)'
      }
    },
    data: ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
      '7a', '8a', '9a', '10a', '11a',
      '12p', '1p', '2p', '3p', '4p', '5p',
      '6p', '7p', '8p', '9p', '10p', '11p']
  },
  yAxis3D: {
    type: 'category',
    axisLabel: {
      color: '#fff'
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(33, 150, 243, 0.5)'
      }
    },
    data: ['一', '二', '三', '四', '五', '六', '日']
  },
  zAxis3D: {
    type: 'value',
    axisLabel: {
      color: '#fff'
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(33, 150, 243, 0.5)'
      }
    }
  },
  grid3D: {
    boxWidth: 200,
    boxDepth: 80,
    light: {
      main: {
        intensity: 1.2
      },
      ambient: {
        intensity: 0.3
      }
    }
  }
}

export default options