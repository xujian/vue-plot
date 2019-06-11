import PaElement from '../../core/Element'
import { Component, Prop } from 'vue-property-decorator'
import debounce from 'lodash.debounce'
import './marquee.less'

@Component({
  template: `
  <div
    :style="listParentStyle"
    class="vue-swimlane"
    @mouseenter="throttleToggleAnimation"
    @mouseleave="throttleToggleAnimation"
  >
   <p class="marquee-title" :style="titleStyle">{{title}}</p>
    <ul :style="listStyle">
      <li v-for="(word, index) in data" :style="itemStyle" :key="index" v-html="word"/>
    </ul>
  </div>
  `
})
export default class PaMarquee extends PaElement {

  fontSize: number = 16
  listTop: number = 0
  moveUp: boolean = true
  resetOnNext: boolean = false
  padding: number = 9
  isPaused: boolean = false
  updatetimeoutId: any = null


  // string[] - required: Array of tags or data to be used on display.
  @Prop({
    type: Array,
    default: []
  })
  data!: any[]

  // int (Default: 1): Number of rows always visible at a time.
  @Prop({
    type: Number,
    default: 1
  })
  rows!: number

  // float (Default: 1): Font size scaling relative to 16px.
  @Prop({
    type: Number,
    default: 1
  })
  scale?: number

  // float in ms (Default: 500): Animation duration for rows.
  @Prop({
    type: Number,
    default: 500
  })
  transitionDuration?: number

  // float in ms (Default: 250): Delays between each animation duration.
  @Prop({
    type: Number,
    default: 250
  })
  transitionDelay?: number

  // string (Default: ease-out): css transition name.
  @Prop({
    type: String,
    default: 'ease-in'
  })
  transition?: string

  // If true, list starts from the top after completion.
  @Prop({
    type: Boolean,
    default: false
  })
  circular?: boolean

  // bool (Default: false): If true, animation will pause on mouse hover.
  @Prop({
    type: Boolean,
    default: true
  })
  pauseOnHover?: boolean

  // string, show title of the data, default 实时注册
  @Prop({
    type: String,
    default: '实时注册'
  })
  title?: string


  get transitionDelayNormalized() {
    return Math.abs(this.transitionDelay || 250);
  }

  get transitionDurationNormalized() {
    return Math.abs(this.transitionDuration || 250);
  }

  get itemScaleNormalized() {
    return Math.abs(this.scale || 1);
  }

  get itemRowsNormalized() {
    return this.rows > this.data.length
      ? this.data.length
      : Math.abs(this.rows || 1);
  }

  get itemHeight() {
    return this.fontSize * this.itemScaleNormalized + this.padding;
  }

  get itemStyle() {
    return `font-size: ${this.itemHeight -
      this.padding / 2}px!important; line-height: ${
      this.itemHeight
      }px!important; white-space: pre;`
  }

  get titleStyle() {
    return `font-size: ${this.itemHeight -
      this.padding / 2 + 2}px!important; line-height: ${
      this.itemHeight
      }px!important;`
  }

  get listHeight() {
    return this.itemHeight * this.data.length
  }

  get listStyle() {
    return `-webkit-transition: transform ${
      this.transitionDurationNormalized
      }ms ${this.transition}!important
          -moz-transition: transform  ${
      this.transitionDurationNormalized
      }ms ${this.transition}!important
          transition: transform  ${this.transitionDurationNormalized}ms ${
      this.transition
      }!important;
          transform: translateY(${this.listTop}px)!important;`
  }
  get listParentStyle() {
    return `height: ${this.itemHeight *
      this.itemRowsNormalized}px!important;`
  }

  capitalize(str: string) {
    return str.replace(/\b\w/g, l => l.toUpperCase())
  }

  updateState() {
    if (this.resetOnNext) {
      this.listTop = 0
      this.resetOnNext = false
      return
    }
    if (this.listTop === 0) {
      this.moveUp = true
    }
    if (this.moveUp) {
      this.listTop -= this.itemHeight
    } else {
      this.listTop += this.itemHeight
    }
    if (
      this.listTop - this.itemHeight * this.itemRowsNormalized <=
      -this.listHeight
    ) {
      // eslint-disable-next-line
      this.circular ? (this.moveUp = false) : (this.resetOnNext = true)
    }
  }
  animate() {
    if (!this.isPaused && this.data.length > this.itemRowsNormalized) {
      this.updatetimeoutId = setTimeout(() => {
        this.updateState();
        this.animate();
      }, this.transitionDelayNormalized + this.transitionDurationNormalized)
    }
  }
  toggleAnimation() {
    this.isPaused = !this.isPaused
    this.animate()
  }
  throttleToggleAnimation() {
    if (!this.pauseOnHover) return
    clearTimeout(this.updatetimeoutId)
    debounce(this.toggleAnimation, this.transitionDelayNormalized, {
      leading: true
    })()
  }

  mounted() {
    this.animate()
  }
}
