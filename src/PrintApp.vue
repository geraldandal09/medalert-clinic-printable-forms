<template>
  <div id="app">
    <component
      v-if="printOptions.template"
      :is="printOptions.template"
    />
    <p v-else>No template found</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import "./assets/style.css";
import "paper-css/paper.min.css";

export default {
  name: "PrintApp",
  computed: {
    ...mapState(["printOptions"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>