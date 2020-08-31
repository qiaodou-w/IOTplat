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
      chart: null,
      envValue: []
    };
  },
  mounted() {
    this.transData()
    this.initChart();
  },
  props: {
    envData: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.myEchart);
      this.chart.setOption({
        tooltip: {},
        xAxis: {
          name:"时间",
          data: ["8:15","8:25","8:35","8:45","8:55","9:05","9:15","9:25"]
        },
        yAxis: {
          name: "温度"
        },
        series: [
          {
            type: "line",
            symbolSize: 10,
            data: this.envValue
          }
        ]
      });
    },
    transData() {
      this.envData.forEach(value => this.envValue.push(value.value))
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
