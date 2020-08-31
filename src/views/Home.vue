<template>
  <div class="home">
    <van-nav-bar title="环境信息" />
    <div class="environment-info">
      <environment-info
        v-for="item in envInfo"
        :key="item.name"
        :src="item"
      ></environment-info>
    </div>
  </div>
</template>

<script>
import EnvironmentInfo from "../components/content/Info";

import { getHomeData } from "../network/home";

export default {
  name: "Home",
  data() {
    return {
      envInfo: [],
      temperature: null,
      humidity: null
    };
  },
  created() {
    getHomeData().then(value => {
      this.envInfo = value.data.EnvironmentInfo;
    });
  },
  mounted() {},
  components: {
    EnvironmentInfo
  }
};
</script>

<style>
.environment-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
