export default function (props: any) {
  if (props.x === false) {
    return {
      xAxis: false
    }
  }
  let x1: any = {}
  console.log('rules/x.ts---------------------', props.x.constructor.name)
  if (props.x.constructor.name === 'Array') {
    x1 = {
      type: 'category',
      data: props.x
    }
  } else {
    x1 = {
      type: props.x.type || 'category',
      data: props.x.data
    }
    if (props.x.label) {
      x1.axisLabel = {
        formatter: props.x.label
      }
    }
  }
  return {
    xAxis : [x1]
  }
}