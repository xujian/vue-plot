/**
 * 读取某位置下所有文件
 * 使用 require.context
 * @param dir 目录位置
 */
function pack (dir: string): {
    [key: string]: any
  } {
  let result: { [name: string]: any } = {}
  let requires = require.context(dir, true, /.ts$/)
  requires.keys().forEach((p: string) => {
    let name = (p.match(/\.\/(\w+)\.ts$/) || ['', 'null'])[1]
    result[name] = requires(p)['default']
  })
  return result
}

export default pack