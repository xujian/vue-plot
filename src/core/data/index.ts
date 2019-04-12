import * as GenericTypes from './GenericTypes'
import * as ChartDataTypes from './ChartDataTypes'
import mocks from '../../mocks'

function parseUrl (input: string): {
  method: string | undefined,
  path: string | undefined
} {
  const matched = input.match(/(\w+)\:([\w\/\-]+)/)
  if (matched) {
    const [, method, path] = matched
    return { method, path }
  } else {
    return {
      method: undefined,
      path: undefined
    }
  }
}

function __load (url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const { method, path } = parseUrl(url)
    if (!method || !path) {
      resolve([])
    } else {
      if (method === 'mocks') {
        let data = loadFromMocks(path)
        resolve(data)
      }
    }
  })
}

function parseDataSet (dataset: any[]): any {
  let x = dataset[0].slice(1),
    d = dataset.slice(1).map(item => item.slice(1)),
    legends = dataset.slice(1).map(item => item[0])
  return({ data: d, x, legends})
}

function loadFromMocks (path: string): any[] {
  return Reflect.get(mocks, path)
}

/**
 * 负责请求远程API数据
 * 可处理 dataset 格式的数据并解释为X轴data以及legends
 */
const DataManager: any = {
  load (props: any): Promise<{}> {
    return new Promise((resolve, reject) => {
      if (props.dataset) {
        const dataset = props.dataset
        if (dataset.constructor.name === 'Array') {
          let props = parseDataSet(dataset)
          resolve(props) // data非字符串直接返回
        } else {
          __load(dataset).then(d => {
            let props = parseDataSet(d)
            resolve(props)
          })
        }
      } else {
        let data = props.data
        if (data.constructor.name === 'Array') {
          resolve({ data }) // data非字符串直接返回
        } else {
          __load(data).then(d => {
            resolve(props)
          })
        }
      }
    })
  }
}

export {
  GenericTypes,
  ChartDataTypes,
  DataManager
}