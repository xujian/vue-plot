export default (props: any, providerOptions: any) => {
  let legend: any = props.legend
  let aligns: any = {
    right:  {
      right: '10%'
    },
    left: {
      left: '10%'
    }
  }
  let result = aligns[legend.align]
  result.data = legend.data
  console.log('legend.ts_______________________', result)
  providerOptions.legend = result
}