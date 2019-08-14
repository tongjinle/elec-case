<template>
  <div class="visitorDataCard" @click="gotoList">
    <div class="visitorDataCard__data">
      <img class="visitorDataCard__data-icon" src="../assets/image/icon-data.png" />

      <div class="visitorDataCard__data-num">{{total}}</div>
    </div>
    <div class="visitorDataCard__title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: "visitorDataCard",
  props: {
    total: Number,
    title: String
  }
};
</script>

<style lang="less">
@base: 1rem;
.visitorDataCard {
  float: left;
  background-color: #fff;
  box-sizing: border-box;
  width: @base*5.33;
  // width: 400 / @base;
  // margin: 0 0 0 20/@base;
  padding: 20px 20px;
  // margin-bottom: 20/@base;

  &__data {
    display: flex;
    align-items: center;
    &-icon {
      // width: 50 / @base;
      // height: 45 / @base;
    }
    &-num {
      // margin: 0 0 0 30 / @base;
      font-size: @base;
      margin-left: 20px;
    }
  }

  &__title {
    margin: 20px 0 0 0;
    padding-left: 60px;
    font-size: @base / 2;
  }
}
</style>