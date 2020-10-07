<template>
  <div class="control-item">
    <div class="name">{{ name }}</div>
    <van-stepper
      v-if="!isButton"
      v-model="cur"
      :name="name"
      disable-input
      input-width="40px"
      min="16"
      button-size="40px"
      @change="this.debounceStepperChange"
    />
    <VanSwitch v-if="isButton" v-model="cur" @change="this.debounceSwitchChange"
      >警报</VanSwitch
    >
  </div>
</template>

<script>
import { debounce } from "underscore";
import Vue from "vue";
import { Stepper, Switch } from "vant";

Vue.use(Switch);
Vue.use(Stepper);

export default {
  name: "ControlItem",
  data() {
    return {
      name: this.DetailData.name,
      cur: this.DetailData.cur,
      isButton: this.DetailData.isButton
    };
  },
  props: {
    DetailData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {
    this.debounceStepperChange = debounce(this.StepperChange, 1000);
    this.debounceSwitchChange = debounce(this.SwitchChange, 1000);
  },
  methods: {
    StepperChange(value, detail) {
      let ControlData = JSON.parse(localStorage.getItem("ControlData"));
      ControlData.forEach(item => {
        if (item.name === detail.name) {
          item.cur = value;
        }
      });
      localStorage.setItem("ControlData", JSON.stringify(ControlData));
    },
    SwitchChange(value) {
      let ControlData = JSON.parse(localStorage.getItem("ControlData"));
      ControlData.forEach(item => {
        if (item.name === "警报器") {
          item.cur = value;
        }
      });
      localStorage.setItem("ControlData", JSON.stringify(ControlData));
    }
  }
};
</script>

<style scoped>
.control-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100px;
  width: 320px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  border-radius: 15px;
  padding: 0 15px;
}

.name {
  font-size: 20px;
}
</style>
