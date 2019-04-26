import Color, { Gradient } from '../../../../../core/shared/styles/Color'
import gradient from '../../../helpers/gradient'

export default function (props: any) {
  let areaStyle
  if (props.area === true) {
    areaStyle = {}
  } else if (props.area) {
    const area = props.area
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