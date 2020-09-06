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
      envValue: [],
      envDate: []
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.myEchart);
    this.chart.showLoading();
  },
  props: {
    envData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    initChart() {
      this.chart.setOption({
        tooltip: {},
        xAxis: {
          name: "时间",
          data: this.envDate
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
      this.envData.forEach(value => {
        this.envValue.push(value.value);
        this.envDate.push(value.date);
      });
    }
  },
  watch: {
    envData: function() {
      this.transData();
      this.chart.hideLoading();
      this.initChart();
      // this.chart.setOption({
      //   xAxis: {
      //     data: this.envDate
      //   },
      //   series: [
      //     {
      //       data: this.envValue
      //     }
      //   ]
      // })
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
