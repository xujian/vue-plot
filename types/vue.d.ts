import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
  }
  interface VueConstructor {
    $chartlib: VueConstructor,
    $aside: () => void
  }
}
