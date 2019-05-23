import echarts from 'echarts'
export default function (series: any[], props: any, options: any) {
  let changegaugeColor=props.gaugeGradientColor

  series.forEach((s: any, i: number) => {
    let item: any = {
      data: [{ value: props.data[i], name: props.titleName[i] }],
      center: props.center[i],
      detail: { 
        formatter: props.data[i] + '%',
        color:'#fff',
        offsetCenter:[0,'-55%'],
      },
      radius: props.radius[i]+'%',
      startAngle:props.startEndAngle[i][0],
      endAngle:props.startEndAngle[i][1],
      title: {
        color: '#fff',
        fontSize: 12,
        offsetCenter:[0,0],
      },
      splitLine:{
        length:10,
      },
      pointer:{
        length:'50%',
        width:5
      },
      axisTick:{
        length:5,
        lineStyle:{
          color:'#454859'
        }
      },
      axisLine:{
        lineStyle: {
          width: 5,
          // color: [
          //   [
          //     0.98, new echarts.graphic.LinearGradient(
          //       0, 0, 1, 0, [{
          //         offset: 0,
          //         color: changegaugeColor[0]||'#61E9EC'
          //       },
          //       {
          //         offset: 0.5,
          //         color: changegaugeColor[1]||'#3B97C7',
          //       },
          //       {
          //         offset:1,
          //         color: changegaugeColor[2]||'#065994'
          //       }
          //       ]
          //     )
          //   ]
          // ]
        }
      }
    };
    Object.assign(s, item);
  });
  return series;
}
