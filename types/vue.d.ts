import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $chartlib: typeof Vue,
    $aside: () => void,
  }
}
