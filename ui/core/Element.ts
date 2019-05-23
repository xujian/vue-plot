import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({})
export default class PaElement extends Vue {
  public uuid: string = ''
  public type: string = ''
}
