export default function (rules: any) {
  let result: {[key: string]: any} = {}
  let line = rules.line
  if (typeof line === 'string') {
    if ('dotted,dashed'.split(',').includes(line)) {
      result.type = line
    }
  } else {

  }
  return {
    lineStyle: result
  }
}
