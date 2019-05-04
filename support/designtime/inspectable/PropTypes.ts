namespace PropTypes {
  export class PropValueType {

  }

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

  export class Range extends PropValueType {
    value: [number, number]
    constructor (input: [number, number] | [string, string]) {
      super()
      console.log('Range________________________________________________________', input)
      this.value = [parseInt(input[0] + '', 10), parseInt(input[1] + '', 10)]
    }
  }

  export class Json extends PropValueType {
    value: Object
    constructor (input: Object) {
      super()
      console.log('Json________________________________________________________', input)
      this.value = input
    }
  }
}

export default PropTypes