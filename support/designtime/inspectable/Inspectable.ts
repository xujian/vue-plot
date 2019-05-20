import Prop from './Prop'
import 'reflect-metadata'

export const INSPECTABLE_FIELD_NAME = '__inspectable__'
export const INSPECTABLE_METHOD_NAME = 'getInspectableProps'

declare type InspectableOptions = {
  label: string,
  readonly?: boolean,
  type?: any,
  category?: string,
  order?: number,
  default?: any
}

function setInspectableForTarget (
  target: any, prop: string, options: InspectableOptions
) {
  // 给 target 内部设置一个 inspectable 队列
  console.log('INSPECTABLE_________________________SET', prop, target)
  Inspectable.set(target, prop, options)
}

/**
 * 使属性项可以在属性面板编辑
 */
function Inspectable (options: InspectableOptions) {
  return (target: any, key: string) => {
    setInspectableForTarget(target, key, options)
  }
}

type InspectableBook = {
  [key: string]: Prop<any>[]
}

let book: InspectableBook = {}

Inspectable.set = function (control: any, field: string, options: InspectableOptions) {
  let __class = control.constructor.name
  if (!Reflect.has(book, __class)) {
    book[__class] = []
  }
  let props: Prop<any>[] = book[__class] || []
  let value = Reflect.get(this, field)
  props.push(new Prop({
    name: field,
    value: value,
    default: options.default,
    label: options.label,
    category: options.category,
    readonly: options.readonly,
    order: options.order,
    type: options.type
  }))
  book[__class] = props
}

Inspectable.get = function (control: any): Prop<any>[] {
  let result: Prop<any>[] = []
  let proto = control.__proto__
  // 沿原型链向上查找
  while (proto.constructor.name.startsWith('Pa')) {
    let up = book[proto.constructor.name]
    if (up) {
      result = result.concat(up)
    }
    proto = proto.__proto__
  }
  result.forEach((p: Prop<any>) => {
    p.value = control[p.name]
  })
  return result
}

export default Inspectable
