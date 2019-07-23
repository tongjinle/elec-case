<template>
  <div class="visitors">
    <div class="head">
      <div @click="getBack()">
        <img src="../../assets/image/back.png" alt />
      </div>
      <p>新增患者</p>
      <div></div>
    </div>
    <div class="content">
      <VisitorCard />
      <VisitorCard />
      <VisitorCard />
      <VisitorCard />
      <VisitorCard />
    </div>
  </div>
</template>

<script>
import VisitorCard from "@/component/visitorCard";
export default {
  name: "visitors",
  components: { VisitorCard },
  data() {
    return {};
  },
  methods: {
    getBack() {
      this.$router.back(-1);
    }
  }
};
</script>

<style lang="less" scoped>
@base: 1rem;
.visitors {
  .head {
    display: flex;
    justify-content: flex-start;
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
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
  }
}
</style>