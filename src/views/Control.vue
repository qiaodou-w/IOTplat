<template>
  <div class="control">
    <van-nav-bar title="控制面板" />
    <div class="panel">
      <control-item
        v-for="item in ControlData"
        :detail-data="item"
        :key="item.name"
      ></control-item>
    </div>
  </div>
</template>

<script>
import ControlItem from "../components/content/Control/ControlItem";
export default {
  name: "Control",
  data() {
    return {
      ControlData: [
        {
          name: "温度",
          cur: 25,
          isButton: false
        },
        {
          name: "湿度",
          cur: 50,
          isButton: false
        },
        {
          name: "警报器",
          cur: false,
          isButton: true
        }
      ]
    };
  },
  components: {
    ControlItem
  },
  created() {
    this.__init();
  },
  methods: {
    __init() {
      if (!localStorage.getItem("ControlData")) {
        localStorage.setItem(
          "ControlData",
          JSON.stringify(this.ControlData)
        );
      } else {
        this.ControlData = JSON.parse(localStorage.getItem("ControlData"));
      }
    }
  }
};
</script>

<style scoped>
.control-item {
  margin: 5px auto 10px;
}
</style>
