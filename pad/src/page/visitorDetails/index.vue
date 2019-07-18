<template>
  <div class="visitorDetailsBox">
    <div class="head">
      <div>
        <img src="../../assets/image/back.png" alt />
      </div>
      <div>张飞</div>
      <div>
        <img src="../../assets/image/zengjia@2x.png" alt />
      </div>
    </div>
    <div>下次随访：2020-01-01</div>
    <div class="visitorsDetails">
      <VisitorDetailCard />
      <VisitorDetailCard />
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
  .visitorsDetails {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>