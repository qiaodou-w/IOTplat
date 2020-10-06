<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
          v-model="user.username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="user.password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from 'vue';
import { Form, Field } from 'vant';

Vue.use(Form);
Vue.use(Field);
export default {
  name: "Login",
  data() {
    return {
      user: {}
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', this.user);
      console.log( values )
    },
  },
}
</script>

<style scoped>

</style>