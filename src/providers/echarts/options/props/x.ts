export default function (props: any) {
  let x = props.x
  if (x === false) {
    return {
    }
  }
  let x1: any = {}
  if (x.constructor.name === 'Array') {
    x1 = {
      type: 'category',
      data: x
    }
  } else {
    x1 = {
      type: x.type || 'category'
    }
    if (x.type === 'catetory') {
      x1.data = x.data
    }
    if (x.label) {
      x1.axisLabel = {
        formatter: x.label
      }
    }
  }
  return {
    xAxis : [x1]
  }
}
