export default function (props: any) {
  let areaStyle
  if (props.area === true) {
    areaStyle = {}
  } else if (props.area) {
    areaStyle = props.area
  }
  return {
    areaStyle
  }
}