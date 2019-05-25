import Vue from 'vue'

/**
 * Base of PaChart/PaElement
 */
export default class PaComponent extends Vue {
  public uuid: string = ''
  public type: string = ''
  public subType: string = ''
}
