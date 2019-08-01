<template>
  <div class="visitorDetailsBox">
    <div class="head">
      <div @click="getBack()">
        <img src="../../assets/image/back.png" alt />
      </div>
      <p>关羽</p>
      <div @click="gotoAdd">
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
  components: { VisitorDetailCard },
  data() {
    return {};
  },
  methods: {
    getBack() {
      this.$router.back(-1);
    },
    gotoAdd() {
      this.$router.push({ path: "/newAdd" });
    }
  }
};
</script>

<style lang="less" scoped>
@base: 1rem;
.visitorDetailsBox {
  .head {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    div {
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 25px;
        height: 25px;
      }
    }
    p {
      width: 80%;
      font-size: @base / 2;
      text-align: center;
      margin: 0;
      line-height: 50px;
    }
  }
  .nextTime {
    font-size: @base / 2.5;
    padding: 0 @base;
    span {
      font-size: @base / 3;
      color: rgb(18, 159, 259);
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 @base;
  }
}
</style>