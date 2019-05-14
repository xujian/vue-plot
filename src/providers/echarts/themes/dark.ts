var lineColor = '#447'
var textColor = '#99d'
var axisCommon = function () {
  return {
    axisLine: {
      lineStyle: {
        color: lineColor
      }
    },
    axisTick: {
      lineStyle: {
        color: lineColor
      }
    },
    axisLabel: {
      textStyle: {
        color: textColor
      }
    },
    splitLine: {
      lineStyle: {
        type: 'solid',
        color: '#447'
      }
    },
    splitArea: {
      areaStyle: {
        color: lineColor
      }
    }
  };
};

var colorPalette = [
  '#A0CE3A',
  '#31C5C0',
  '#1E9BD1',
  '#0F347B',
  '#585247',
  '#7F6AAD',
  '#009D85'
]
var theme = {
  color: colorPalette,
  backgroundColor: 'rgba(0,0,0,.2)',
  tooltip: {
    axisPointer: {
      lineStyle: {
        color: lineColor
      },
      crossStyle: {
        color: lineColor
      }
    }
  },
  legend: {
    textStyle: {
      color: lineColor
    }
  },
  textStyle: {
    color: lineColor
  },
  title: {
    textStyle: {
      color: lineColor
    }
  },
  toolbox: {
    iconStyle: {
      normal: {
        borderColor: lineColor
      }
    }
  },
  dataZoom: {
    textStyle: {
      color: lineColor
    }
  },
  timeline: {
    lineStyle: {
      color: lineColor
    },
    itemStyle: {
      normal: {
        color: colorPalette[1]
      }
    },
    label: {
      normal: {
        textStyle: {
          color: lineColor
        }
      }
    },
    controlStyle: {
      normal: {
        color: lineColor,
        borderColor: lineColor
      }
    }
  },
  timeAxis: axisCommon(),
  logAxis: axisCommon(),
  valueAxis: axisCommon(),
  categoryAxis: axisCommon(),

  line: {
    symbol: 'circle'
  },
  graph: {
    color: colorPalette
  },
  gauge: {
    title: {
      textStyle: {
        color: lineColor
      }
    }
  },
  candlestick: {
    itemStyle: {
      normal: {
        color: '#FD1050',
        color0: '#0CF49B',
        borderColor: '#FD1050',
        borderColor0: '#0CF49B'
      }
    }
  }
}

export default theme