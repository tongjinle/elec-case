<template>
  <div class="visitor">
    <div class="card">
      <div class="cardLeft">
        <div class="up">
          姓名
          <span>关羽</span>
        </div>
        <div class="down">
          <div class="item">
            医生
            <span>华佗</span>
          </div>
          <div class="item">
            上次随访
            <span>2019-1-1</span>
          </div>
          <div class="item">
            机器型号
            <span>XXXXXX</span>
          </div>
        </div>
      </div>
      <div class="cardRight">
        <button class="btnBlue">添加随访</button>
        <button class="btnWhite">随访详情</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "visitorCard"
};
</script>

<style lang="less">
@base: 1rem;
.visitor {
  margin-top: 40px;
  width: 100%;
  font-size: @base / 3;
  .card {
    display: flex;
    justify-content: space-between;
    // border: 1px solid rgb(244, 244, 244);
    box-shadow: 1px 1px 5px #888888;
    border-radius: 10px;
    padding: 20px 20px;
    color: rgb(102, 102, 102);
    .cardLeft {
      .up {
        span {
          color: black;
          font-size: @base / 2;
        }
        margin-bottom: 20px;
      }
      .down {
        display: flex;
        justify-content: flex-start;
        .item {
          margin-right: 50px;
          span {
            color: black;
            font-size: @base / 2;
          }
        }
      }
    }
    .cardRight {
      display: flex;
      align-items: center;
      button {
        font-size: @base / 3;
        padding: 10px 30px;
        border: 1px solid rgb(18, 159, 259);
        border-radius: @base / 2;
      }
      .btnBlue {
        background-color: rgb(18, 159, 259);
        color: white;
        margin-right: 50px;
      }
      .btnWhite {
        background: white;
        color: rgb(18, 159, 259);
      }
    }
  }
}
</style>