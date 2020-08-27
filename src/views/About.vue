<template xmlns="">
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="info">我是按钮</van-button>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
    </van-swipe>

    <van-tabbar>
      <van-tabbar-item>1</van-tabbar-item>
      <van-tabbar-item>2</van-tabbar-item>
      <van-tabbar-item>3</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  name: "about",
  comments: {}
};
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
