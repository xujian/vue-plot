export default function (props: any) {
  return props.data.map((d: any) => ({
    name: d.name,
    data: d.value
  }))
}
