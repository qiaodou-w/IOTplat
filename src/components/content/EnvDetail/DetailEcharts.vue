<template>
  <div class="analyzeSystem">
    <div class="my-chart" ref="myEchart"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "Detail",
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.myEchart);
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
            symbolSize: 10,
            data: [20, 23, 25, 26, 28, 26, 25, 23, 21, 20]
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
