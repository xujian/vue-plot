// export default function (props: any, providerOptions: any) {
//   return {
//     series: [{
//       type: 'lines',
//       data: [
//         [
//           { coord: [0, 0] },
//           { coord: [1000, 140] },
//         ],
//         [
//           { coord: [0, 100] },
//           { coord: [1000, 140] }
//         ]
//       ]
//     }]
//   }
// }

export default (props: any, providerOptions: any) => {
  debugger
  let input: { [key: string]: any } = props.accessories.flow
  let flow: any = {}
  flow.position = input.position || 'right'
  flow.type = input.type || 'value'
  flow.splitLine = {
    show: false
  }
  if (input.unit) {
    flow.axisLabel = {
      formatter: input.unit === '100%'
        ? (value: number) => value * 100 + '%'
        : '{value}' + input.unit
    }
  }
  let yAxis = providerOptions.yAxis || [{
    type: 'value'
  }]
  yAxis.push(flow)
  //添加yAxis name值
  if (input.yName) {
    yAxis.forEach((value: any, i: number) => {
      value.name = input.yName[i]
    });
  }
  //添加xAxis name值
  let xAxis = providerOptions.xAxis
  if (input.xName) {
    xAxis.forEach((value: any, i: number) => {
      value.name = input.xName[i]
      if (input.xSplitLine) {
        let splitLineObj = {
          splitLine: {
            show: input.xSplitLine[0] || false,
            lineStyle: {
              color: input.xSplitLine[1] || 'rgba(255,255,255,0.7)',
              type: input.xSplitLine[2] || 'solid'
            }
          }
        }
        Object.assign(value, splitLineObj)
      }
    });
  }
  return {
    yAxis, xAxis
  }
}
