<template>
  <div class="control-item">
    <div class="name">{{ name }}</div>
    <van-stepper v-if="!isButton" v-model="cur" disable-input/>
    <VanSwitch v-if="isButton" v-model="cur">警报</VanSwitch>
  </div>
</template>

<script>
import Vue from "vue";
import { Stepper,Switch } from "vant";

Vue.use(Switch )
Vue.use(Stepper);

export default {
  name: "ControlItem",
  data(){
    return {
      name: this.DetailData.name,
      cur: this.DetailData.cur,
      isButton: this.DetailData.isButton
    }
  },
  props: {
    DetailData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
  
  }
};
</script>

<style scoped></style>
