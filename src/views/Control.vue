<template>
  <div class="control">
    <control-item
      v-for="item in ControlData"
      :detail-data="item"
      :key="item.name"
    ></control-item>
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
          cur: "26",
          isButton: false
        },
        {
          name: "湿度",
          cur: "47",
          isButton: false
        },
        {
          name: "警报器",
          cur: true,
          isButton: true
        }
      ]
    };
  },
  components: {
    ControlItem
  }
};
</script>

<style scoped></style>
