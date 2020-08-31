<template>
  <div id="app">
    <router-view />
    <main-tab-bar v-if="$route.meta.showTab"></main-tab-bar>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";
Vue.use(NavBar);

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

.van-nav-bar {
  background: #1989fa;
}

.van-nav-bar .van-nav-bar__title {
  color: white;
}

.van-nav-bar .van-icon {
  color: white;
}
</style>
