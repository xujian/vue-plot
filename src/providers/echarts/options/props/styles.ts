import Color from '../../../../core/shared/styles/Color'

export default (props: any) => {
  if (!props.styles) return {}
  let styles: any = props.styles.rules || {}
  let output: any = {}
  if (styles.colors) {
    output.color = styles.colors.map(
      (c: Color) => c.value
    )
  }
  if (styles.background) {
    output.backgroundColor = styles.background
  }
  if (styles.label) {
    output.xAxis = [{
      axisLabel: {
        rotate: styles.label.rotate,
        fontSize: styles.label.fontSize
      }
    }]
  }
  if (styles.canvas) {
    if (styles.canvas.margin) {
      let m = styles.canvas.margin
      output.grid = {
        top: m[0],
        right: m[1],
        bottom: m[2],
        left: m[3],
      }
    }
  }
  return output
}
