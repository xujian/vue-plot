import { StyleRules } from '@/core/shared/styles'

/**
 * 属性类型用于定义属性面板输入模式
 */
namespace PropTypes {
  export class PropValueType {
  }

  /**
   * 尺寸
   */
  export class Dimension extends PropValueType {
    width: number | string | undefined
    height: number | string | undefined
    constructor (input: {
      width: number | string,
      height: number | string
    }) {
      super()
      this.width = input.width
      this.height = input.height
    }
  }

  /**
   * 位置
   */
  export class Position extends PropValueType {
    x: number | string
    y: number | string
    z?: number | string
    constructor (input: {x: number, y: number, z: number}) {
      super()
      this.x = input.x
      this.y = input.y
      this.z = input.z
    }
  }

  /**
   * 百分比
   */
  export class Percent extends PropValueType {
    number: number | string
    constructor (number: number | string) {
      super()
      if (typeof number === 'string') {
        number = parseInt(number, 10)
      }
      this.number = number
    }
  }

  /**
   * 数值范围
   */
  export class Range extends PropValueType {
    value?: [number, number]
    constructor (input: [number, number] | [string, string]) {
      super()
      console.log('Range________________________________________________________', input)
      this.value = input ?
        [parseInt(input[0] + '', 10), parseInt(input[1] + '', 10)]
        : undefined
    }
  }

  /**
   * 纯Json数据
   */
  export class Json extends PropValueType {
    value: Object
    constructor (input: Object) {
      super()
      this.value = input
    }
  }

  /**
   * 样式集
   */
  export class Styles extends PropValueType {
    value: StyleRules
    constructor (input: StyleRules) {
      super()
      this.value = input
    }
  }

  /**
   * 设定主题
   */
  export class Theme extends PropValueType {
    value: string
    constructor (input: string) {
      super()
      this.value = input
    }
  }

  /**
   * 颜色序列
   */
  export class Colors extends PropValueType {
    value?: string[]
    constructor (input: string[]) {
      super()
      this.value = input
    }
  }
}

export default PropTypes