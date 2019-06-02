import Styles, { StyleRules, StyleSet } from './Styles'
import { Props } from '../../../../src/core/chart'

let StyleManager = {
  /**
   * 处理props里已经layers里定义的styles属性
   * 给styles编号以独立应用到各个sereies
   * @param props
   */
  make (props: Props): StyleSet {
    let result: StyleSet = new StyleSet()
    let styles: Styles = Styles.create(props.styles || {})
    let StylesArray = Array(props.data.length).fill(styles)
    result.add(StylesArray)
    props.layers.forEach((l: any) => {
      styles = Styles.create(l.styles || {})
      result.add(styles)
    })
    return result
  }
}

export {
  StyleRules,
  StyleManager
}

export default Styles
