<template>
  <div>
    <!-- {{width}}|{{height}} -->
    <div class="red"></div>
    <div class="blue"></div>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return { width: 0, height: 0 };
  },
  mounted() {
    this.width = window.document.documentElement.clientWidth;
    this.height = widow.document.documentElement.clientHeigth;
  }
};
</script>

<style lang="less" scoped>
.red {
  background-color: red;
  width: 100vw;
  height: 50vh;
}
.blue {
  background-color: blue;
  width: 100vw;
  height: 50vh;
}
</style>