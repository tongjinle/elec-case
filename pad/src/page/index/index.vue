<template>
  <div>
    <ul>
      <li>
        <a target="_blank" href="./#/login">登陆页(done)</a>
      </li>
      <li>
        <a target="_blank" href="./#/home">首页(done)</a>
      </li>
      <li>
        <a target="_blank" href="./#/visitors">随访列表(done)</a>
      </li>
      <li>
        <a target="_blank" href="./#/visitorDetails?id=1&name=百里">患者随访详情(done)</a>
      </li>
      <li>
        <a target="_blank" href="./#/newAdd?id=19">新增随访(done)</a>
      </li>
      <li>
        <a target="_blank" href="./#/search">搜索(done)</a>
      </li>
      <li>
        <a target="_blank" href="./#/followUpMain?id=20">随访预览(done)</a>
      </li>
      <li>
        <a target="_blank" href="./#/newPatient">新增患者</a>
      </li>
      <li>
        <a target="_blank" href="./#/patientMsg">患者信息</a>
      </li>
      <li>
        <a target="_blank" href="./#/test">测试</a>
      </li>
    </ul>
    <hr />
    <div>屏幕大小:{{width}}*{{height}}</div>
    <div>屏幕dpr:{{dpr}}</div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      width: 0,
      height: 0,
      dpr: 0
    };
  },
  mounted() {
    this.width = window.screen.width;
    this.height = window.screen.height;
    this.dpr = window.devicePixelRatio;
  }
};
</script>

<style lang="less" scoped>
li {
  font-size: 30px;
}
</style>