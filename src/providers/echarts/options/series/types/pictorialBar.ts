export default function (series: any[], props: any, options: any) {
  let item: any = {
    barCategoryGap: '0%',
    label: {
      normal: {
        show: true,
        position: 'top'
      }
    },
    symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
  }
  if(props.symbol){
    let symbolStyle: any = {}
    let symbolType = ['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none']
    if(symbolType.indexOf(props.symbol) === -1){
      symbolStyle.symbol = props.symbol
    }else{
      symbolStyle.symbol = props.symbol,
      symbolStyle.symbolRepeat = 'fixed',
      symbolStyle.symbolClip = true,
      symbolStyle.symbolSize = [10,20]
    }
    Object.assign(item,symbolStyle)
  }
  series.forEach((s: any) => {
    Object.assign(s, item)
  })
  return series
}
