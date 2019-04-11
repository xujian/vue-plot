import Color from '../../../../core/shared/styles/Color'

export default (props: any) => {
  let styles: any = props.styles || {}
  let output: any = {}
  if (styles.colors) {
    output.color = styles.colors.map((c: Color) => c.value)
  }
  if (styles.background) {
    output.backgroundColor = styles.background
  }
  if (styles.label) {
    output.xAxis = [{
      axisLabel: {
        rotate: styles.label.rotate
      }
    }]
  }
  return output
}
