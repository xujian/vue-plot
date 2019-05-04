import Prop from './Prop'
import 'reflect-metadata'

export const INSPECTABLE_FIELD_NAME = '__inspectable__'
export const INSPECTABLE_METHOD_NAME = 'getInspectableProps'

declare type InspectableOptions = {
  label: string,
  readonly?: boolean,
  type?: any,
  default?: any
}

function setInspectableForTarget (
  target: object, prop: string, options: InspectableOptions
) {
  // 给 target 内部设置一个 inspectable 队列
  if (!Reflect.has(target, INSPECTABLE_FIELD_NAME)) {
    Reflect.defineProperty(target, INSPECTABLE_FIELD_NAME, {
      value: []
    })
    Reflect.defineProperty(target, INSPECTABLE_METHOD_NAME, {
      value: function() {
        let control = target
        let props = Reflect.get(control, INSPECTABLE_FIELD_NAME)
        console.log('INspectable_______all_props___', props, control)
        return props.map((p: any) => {
          let value = Reflect.get(this, p.name)
          let prop = new Prop({
            name: p.name,
            value: value || p.default,
            default: p.default,
            label: p.label,
            readonly: p.readonly,
            type: p.type
          })
          return prop
        })
      }
    })
  }
  let inspected = {
    name: prop,
    ...options
  }
  Reflect.defineMetadata
  // Reflect.defineMetadata('proptype',
  //   PropTypes.Dimension, inspected)
  let insp = Reflect.get(target, INSPECTABLE_FIELD_NAME)
  insp.push(inspected)
  Reflect.set(target, INSPECTABLE_FIELD_NAME, insp)
}

/**
 * 使属性项可以在属性面板编辑
 */
function Inspectable (options: InspectableOptions) {
  return (
    target: object,
    key: string
  ) => {
    setInspectableForTarget(target, key, options)
  }
}

export default Inspectable