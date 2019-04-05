/**
 * 用于表示图表中用到的颜色组
 * bar条, line-color
 * 组装到Styles内
 */
export default class Color {
  public value: string | string[] = ''

  static from (input: string | string[]): Color | Color[] {
    if(typeof input === 'string') {
      input = [input]
    }
    let colors = input.map(x => {
      if (x.startsWith('gradient:')) {
        return Gradient.from(x)
      } else {
        let color = new Color()
        color.value = x
        return color
      }
    })
    return colors
  }
}

export class Gradient extends Color {
  public stops: string[] = []
  
  static from (input: string): Color {
    let gradient = new Gradient()
    input = input.replace(/^gradient\:/, '')
    gradient.stops = input.split(',')
    return gradient
  }
}