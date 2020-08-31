<template>
  <div class="info" @click="jump">
    <img :src="imgSrc" :alt="src.text" />
    <div class="text">
      <p id="name">{{ src.text + ":" + src.data.data[0] + src.units }}</p>
      <p id="time">上次更新时间:{{ src.data.time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      imgSrc: require("@/assets/img/" + this.src.img)
    };
  },
  props: {
    src: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    jump() {
      this.$router.push("home/" + this.src.name);
    }
  }
};
</script>

<style>
p {
  margin: 0;
  padding: 0;
}

.info {
  position: relative;

  margin: 5px;
  width: 350px;
  height: 100px;
  border: 1px solid #39a9ed;
  border-radius: 15px;

  font-size: 16px;
}

.info img {
  position: absolute;
  left: 10px;
  top: 18px;
  width: 64px;
  height: 64px;
}

.text {
  position: absolute;
  left: 94px;
  top: 50px;
  transform: translateY(-50%);
}
#name {
  padding-bottom: 10px;

  text-align: left;
  font-size: 24px;
}
</style>
