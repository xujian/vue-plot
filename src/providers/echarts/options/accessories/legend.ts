export default (props: any, providerOptions: any) => {
  let legend: any = props.accessories.legend
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
  providerOptions.legend = result
}