<template>
  <div class="monthProcess">
    <div class="monthProcess__title">本月随访进度</div>
    <div class="main">
      <el-progress class="progress" type="circle" :percentage="75"></el-progress>
      <div class="all">
        <div>
          <span>123</span>人
        </div>
        <p>总共</p>
      </div>
      <div class="ready">
        <div>
          <span>78</span>人
        </div>
        <p>已完成</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "monthProcess"
};
</script>

<style lang="less">
@base: 75rem;
.monthProcess {
  font-size: 30px;
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
    .progress {
      width: 35%;
      position: relative;
      .el-progress-circle {
        width: 100% !important;
        height: 100% !important;
      }
      .el-progress__text {
        font-size: 30px !important;
        text-align: center;
        width: 100%;
        position: absolute;
        top: 40%;
        color: rgb(32, 160, 255);
      }
    }
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