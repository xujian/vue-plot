/**
 * 用于表示图表中用到的颜色组
 * bar条, line-color
 * 组装到Styles内
 */
export default class Color {
  public value: string | string[] = ''
}

export class Gradient extends Color {
  public colors: string[] = []
  
  static from (input: string) {
    let gradient = new Gradient()
    input = input.replace(/^gradient\:/, '')
    gradient.colors = input.split(',')
    return gradient
  }
}