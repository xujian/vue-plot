export default function (input: any) {
  let output = {}
  if (input === false) {
    output = {
      show: false
    }
  } else {
    if (Array.isArray(input)) {
      output = {
        type: 'category',
        data: input
      }
    } else {
      output = input
    }
  }
  return output
}
