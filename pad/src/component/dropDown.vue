<template>
  <div class="dropDown">
    <div class="box">
      <input type="text" v-model="value" />
      <img src="../assets/image/s@2x.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "dropDown",
  data() {
    return {
      value: "10"
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less">
@base: 1rem;
.dropDown {
  font-size: @base / 2;
  .box {
    input {
      padding: 10px 20px;
      border: 1px solid rgb(221, 221, 221);
      border-radius: 5px;
      width: @base*3.5;
    }
    img {
      position: relative;
      right: @base*0.9;
    }
  }
}
</style>