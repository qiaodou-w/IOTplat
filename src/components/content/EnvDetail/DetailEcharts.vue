<template>
  <div class="analyzeSystem">
    <div class="my-chart"></div>
  </div>
</template>

<script>
const echarts = require("echarts");
export default {
  name: "Detail",
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.querySelector(".my-chart"));
      this.chart.setOption({
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  }
};
</script>

<style>
  .my-chart {
    height: 375px;
    width: 375px;
  }
</style>
