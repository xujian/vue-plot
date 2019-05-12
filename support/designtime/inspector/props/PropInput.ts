import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  template: ''
})
export default class PropInput extends Vue {

  @Prop({})
  value: Prop<any>
  
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

  emitChange (data: any) {
    this.$emit('change', data)
  }
}