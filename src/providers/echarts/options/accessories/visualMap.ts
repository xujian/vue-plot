export default (props: any, options: any) => {
  let input: any = props.accessories.visualMap
  let addOPtions={
    animationEasing: 'elasticOut',
    animationEasingUpdate: 'elasticOut',
    animationDelay: function (idx: number) {
      return idx * 20;
    },
    animationDelayUpdate: function (idx: number) {
      return idx * 20;
    }
  }
  let setYAxis={
    axisLabel: {
      // textStyle: {
      //   color: '#4a657a'
      // }  
    },
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false
    }
  }
  Object.assign(options.xAxis[0],{axisTick:{show:false}})
  Object.assign(options.yAxis[0],setYAxis)
  Object.assign(options,addOPtions)
  let inRangeColor=input.color
  input.inRange=inRangeColor&&(inRangeColor.length>0)?{ color:inRangeColor}:{color:props.colors}
  input.max=Math.max(...props.data[0])/2
  return {
    visualMap: input
  }
}
