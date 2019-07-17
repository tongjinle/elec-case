<template>
  <div class="monthProcess">
    <div class="monthProcess__title">本月随访进度</div>
    <div class="monthProcess__data">
      <div class="monthProcess__graph"></div>
      <div class="monthProcess__total">
        <div class="monthProcess__total-num"><span class="num">120</span>人</div>
        <div class="monthProcess__total-title">总共</div>
      </div>
      <div class="monthProcess__complete">
        <div class="monthProcess__complete-num"><span class="num">87</span>人</div>
        <div class="monthProcess__complete-title">已完成</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'monthProcess',

}
</script>

<style lang="less">
  @base: 75rem;
  .monthProcess {
    float: left;
    background-color: #fff;
    box-sizing: border-box;
    width: 800/@base;
    padding: 20/@base 0 60/@base 20/@base; 
    margin-bottom: 20/@base;

    &__data {
      display: flex;
      align-items: center;
      margin: 40/@base 0 0 0;
    }

    &__graph {
      margin: 0 0 0 60/@base;
      width: 200/@base;
      height: 200/@base;
      border-radius: 50%;
      border: 20/@base solid red;
    }

    .num {
      font-size: 48/@base;
    }

    &__total {
      margin: 0 0 0 80/@base;
      &-num {

      }
    }

    &__complete {
      margin: 0 0 0 80/@base;
    }

  }
</style>