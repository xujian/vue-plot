/**
 * 表现X或Y坐标轴
 */
export default class Axis {
  name: string
  label: string
  data: string[] | number[] | undefined

  constructor (input: {
    name: string,
    label?: string
    data?: string[] | number[]
  }) {
    this.name = input.name || ''
    this.label = input.label || ''
    this.data = input.data || []
  }

}
