import Color, { Gradient } from './Color'

export default class Styles {
  colors?: string | string[] | Color | Color[]
  background?: string | {}
  border?: string | {}

  static create (input: any): Styles {
    let styles = new Styles()
    if ('string' === typeof input) {
      if (input.startsWith('gradient:')) {
        styles.colors = Gradient.from(input)
      } else {
        styles.colors = [input]
      }
    } else {
      Object.assign(styles, input)
    }
    return styles
  }
}
