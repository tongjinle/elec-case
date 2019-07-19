<template>
  <ul>
    <li>
      <router-link to="/login">登陆页</router-link>
    </li>
    <li>
      <router-link to="/home">首页</router-link>
    </li>
    <li>
      <router-link to="/visitors">随访列表</router-link>
    </li>
    <li>
      <router-link to="/visitorDetails">患者随访详情</router-link>
    </li>
    <li>
      <router-link to="/newAdd">新增随访</router-link>
    </li>
    <li>
      <router-link to="/search">搜索</router-link>
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