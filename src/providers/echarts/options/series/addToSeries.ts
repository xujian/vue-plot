let data: string[] = ['markLine']

export default
(series: any,options: any): any=>{
  data.map((val: any)=>{
    if(options[val]){
      series[0][val] = options[val]
      Reflect.deleteProperty(options,val)
    }
  })
  return series
}
