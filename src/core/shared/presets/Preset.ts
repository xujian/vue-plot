export default class Preset {
  /**
   * name of preset
   * using in PaChart preset= attribute
   */
  public name: string = 'preset'
  public title: string = '预设'
  public props: object = {
  }
  /**
   * parent preset
   */
  public parent: string | undefined = void 0
}