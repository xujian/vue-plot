import Vue from 'vue'
import { Prop, Component } from 'vue-property-decorator'
import Styles from '../../core/shared/styles'
import PaChart from '../chart'
import { PaMap } from '@/charts/map'

declare type AccessoryHost = PaChart | PaMap | null

/**
 * Base class for chart accessories
 */
@Component({template: '<div></div>'})
export default class PaAccessory extends Vue {
  private __parent: AccessoryHost = null

  @Prop({
    default: 'dark'
  })
  theme: string | undefined

  @Prop(Object)
  styles: Styles | undefined

  get props () {
    return this.$props
  }

  get parent () {
    return this.__parent
  }

  set parent(parent: AccessoryHost) {
    this.__parent = parent
  }

  public apply (): any {
    return null
  }
}
