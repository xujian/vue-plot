import Styles, { StyleRules } from './Styles'
import { Props } from '@/core/chart';

let StyleManager = {
  /**
   * 处理props里已经layers里定义的styles属性
   * 给styles编号以独立应用到各个sereies
   * @param props 
   */
  make (props: Props): Styles[] {
    let result: Styles[] = []
    let styles: Styles = Styles.create(props.styles || {})
    let StylesArray = Array(props.data.length).fill(styles)
    result.push(...StylesArray)
    props.layers.forEach((l: any) => {
      let s: Styles = Styles.create(l.styles)
      result.push(s)
    })
    return result
  }
}

export {
  StyleRules,
  StyleManager
}

export default Styles