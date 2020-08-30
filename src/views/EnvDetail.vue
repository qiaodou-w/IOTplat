<template>
  <div class="env-detail">
    <van-nav-bar
      left-arrow
      :title="this.$route.params.category"
      @click-left="back"
    ></van-nav-bar>
    <detail></detail>
    <h2>{{ cate }}详情页</h2>
  </div>
</template>

<script>
import Detail from "../components/content/EnvDetail/DetailEcharts";
export default {
  name: "EnvDetail",
  components: {
    Detail
  },
  data() {
    return {
      cate: null
    }
  },
  mounted() {
    this.cate = this.$route.params.category
    
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style></style>
