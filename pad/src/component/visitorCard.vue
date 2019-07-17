<template>
    <div class="visitor">
      <div class="visitor__info">
        <div class="visitor__info-name">
          <div class="title">姓名</div>
          <div class="value">陈红子</div>
        </div>
        <div class="visitor__info-more">
          <div class="title">医生</div>
          <div class="value">王萌萌</div>
          <div class="title">上次随访</div>
          <div class="value">2019-01-01</div>
          <div class="title">机器型号</div>
          <div class="value">XXXXXXXX</div>
        </div>
      </div>
      <div class="visitor__btns">
        <button>添加随访</button>
        <button>随访详情</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'visitorCard',

}
</script>

<style lang="less"> 
  @base: 75rem;
  .visitor {
    margin-top: 20/@base;
    display: flex;
    width : 1220/@base;
    height: 100/@base;
    padding: 20/@base;
    border: 1px solid #000;

    &__info {
      flex: 0 0 900/@base;
      &-name {
        display: flex;
      }
      &-more {
        display: flex;
        align-items: flex-end;
      }
      .title {
        font-size: 16/@base;
        margin: 0 10/@base 0 0;
      }
      .value {
        font-size: 20/@base;
      }
    }
    &__btns {
      flex: 1;
    }
  }
</style>