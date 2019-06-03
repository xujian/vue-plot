import echarts from 'echarts'
export default [
  [{
    name: "平台1",
    // category: 0,
    // active: true,
    speed: '50kb/s',
    value: [0, 0],
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          offset: 0,
          color: '#157eff'
        }, {
          offset: 1,
          color: '#35c2ff'
        }]),
      }
    },
  },
  {
    name: "平台2",
    // category: 0,
    // active: true,
    speed: '50kb/s',
    value: [0, 100],
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          offset: 0,
          color: '#157eff'
        }, {
          offset: 1,
          color: '#35c2ff'
        }]),
      }
    },
  },
  {
    name: "平台3",
    // category: 1,
    value: [0, 200],
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          offset: 0,
          color: '#4B79A1'
        }, {
          offset: 1,
          color: '#283E51'
        }]),
      }
    },
  },
  {
    name: "平台4",
    // category: 1,
    value: [0, 300],
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          offset: 0,
          color: '#4B79A1'
        }, {
          offset: 1,
          color: '#283E51'
        }]),
      }
    },
  },
  {
    name: "数据中心",
    value: [1000, 200],
    symbolSize: 60,
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          offset: 0,
          color: '#16BFFD'
        }, {
          offset: 1,
          color: '#CB3066'
        }]),
      }
    },
  }]
]
