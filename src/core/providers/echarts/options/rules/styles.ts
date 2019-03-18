export default (props: any) => {
  let styles: any = props.styles || {}
  let output: any = {}
  if (styles.colors) {
    output.color = styles.colors
  }
  if (styles.background) {
    output.backgroundColor = styles.background
  }
  return output
}
