export default (props: any) => {
  if (!props.styles) return {}
  let styles: any = props.styles.main.rules || {}
  let output: any = {}
  if (styles.background) {
    output.backgroundColor = styles.background
  }
  if (styles.x) {
    output.xAxis = [{
      axisLabel: {
        rotate: styles.x.rotate,  
        fontSize: styles.x.fontSize
      }
    }]
    if (styles.x.gap === false) {
      output.xAxis[0].boundaryGap = false
    }
  }
  if (styles.canvas) {
    if (styles.canvas.grid) {
      let grid = styles.canvas.grid
      output.grid = grid
    }
  }
  if (styles.title) {
    output.title = {
      text: props.title,
    }
    if (styles.title.position === 'center') {
      output.title.left = 'center'
      output.title.top = 'center'
      output.title.textStyle = {
        align: 'center'
      }
    }
    if (styles.title.left) {
      output.title.left = styles.title.left
    }
  }
  return output
}
