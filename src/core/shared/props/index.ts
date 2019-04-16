import x from './x'
import y from './y'

let defs: {[key: string]: any} = {
  x: x,
  y: y
}

/**
 * 将props转为完整格式 至少是可merge的格式
 * 将x=['A', 'B', 'C', 'D', 'E'] 格式化为
 * x={data: ['A', 'B', 'C', 'D', 'E']}
 * @param prop 
 * @param name 
 */
export default function normalizeProps (prop: any, name: string) {
  if (Reflect.has(defs, name)) {
    console.log('normalizeProps_________________________________', name)
    return defs[name](prop)
  } else {
    console.log('normalizeProps___________________________////______', name)
    return prop
  }
}