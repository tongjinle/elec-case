<template>
  <div class="visitorDataCard">
    <div class="visitorDataCard__data">
      <img class="visitorDataCard__data-icon" src="../assets/image/icon-data.png" />
      <div class="visitorDataCard__data-num">25</div>
    </div>
    <div class="visitorDataCard__title">随访窗口人数（本周）</div>
  </div>
</template>

<script>
export default {
  name: 'visitorDataCard',

}
</script>

<style lang="less">
  @base: 75rem;
  .visitorDataCard {
    float: left;
    background-color: #fff;
    box-sizing: border-box;
    width: 400/@base;
    margin: 0 0 0 20/@base;
    padding: 20/@base 0 60/@base 20/@base; 
    margin-bottom: 20/@base;

    &__data {
      display: flex;
      align-items: center;
      &-icon {
        width: 40/@base;
        height: 35/@base;
      }
      &-num {
        margin: 0 0 0 30/@base;
        font-size: 48/@base;
      }
    }

    &__title {
      margin: 10/@base 0 0 0;
      padding: 0 0 0 70/@base;
    }


    

  }
</style>