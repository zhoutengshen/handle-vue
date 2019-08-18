<template>
  <div>
    <h1 class="test">{{ img }}</h1>
    <img :src="img" />
  </div>
</template>
<script>
import img from "@/asset/img.jpg";
export default {
  data() {
    return {
      msg: "POPOOPOPKP）",
      img: img
    };
  }
};
</script>
<style lang="less" scoped>
.test {
  color: @color;
}
</style>

