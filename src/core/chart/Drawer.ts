import mocks from '../../mocks'

export default class Drawer {
  static get (url: string): Promise<any[]> {
    const resolved = url.match(/(\w+)\:([\w\/\-]+)/)
    if (resolved) {
      const [, method, path] = resolved
      if (method === 'mocks') {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(mocks[path])
          })
        })
      }
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([])
      })
    })
  }
}
