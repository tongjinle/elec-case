<template>
    <div class="visitorDetail">
      <div class="detail__date">2019-01-01</div>
      <div class="detail__more">
        <div class="title">医生</div>
        <div class="value">王萌萌</div>
        <div class="title">电池</div>
        <div class="value">OK</div>
        <div class="title">机器型号</div>
        <div class="value">XXXXXXXX</div>
        <div class="title">事件概率</div>
        <div class="value">心律</div>
        <div class="value">起搏</div>
        <div class="value">设置</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'visitorDetailCard',

}
</script>

<style lang="less"> 
  @base: 75rem;
  .visitorDetail {
    margin-top: 20/@base;
    width : 1220/@base;
    height: 100/@base;
    padding: 20/@base;
    border: 1px solid #000;

    
    .detail__more {
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
</style>