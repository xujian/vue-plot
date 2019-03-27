import mocks from '../../mocks'

export default class Drawer {
  static get (input: any): Promise<any[]> {
    return new Promise((resolve, reject) => {
      if (input.constructor.name === 'Array') {
        resolve(input)
      } else {
        const matched = input.match(/(\w+)\:([\w\/\-]+)/)
        if (matched) {
          const [, method, path] = matched
          if (method === 'mocks') {
            resolve(Reflect.get(mocks, path) || [])
          }
        } else {
          resolve([])
        }
      }
    })
  }
}
