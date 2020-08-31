<template>
  <div class="env-detail">
    <van-nav-bar
      left-arrow
      :title="this.$route.params.category"
      @click-left="back"
    ></van-nav-bar>
    <detail v-if="envData.length" :env-data="envData"></detail>
    <h2>{{ cate }}详情页</h2>
  </div>
</template>

<script>
import Detail from "../components/content/EnvDetail/DetailEcharts";
import { getEnvData } from "../network/envdetail";

export default {
  name: "EnvDetail",
  components: {
    Detail
  },
  data() {
    return {
      cate: null,
      envData: []
    };
  },
  created() {
    this.cate = this.$route.params.category;
    getEnvData(this.cate).then(value => {
      this.envData = value.data
    });
  },
  mounted() {

  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style></style>
