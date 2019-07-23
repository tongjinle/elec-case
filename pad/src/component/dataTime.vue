<template>
  <div class="dataTime">
    <div class="dataTimeBox">
      <span>2019-01-01</span>
      <img src="../assets/image/calendar.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "addButton",
  data() {
    return {
      value: "5"
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less">
@base: 1rem;
.dataTime {
  width: @base*4;
  background-color: rgb(247, 247, 247);
  font-size: @base / 3;
  padding: 10px 20px;
  border-radius: 5px;
  .dataTimeBox {
    display: flex;
    justify-content: flex-start;
    span {
      margin-right: @base;
    }
    img {
      width: @base / 2;
      height: @base / 2;
    }
  }
}
</style>