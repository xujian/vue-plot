const items: { [key: string]: any }[] = [{
  name: "平台1",
  // category: 0,
  active: true,
  speed: '50kb/s',
  value: [0, 0]
}, {
  name: "平台2",
  // category: 0,
  active: true,
  speed: '50kb/s',
  value: [0, 100]
}, {
  name: "平台3",
  // category: 1,
  value: [0, 200]
}, {
  name: "平台4",
  // category: 1,
  value: [0, 300]
}]
const targetCoord = [1000, 140]

const item1: { [key: string]: any } = {
  name: "数据中心",
  value: targetCoord,
  symbolSize: 100,
  itemStyle: {
    // normal: {
    //   color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
    //     offset: 0,
    //     color: '#157eff'
    //   }, {
    //     offset: 1,
    //     color: '#35c2ff'
    //   }]),
    // }
  },
  label: {
    normal: {
      fontSize: '14'
    }
  },
}


export default function (series: any[], props: any) {
  console.log('props........,,', props)
  debugger
  series.forEach((s: any, i: number) => {
    let item: any = {
      label: {
        normal: {
          show: true
        }
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 10],
      edgeLabel: {
        normal: {
          textStyle: {
            fontSize: 20
          }
        }
      },
      lineStyle: {
        opacity: 0.9,
        width: 2,
        curveness: 0
      },
      layout: 'none',
      coordinateSystem: 'cartesian2d',
      links: items.map(el => {
        return {
          source: el.name,
          target: item1.name,
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
