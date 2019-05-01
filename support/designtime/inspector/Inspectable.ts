import PaChart from '@/core/chart'
import Prop from './Prop'
import PropDefs from './PropDefs'
import 'reflect-metadata'

export const INSPECTABLE_FIELD_NAME = '__inspectable__'
export const INSPECTABLE_METHOD_NAME = 'getInspectableProps'

declare type InspectableOptions = {
  label: string,
  readonly?: boolean,
  type?: any
}

function setInspectableForTarget (
  target: object, prop: string, options: InspectableOptions
) {
  // 给 target 内部设置一个 inspectable 队列
  let prototype = target as any
  console.log(
    '...setInspectableForTarget******',
    target,
    Reflect.get(target, INSPECTABLE_FIELD_NAME)
  )
  if (!Reflect.has(target, INSPECTABLE_FIELD_NAME)) {
    console.log('......Inspectable.set: no set yet******', target)
    Reflect.defineProperty(target, INSPECTABLE_FIELD_NAME, {
      value: []
    })
    Reflect.defineProperty(target, INSPECTABLE_METHOD_NAME, {
      value: function() {
        let control = target as any
        let props = control[INSPECTABLE_FIELD_NAME]
        return props.map((p: any) => {
          let value = Reflect.get(this, p.name)
          let prop = new Prop({
            name: p.name,
            value: value,
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
function Inspectable (options: {
  label: string,
  readonly?: boolean,
  type?: any
}) {
  return (
    target: object,
    propertyKey: string
  ) => {
    setInspectableForTarget(target, propertyKey, options)
  }
}

/**
 * 为 PaChart 设置 inspectable 属性
 */
Inspectable.set = (component: PaChart) => {
  console.log('Inspectable.set: component******', component)
  let props = component.props
  // 读取对于特定PaChart的属性定义
  Object.keys(props).forEach(prop => {
    let def = PropDefs.charts.find(d => d.name === prop)
    if (def) {
      setInspectableForTarget(component, prop, def.options)
    }
  })
}

export default Inspectable