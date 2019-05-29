export default function (series: any[], props: any, options: any) {
  let canPosition=props.canPosition
  let item: any = {
    left: canPosition.left  || '5%',
    right: canPosition.right  ||'35%',
    top:  canPosition.top  ||'10%',
    bottom:  canPosition.bottom  ||'10%',
    sort:  props.sort ||'ascending',
    maxSize:'50%',
    label: {
      show: true,
    },
  }
  function setNameValue (data: string,v: any): any {
    if(data==='name-value'){
      return v.name+'\n{white|'+v.value+ '}'
    }else if(data==='name'){
      return function (){
        return  v.name
      }
    }else if(data==='value'){
      return function (){
        return  v.value
      }
    }
  }
  function getMarkerLineData (data: any[]): any {
    data.map((v: any,i: number)=>{
      let lineData: any={}
      lineData.position=i%2?'left':'right'
      lineData.formatter=setNameValue(props.nameOrValue,v)
      lineData.rich={
        white:{
          color:'#fff',
          align:'center',
          fontSize:20
        }
      }
      Object.assign(v,{label:lineData})
    })
  }
  getMarkerLineData (series[0].data)
  series.forEach((s: any) => {
    Object.assign(s, item)
  })
  return series
}
