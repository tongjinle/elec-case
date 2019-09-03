<template>
  <div class="app">
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js"
    };
  },
  created() {
    // this.fetchData();
  },
  methods: {
    // async fetchData() {
    //   const data = await getData();
    //   this.msg = data;
    // }
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  h1 {
    color: #cc3333;
  }
}
</style>