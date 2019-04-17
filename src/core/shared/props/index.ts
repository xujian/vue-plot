import x from './x'
import y from './y'

let defs: {[key: string]: any} = {
  x: x,
  y: y
}

/**
 * 将简写的props转为标准格式
 * 将x=['A', 'B', 'C', 'D', 'E'] 格式化为
 * x={data: ['A', 'B', 'C', 'D', 'E']}
 * @param prop 
 * @param name 
 */
export default function normalizeProps (prop: any, name: string) {
  if (Reflect.has(defs, name)) {
    return defs[name](prop)
  } else {
    return prop
  }
}