import echarts from 'echarts'
import data from '../../../../../../src/mocks/chart/network-simple'

// 根据category 设置不同分类的样式，name 可以作为legend的name
const categories = [
  {
    // name: ' 流入中',
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
    itemStyle: {
      // name: '暂无流入',
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
  }
]

// 默认截取第一个数据作为被连接的点
const targetDot: { [key: string]: any } = data[0][0]
targetDot.itemStyle = {
  normal: {
    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
      offset: 0,
      color: '#16BFFD'
    }, {
      offset: 1,
      color: '#CB3066'
    }]),
  }
}

// 剩余的数据作为原点(去连接的点)
const length = data[0].length
const sourceDot: { [key: string]: any }[] = data[0].slice(1, length)

export default function (series: any[], props: any) {
  series.forEach((s: any, i: number) => {
    let item: any = {
      label: {
        normal: {
          show: true
        }
      },
      edgeSymbol: ['none', 'arrow'],
      edgeSymbolSize: [4, 10],
      edgeLabel: {
        normal: {
          show: true,
          textStyle: {
            fontSize: 14
          },
          formatter(params: any) {
            let txt = ''
            if (params.data.speed !== undefined) {
              txt = params.data.speed
            }
            return txt
          }
        }
      },
      lineStyle: {
        opacity: 0.9,
        width: 2,
        curveness: 0
      },
      categories: categories,
      layout: 'none',
      coordinateSystem: 'cartesian2d',
      links: sourceDot.map(el => {
        return {
          source: el.name,
          target: targetDot.name,
          speed: el.speed,
          lineStyle: {
            normal: {
              color: el.speed ? '#12b5d0' : '#ff0000',
              curveness: 0.2,
              width: 1,
            }
          },
        }
      })
    }
    Object.assign(s, item)
  })
  return series
}
