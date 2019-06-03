import mocks from '../src/mocks'
import Chartlib from '../src'

export default Chartlib

export class PaComponent {
}

export class PaChart {
  uuid: string
  type: string
  name: string
  props: any
  repaint (): void
}

export class ChartFactory {
  static make (input: {
    uuid?: string,
    name: string,
    props: { [key: string]: any, },
    layers?: any[],
  }): PaChart
}

export {
  mocks
}
