import Color, { Gradient } from './Color'

export type StyleRules = {
  canvas?: {}
  colors?: string | string[] | Color | Color[]
  background?: string | {}
  border?: string | {}
  label?: string | {}
}
/**
 *  将有关样式的选项集中在Styles里
 *  colors
 *  backgrounds
 *  borders
 */
export default class Styles {

  rules: StyleRules = {}

  static create (input: StyleRules | string): Styles {
    let styles = new Styles()
    if ('string' === typeof input) {
      styles.rules = {
        colors: Color.from(input)
      }
    } else {
      styles.rules = input
    }
    return styles
  }
}
