let requires: {[name: string]: any} = 
  require.context('./rules/', true, /.ts$/)
let rules: {[name: string]: any} = {}
requires.keys().forEach((p: string) => {
  let name = (p.match(/\.\/(\w+)\.ts$/) || ['', 'null'])[1]
  rules[name] = requires(p)['default']
})

console.log('Handler.ts-------------------rules,', rules)

/**
 * 将 chart props 转换为
 */
const handler = {
  do (key: string, props: any): any {
    let rule = rules[key]
    if (rule) {
      if (typeof rule === 'function') {
        return rule.call(this, props)
      } else {
        return {}
      }
    }
  }
}

export default handler
