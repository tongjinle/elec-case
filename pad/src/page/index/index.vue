<template>
  <ul>
    <li>
      <router-link to="/login">登陆页(done)</router-link>
    </li>
    <li>
      <router-link to="/home">首页(done)</router-link>
    </li>
    <li>
      <router-link to="/visitors">随访列表(done)</router-link>
    </li>
    <li>
      <router-link to="/visitorDetails?id=1&name=百里">患者随访详情(done)</router-link>
    </li>
    <li>
      <router-link to="/newAdd">新增随访(done)</router-link>
    </li>
    <li>
      <router-link to="/search">搜索(done)</router-link>
    </li>
    <li>
      <router-link to="/followUpMain">随访预览</router-link>
    </li>
    <li>
      <router-link to="/newPatient">新增患者</router-link>
    </li>
    <li>
      <router-link to="/patientMsg">患者信息</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "index"
};
</script>

<style lang="less" scoped>
li {
  font-size: 30px;
}
</style>