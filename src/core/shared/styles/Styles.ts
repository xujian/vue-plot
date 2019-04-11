import Color, { Gradient } from './Color'

/**
 *  将有关样式的选项集中在Styles里
 *  colors
 *  backgrounds
 *  borders
 */
export default class Styles {
  colors?: string | string[] | Color | Color[]
  background?: string | {}
  border?: string | {}
  label?: string | {}

  static create (input: any): Styles {
    let styles = new Styles()
    if ('string' === typeof input) {
      styles = {
        colors: Color.from(input)
      }
    } else {
      if (input.colors) {
        styles.colors = Color.from(input.colors)
      }
      if (input.label) {
        styles.label = input.label
      }
    }
    return styles
  }
}
