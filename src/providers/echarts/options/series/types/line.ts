export default function (props: any) {
  return props.data.map((d: any) => {
    let item: any = {
      name: d.name,
      stack: props.stack,
      smooth: props.smooth
    }
    return item
  })
}
