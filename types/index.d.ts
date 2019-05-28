import { VueClass } from 'vue-class-component/lib/declarations';

declare module 'vue-chartlib' {
  import Vue from 'vue'
  export default Vue

  export class PaComponent {
    $chartlib: VueClass
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
}
