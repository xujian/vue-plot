import { Vue, Component, Prop as PropDecorator, Watch } from 'vue-property-decorator'
import Prop from '../../inspectable/Prop'

@Component({
  template: ''
})
export default class PropInput extends Vue {

  @PropDecorator({})
  value?: Prop<any>
  
  get prop () {
    return this.value
  }

  set prop (v) {
    this.emitChange({
      ...this.prop,
      value: v
    })
  }

  commit (value: any) {
    this.emitChange({
      ...this.prop,
      value: value
    })
  }

  created () {
    this.__prop = Reflect.get(this, 'value')
  }

  emitChange (data: any) {
    this.$emit('change', data)
  }
}