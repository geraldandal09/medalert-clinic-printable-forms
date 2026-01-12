<template>
  <div id="app">
    <component
      v-if="printOptions.template"
      v-bind:is="printOptions.template"
    />
  </div>
</template>

<!-- Initialization Script -->
<script>
import './assets/style.css'
import 'paper-css/paper.min.css'

export default {
  name: 'PrintApp',
}
</script>

<!-- Default styling for the PrintApp -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
