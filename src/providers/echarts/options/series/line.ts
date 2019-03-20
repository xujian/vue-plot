export default function (props: any) {
  let areaStyle: any = undefined
  if (props.area === true) {
    areaStyle = {}
  } else if (props.area) {
    areaStyle = props.area
  }
  return props.data.map((d: any) => ({
    name: d.name,
    stack: props.stack,
    smooth: props.smooth,
    areaStyle: areaStyle
  }))
}
