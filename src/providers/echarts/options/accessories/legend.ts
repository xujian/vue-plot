export default (props: any, providerOptions: any) => {
  let input: any = props.accessories.legend
  let output: any = {}
  'top,right,bottom'.split(',').forEach(p => {
    if (Reflect.has(input, p)) {
      output[p] = input[p]
    }
  })
  let aligns: any = {
    right:  {
      right: '10%'
    },
    left: {
      left: '10%'
    }
  }
  output = { ...output, ...aligns[input.align] }
  if (input.data) {
    output.data = input.data
  }
  if (input.direction) {
    output.orient = input.direction
  }
  return {
    legend: output
  }
}
