import Color, { Gradient } from '../../../../../core/shared/styles/Color'
import gradient from '../../../helpers/gradient'

export default function (props: any,index: number) {
  let areaStyle
  if (props.area === true) {
    areaStyle = {}
  } else if (props.area) {
    // 解决多个面积图的情况
    const area = props.area[index]||props.area[0]
    areaStyle = {
      normal: {
        ...area.color && {
          color: gradient.make(Gradient.from(area.color))
        }
      }
    }
  }
  return {
    areaStyle
  }
}