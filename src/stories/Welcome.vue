<template>
  <div class="main">
    <h1>标准图表库</h1>
    <a class="link" @click="goToButton">stories</a>
    <code class="code">Button</code>
  </div>
</template>

<script>
  export default {
    props: {
      goToButton: {
        default: () => () => null
      },
    }
  }
</script>

<style>
  .main {
    margin: 15px;
    max-width: 600;
    line-height: 1.4;
    font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif;
  }

  .code {
    font-size: 15;
    font-weight: 600;
    padding: 2px 5px;
    border: 1px solid #eae9e9;
    border-radius: 4px;
    background-color: #f3f2f2;
    color: #3a3a3a;
  }
</style>
