import { Vue, Component } from 'vue-property-decorator'
import Prop from '../Prop'

@Component({
  props: {
    value: Prop
  },
  template: ''
})
export default class PropInput extends Vue {
  
  private __prop: any

  get prop () {
    return this.__prop = Reflect.get(this, 'value')
  }

  set prop (v) {
    console.log('PropInput<><>><><><><><><><>', v)
    this.__prop = v
  }

  created () {
    this.__prop = Reflect.get(this, 'value')
  }

  emitChange (data: any) {
    this.$emit('change', data)
  }
}