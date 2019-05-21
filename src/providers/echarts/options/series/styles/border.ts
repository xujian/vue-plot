export default function (rules: any) {
  let result: {[key: string]: any} = {}
  const border = rules.border
  if (border === true) {
    result.itemStyle = {
      normal: {
        borderColor: '#000'
      }
    }
  }
  return {
    ...result
  }
}
