import PropTypes from './PropTypes'
/**
 * Base for Prop of Control other Classes
 */
export default class Prop<T extends PropTypes.PropValueType> {
  name: string = ''
  label: string | undefined
  description: string = ''
  category: string = 'props' // 显示在特定的tab内
  readonly: boolean = false
  type: any = String
  order: number = 999
  default!: T 
  private __value: T | undefined = undefined

  get value () {
    return this.__value
  }

  set value (v: any) {
    if (false === v instanceof this.type) {
      this.__value = new this.type(v)
    } else {
      this.__value = v
    }
  }

  valueOf () {
    return this.__value ? this.__value.valueOf(): undefined
  }

  constructor (input: {
    name: string,
    value: T,
    default?: T
    order?: number,
    category?: string, 
    label?: string,
    readonly?: boolean,
    type?: string
  }) {
    console.log('Prop.ts_____________________________________________', input)
    Object.assign(this, input)
    this.category =  input.category || 'props'
    this.order =  input.order || 999
  }
}
