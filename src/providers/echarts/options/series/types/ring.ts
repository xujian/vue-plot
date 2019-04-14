export default function (series: any[], props: any) {
  console.log('ring.ts____________________________', series)
  let result: any[] = []
  const invisibleStyle = {
    color: 'rgba(0,0,0,0)'
  }
  const [innerRadius, outerRadius] = props.radius || ['40%', '80%']
  const innerRadiusNumber = parseFloat(innerRadius)
  const outerHeightNumber = parseFloat(outerRadius)
  series.forEach((s: any) => {
    const ringWidth = (outerHeightNumber - innerRadiusNumber) / s.data.length
    let max = Math.max(...s.data.map((d: any)=> d.value))
    max = max * 1.25
    let newSeries = s.data.map((d: any, i: number) => {
      const radius1 = innerRadiusNumber + ringWidth * i
      const radius2 = innerRadiusNumber + ringWidth * (i + 1)
      let data = [
        {
          name: d.name,
          value: d.value,
        },
        {
          name: 'invisible',
          value: max - d.value,
          itemStyle: invisibleStyle
        }
      ]
      return {
        name: d.name,
        type: 'pie',
        clockWise: false,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        hoverAnimation: false,
        radius: [radius1 + '%', radius2 + '%'],
        data
      }
    })
    result = result.concat(newSeries)
  })
  return result
}