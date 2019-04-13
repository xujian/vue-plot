import Color, { Gradient } from './Color'

export type StyleRules = {
  canvas?: {}
  colors?: any[]
  background?: string | {}
  border?: string | {}
  label?: string | {}
  title?: {},
}
/**
 *  将有关样式的选项集中在styles里
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
        colors: [Color.from(input)]
      }
    } else {
      if (input.colors) {
        styles.rules.colors = []
        for (let c = 0; c < input.colors.length; c ++) {
          let color = input.colors[c]
          if (typeof color === 'string') {
            color = Color.from(color)
          }
          styles.rules.colors.push(color)
        }
      }
      styles.rules = {
        ...input,
        ...styles.rules
      }
    }
    return styles
  }
}
