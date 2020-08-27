<template>
  <van-tabbar v-model="active">
    <van-tabbar-item
      name="home"
      to="/"
      :icon="active === 'home' ? 'wap-home' : 'wap-home-o'"
      >主页</van-tabbar-item
    >
    <van-tabbar-item
      name="control"
      to="/control"
      :icon="active === 'control' ? 'setting' : 'setting-o'"
      >控制</van-tabbar-item
    >
    <van-tabbar-item
      name="about"
      to="/about"
      :icon="active === 'about' ? 'phone' : 'phone-o'"
      >关于</van-tabbar-item
    >
  </van-tabbar>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
  name: "MainTabBar",
  data() {
    return {
      active: "home"
    };
  }
};
</script>

<style scoped></style>
