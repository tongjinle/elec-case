<template>
  <div class="visitors">
    <div class="head">随访列表</div>
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
  components: { VisitorCard }
};
</script>

<style lang="less" scoped>
.visitors {
  .head {
    line-height: 100px;
    font-size: 40px;
    text-align: center;
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