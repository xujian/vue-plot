export default (props: any) => {
  let output: any = {} 
  let t = props.symbol.constructor.name
  if(t === 'String') {
    output.symbol = props.symbol
  }
  if (t === 'Number') {
    output.symbol = 'circle'
    output.symbolSize = props.symbol
  }
  if (t === 'Object') {
    output.symbol = props.symbol.shape
    output.symbol = props.symbol.size
  }
  return output
}