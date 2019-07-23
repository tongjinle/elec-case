<template>
  <div class="visitorDetail">
    <div class="card">
      <div class="cardUp">
        <img src="../assets/image/time@2x.png" alt />2019-01-01
      </div>
      <div class="cardDown">
        <div class="item">
          医生
          <span>华佗</span>
        </div>
        <div class="item">
          电池
          <span>OK</span>
        </div>
        <div class="item">
          机器
          <span>XXXXXX</span>
        </div>
        <div class="item">事件概况</div>
        <button>心率</button>
        <button>起搏</button>
        <button>设置</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "visitorDetailCard"
};
</script>

<style lang="less" scoped>
@base: 1rem;
.visitorDetail {
  width: 100%;
  margin-top: 40px;
  .card {
    box-shadow: 1px 1px 5px #888888;
    border-radius: 10px;
    padding: 20px 20px;
    font-size: @base / 3;
    .cardUp {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      img {
        margin-right: 20px;
      }
    }
    .cardDown {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .item {
        margin-right: @base / 2;
        span {
          color: black;
          font-size: @base / 2.5;
        }
      }
      button {
        padding: 10px @base / 2;
        font-size: @base / 3;
        border-radius: 70px;
        border: 1px solid #888888;
        background-color: white;
        margin-right: 20px;
      }
    }
  }
}
</style>