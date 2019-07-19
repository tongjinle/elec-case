<template>
  <div class="visitorDetailsBox">
    <div class="head">
      <div>
        <img src="../../assets/image/back.png" alt />
      </div>
      <p>张飞</p>
      <div>
        <img src="../../assets/image/zengjia@2x.png" alt />
      </div>
    </div>
    <div class="nextTime">
      下次随访：
      <span>2020-01-01</span>
    </div>
    <div class="content">
      <VisitorDetailCard />
      <VisitorDetailCard />
      <VisitorDetailCard />
    </div>
  </div>
</template>

<script>
import VisitorDetailCard from "@/component/visitorDetailCard";
export default {
  name: "visitorDetails",
  components: { VisitorDetailCard }
};
</script>

<style lang="less" scoped>
.visitorDetailsBox {
  .head {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100px;
    div {
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
      }
    }
    p {
      width: 80%;
      font-size: 40px;
      text-align: center;
      margin: 0;
      line-height: 100px;
    }
  }
  .nextTime {
    font-size: 30px;
    padding: 0 100px;
    span {
      font-size: 35px;
      color: rgb(18, 159, 259);
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 100px;
  }
}
</style>