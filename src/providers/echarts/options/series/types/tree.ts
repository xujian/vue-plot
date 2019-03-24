export default function (props: any) {
  return props.data.map((d: any) => ({
    label: {
      normal: {
        position: 'left',
        verticalAlign: 'middle',
        align: 'right',
        fontSize: 9,
        color: '#fff'
      }
    }
  }))
}