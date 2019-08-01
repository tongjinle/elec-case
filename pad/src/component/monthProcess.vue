<template>
  <div class="monthProcess">
    <div class="monthProcess__title">本月随访进度</div>
    <div class="main">
      <van-circle
        v-model="currentRate"
        layer-color="rgb(225,225,225)"
        :rate="actual/everybody*100"
        size="250px"
        :speed="100"
        :text="text"
      />
      <div class="all">
        <div>
          <span>{{everybody}}</span>人
        </div>
        <p>总共</p>
      </div>
      <div class="ready">
        <div>
          <span>{{actual}}</span>人
        </div>
        <p>已完成</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "monthProcess",
  props: {
    everybody: Number,
    actual: Number
  },
  data() {
    return {
      currentRate: 30
    };
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    }
  }
};
</script>

<style lang="less">
@base: 1rem;
.monthProcess {
  font-size: @base / 2;
  width: 100%;
  height: 100%;
  float: left;
  background-color: #fff;
  box-sizing: border-box;
  padding: 20px 20px;
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    .all {
      display: flex;
      flex-direction: column;
      justify-content: center;
      div {
        font-size: 30px;
        span {
          font-size: 40px;
        }
      }
      p {
        text-align: center;
        font-size: 30px;
      }
    }
    .ready {
      height: 100%;
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      div {
        font-size: 30px;
        span {
          font-size: 40px;
        }
      }
      p {
        font-size: 30px;
      }
    }
  }
}
</style>