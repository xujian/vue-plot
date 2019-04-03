/** rewrite https://github.com/kaorun343/vue-property-decorator */
/// <reference types='reflect-metadata'/>
import Vue, { PropOptions } from 'vue'
import 'reflect-metadata'
import { createDecorator } from 'vue-class-component'

/**
 * Props of Vue component
 * add validator to determin where a prop is assigned
 */
export default function Prop(options: PropOptions): PropertyDecorator {
  return (target: Object, key: string | symbol) => {
    options.type = Reflect.getMetadata('design:type', target, key)
    options.validator = (value: any) => {
      let chart = target
      console.log('____________My own prop decorator: validator', key, value)
      return true
    }
    createDecorator((componentOptions, k) => {
      (componentOptions.props || (componentOptions.props = {}) as any)[k] = options
    })(target as Vue, key as string)
  }
}
