export default function (props: any) {
  let areaStyle: any = undefined
  if (props.area === true) {
    areaStyle = {}
  } else if (props.area) {
    areaStyle = props.area
  }
  return props.data.map((d: any) => {
    let item: any = {
      name: d.name,
      stack: props.stack,
      smooth: props.smooth,
      areaStyle: areaStyle
    }
    if (props.accessories.marks) {
      if (props.accessories.marks.type === 'max-min') {
        item.markPoint = {
          data: [{
            type: 'max',
            name: '最大值'
          }, {
            type: 'min',
            name: '最小值'
          }]
        }
      }
    }
    return item
  })
}
