<template>
  <div class="container">
    <h2>智慧家庭</h2>
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
          登录
        </van-button>
      </div>
    </van-form>
    
    <div class="tips">
      <p>tips:</p>
      <p>
        测试账号:test
        密码:1234
      </p>
    </div>
    
    <footer>
      @made by wyr
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import { Form, Field } from "vant";

import { login } from "../network/login";

Vue.use(Form);
Vue.use(Field);
export default {
  name: "Login",
  data() {
    return {
      user: {}
    };
  },
  methods: {
    async onSubmit(values) {
      try {
        const res = await login(values);
        sessionStorage.setItem("token", String(res.data));
        await this.$router.replace("/home");
        this.$notify({ message: "登陆成功", type: "success" });
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style scoped>


h2,h3 {
  margin: 0;
  padding-bottom: 3rem;
}

.van-field {
  margin-bottom: 1rem;
  border-radius: 1rem;
}

.container {
  padding-top: 10rem;
}

.tips {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
}

footer {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
