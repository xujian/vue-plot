import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $chartlib: VueConstructor,
    $aside: () => void,
  }
}
