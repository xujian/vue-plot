<template>
  <button :class="['button',
    'is-primary',
    (round ? 'round' : '')]"
    @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'pa-button',
  props: {
    round: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style>
button {
  border: 1px solid #eee;
  border-radius: 0;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  padding: 0px 10px;
  margin: 10px;
}
button.round {
  border-radius: 10px;
}
</style>
