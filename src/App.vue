<template>
  <div id="app">
    <router-view />
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
// import Vue from "vue";
import MainTabBar from "./components/content/MainTabBar";
export default {
  components: { MainTabBar },
  data() {
    return {};
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
