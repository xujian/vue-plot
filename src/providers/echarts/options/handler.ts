let requires: {[name: string]: any} = 
  require.context('./props/', true, /.ts$/)
let rules: {[name: string]: any} = {}
requires.keys().forEach((p: string) => {
  let name = (p.match(/\.\/(\w+)\.ts$/) || ['', 'null'])[1]
  rules[name] = (requires as (p: string) => any)(p)['default']
})
let accessories: {[name: string]: any} = {}
requires = require.context('./accessories/', true, /.ts$/)
requires.keys().forEach((p: string) => {
  let name = (p.match(/\.\/(\w+)\.ts$/) || ['', 'null'])[1]
  accessories[name] = (requires as (p: string) => any)(p)['default']
})

console.log('Handler.ts-------------------rules, accessories', rules, accessories)

/**
 * 将 chart props 转换为 echart 原生配置项
 */
const handler = {
  translate (key: string, props: any): any {
    let rule = rules[key]
    if (rule) {
      if (typeof rule === 'function') {
        return rule.call(this, props)
      } else {
        return {}
      }
    }
  },
  take (key: string, props: any, providerOptions: any): any {
    let tag = accessories[key]
    if (tag) {
      if (typeof tag === 'function') {
        return tag.call(this, props, providerOptions)
      } else {
        return {}
      }
    }
  }
}

export default handler
