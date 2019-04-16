export default function (input: any) {
  let output = {}
  if (input === false) {
    output = {
      show: false
    }
  } else {
    if (Array.isArray(input)) {
      output = {
        type: 'value',
        data: input
      }
    }
  }
  return output
}
