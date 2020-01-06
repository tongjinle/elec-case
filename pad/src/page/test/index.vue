<template>
  <div>
    <!-- {{width}}|{{height}} -->
    <div class="red"></div>
    <div class="blue"></div>
  </div>
</template>

<script>
import * as bll from "../../utils/business";
export default {
  name: "test",
  data() {
    return {};
  },
  async mounted() {
    let res = await bll.searchByUUID("da72a6bf-074d-44e6-b8c3-47e5cef4717e");
    console.log(res);
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