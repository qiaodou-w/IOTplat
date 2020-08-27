<template>
  <div class="info">
    <img :src="src.img" :alt="src.text" />
    <p id="name">{{ src.text + ":" + "22℃"}}</p>
    <p id="time">上次更新时间{{}}</p>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {
    src: {
      type: Object,
      default: function() {
        return {};
      }
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

#name {
  font-size: 24px;
}
</style>
