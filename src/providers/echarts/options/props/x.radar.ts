export default function (props: any) {
  let x = props.x
  let radar: any = {}
  if (Array.isArray(x)) {
    x =  {
      data: x
    }
  }
  radar.indicator = x.data.map((d: any) => ({
      name: d,
      ...props.y.max && { max: props.y.max }
    }))
  return {
    radar
  }
}
