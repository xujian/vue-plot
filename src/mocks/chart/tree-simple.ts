export default [
  [{
    name: 'flare',
    children: [{
      name: 'animate',
      symbolSize: 16,
      label: {
        fontSize: 16,
        color: '#fff' //字体颜色
      },
      itemStyle: {
        color: '#ff0000', //这是节点折叠时候的颜色
        borderColor: '#0000ff',
        borderWidth: 3,
        normal: {
          color: '#00ff00'
        },

      },
      lineStyle: {
        color: '#fff',
        width: 4,
        type: 'dotted' //'dotted'虚线 'solid'实线
      },
      children: [{
        name: 'Easing',
        value: 17010
      },
      {
        name: 'FunctionSequence',
        value: 5842
      },
      {
        name: 'interpolate',
        children: [{
          name: 'ArrayInterpolator',
          value: 1983
        },
        {
          name: 'ColorInterpolator',
          value: 2047
        },
        {
          name: 'DateInterpolator',
          value: 1375
        },
        {
          name: 'Interpolator',
          value: 8746
        },
        {
          name: 'MatrixInterpolator',
          value: 2202
        }
        ]
      },
      {
        name: 'ISchedulable',
        value: 1041
      },
      {
        name: 'Parallel',
        value: 5176
      },
      {
        name: 'Pause',
        value: 449
      }
      ]
    },
    {
      name: 'data',
      category: 'tree2',
      label: {
        normal: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          show: false,
          color: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [{
              offset: 0,
              color: 'green' // 0% 处的颜色
            }, {
              offset: 1,
              color: 'white' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          },
          borderColor: 'blue',
          borderWidth: 2,
          shadowColor: 'rgba(0, 0, 0, 1)',
          shadowBlur: 10
        },
        emphasis: {
          color: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [{
              offset: 0,
              color: 'green' // 0% 处的颜色
            }, {
              offset: 1,
              color: 'white' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          }
        }
      },
      children: [{
        name: 'converters',
        children: [{
          name: 'Converters',
          value: 721
        },
        {
          name: 'DelimitedTextConverter',
          value: 4294
        },
        {
          name: 'GraphMLConverter',
          value: 9800
        },
        {
          name: 'IDataConverter',
          value: 1314
        },
        {
          name: 'JSONConverter',
          value: 2220
        }
        ]
      },
      {
        name: 'DataField',
        value: 1759
      },
      {
        name: 'DataSchema',
        value: 2165
      }
      ]
    }
    ]
  }]
]
