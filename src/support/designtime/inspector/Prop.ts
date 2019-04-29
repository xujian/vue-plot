import PropDefs from './PropDefs'
import PropTypes from './PropTypes';
/**
 * Base for Prop of Control other Classes
 */
export default class Prop<T extends PropTypes.PropValueType> {
  name: string = ''
  label: string | undefined
  readonly: boolean = false
  type: any = String
  private __value: T | null = null

  get value (): T | null {
    return this.type
      ? new this.type(this.__value)
      : this.__value
  }

  set value (v: T | null) {
    this.__value = v as T
  }

  constructor (input: {
    name: string,
    value: T,
    label?: string,
    readonly?: boolean,
    type?: string
  }) {
    Object.assign(this, input)
  }
}
