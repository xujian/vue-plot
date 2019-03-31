declare module 'vue-chartlib' {
  import Vue from 'vue'
  export default Vue
 
  export class PaChart {
    props: any
    repaint (): void
  }

  export class ChartFactory {
    static make (
      name: String,
      options: any,
      layers?: any): PaChart
  }

  export mocks
}