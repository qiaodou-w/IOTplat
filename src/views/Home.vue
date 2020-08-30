<template>
  <div class="home">
    <van-nav-bar title="环境信息" />
    <div class="environment-info">
      <environment-info :src="EnvironmentInfo.temperature"></environment-info>
      <environment-info :src="EnvironmentInfo.humidity"></environment-info>
    </div>
  </div>
</template>

<script>
import moment from "moment"
import EnvironmentInfo from "../components/content/Info";

export default {
  name: "Home",
  data() {
    return {
      EnvironmentInfo: {
        temperature: {
          img: require("@/assets/img/temp-n.png"),
          text: "温度",
          name: "temperature",
          units: "℃",
          data: {
            time: moment().format("MM-DD HH:mm:ss"),
            data: [20,23,25,26,28,26,25,23,21,20]
          }
        },
        humidity: {
          img: require("@/assets/img/shidu2.png"),
          text: "湿度",
          name: "humidity",
          units: "%",
          data: {
            time: moment().format("MM-DD HH:mm:ss"),
            data: [50,56,57]
          }
        }
      }
    };
  },
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
